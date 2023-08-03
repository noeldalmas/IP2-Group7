import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';

function Cryptos(props) {

    const [cryptos, setCryptos] = useState(
        [{
            "id": "bitcoin",
            "rank": "1",
            "symbol": "BTC",
            "name": "Bitcoin",
            "supply": "19444675.0000000000000000",
            "maxSupply": "21000000.0000000000000000",
            "marketCapUsd": "562479795818.4885093860183100",
            "volumeUsd24Hr": "3324278398.9788901783879871",
            "priceUsd": "28927.1893625626815252",
            "changePercent24Hr": "-1.5950289701079472",
            "vwap24Hr": "29205.8679514424808204",
            "explorer": "https://blockchain.info/"
        },
        {
            "id": "ethereum",
            "rank": "2",
            "symbol": "ETH",
            "name": "Ethereum",
            "supply": "121089886.9086443200000000",
            "maxSupply": null,
            "marketCapUsd": "221640308618.7345701149127700",
            "volumeUsd24Hr": "2126912239.7837016126248923",
            "priceUsd": "1830.3783600520663617",
            "changePercent24Hr": "-1.8870115903582224",
            "vwap24Hr": "1850.6830183205473658",
            "explorer": "https://etherscan.io/"
        },]
    );

    const [cryptosToRender, setCryptosToRender] = useState(cryptos);

    const [searchKeyword, setSearchKeyword] = useState("");
    const handleSearchChange = (e)=>{
        setSearchKeyword(e.target.value)
    }

    const [loading, setLoading] = useState(false);

    const fetchCryptos = async()=>{
        const baseUrl = "https://api.coincap.io";
        setLoading(true)
        const response = await fetch(`${baseUrl}/v2/assets`)

        if(response){
            if(response.ok){
                const data = await response.json();
                if(data){
                    const temp = data.data;
                    setCryptos(temp);
                    setCryptosToRender(temp);                        
                }
            }
            
            setLoading(false)
        }
    }

    const [sortField, setSortField] = useState("");
    const fieldList = [
        {
            name: "Market Cap",
            field: "marketCapUsd"
        },
        {
            name: "Price",
            field: "priceUsd"
        },
        {
            name: "Volume",
            field: "volumeUsd24Hr"
        },
        {
            name: "Supply",
            field: "supply"
        },
        {
            name: "Change",
            field: "changePercent24Hr"
        },
        
    ]

    const handleSort = (field)=>{
        const sortedCryptos = cryptos.sort((a, b)=>{
            return a[field] - b[field]
        })

        setCryptosToRender(sortedCryptos);
    }

    const handleChangeSortField = (field)=>{
        setSortField(field)
    }

    useEffect(()=>{
        if(sortField){
            handleSort(sortField)
        }
    }, [sortField])



    const resetSorting = ()=>{
        setCryptosToRender(cryptos);
        setSortField("")
    }

    useEffect(()=>{
        document.title = 'Cryptos | Analytics Hub'
        fetchCryptos();
        
    }, [])

    useEffect(()=>{
        const filteredCryptos = cryptos.filter((crypto)=>{
            return crypto.name.toLowerCase().includes(searchKeyword.toLowerCase())
        })

        setCryptosToRender(filteredCryptos);

    }, [searchKeyword])

    
    const formatNumber = (number)=>{
        const num = parseFloat(number).toFixed(2);
        if(!isNaN(num) && isFinite(num)){
            if(num > 1000 && num < 1000000){
                return (num/1000).toFixed(2) + "K"
            }
            else if(num > 1000000 && num < 1000000000){
                return (num/1000000).toFixed(2) + "M"
            }
            else if(num > 1000000000 && num < 1000000000000){
                return (num/1000000000).toFixed(2) + "B"
            }

        }

        return num
    }



    return (
        <>
            <Header/>

            <main className='crypto__search flex '>
                <div className='container w-full mx-auto flex flex-col gap-3'>

                    <div className='flex w-4/5 text-white mx-auto search__bar justify-between'>
                        <div className='text-xl font-600 results__cryptos'>Results({cryptosToRender.length})</div>
                        <input type="text" className='no-focus mx-auto' onChange={handleSearchChange} placeholder='Search Crypto' />
                        <div className='flex gap-1 items-center'>
                            <span className='sort__label'>SORT BY</span> 
                            <div className='filter__container relative'>
                                <div className='filter__value'> {sortField || "Choose"}</div>
                                <div className='filter__list absolute text-sm flex flex-col'>
                                    {fieldList.map((field, index)=>(
                                        <span key={index} onClick={()=>handleChangeSortField(field.field)}>{field.name}</span>
                                    ))

                                    }

                                    <span onClick={resetSorting} className='bg-white mt-1 color-main text-center rounded-md'>RESET</span>                                    

                                </div>

                                
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2 justify-center flex-wrap w-4/5 mx-auto'>

                        {loading ? 

                        <div className='flex mx-auto full-center h-full color-main'><Loader/></div>

                        : 

                        <>
                            {cryptosToRender.map((crypto, index)=>{
                                const marketBillions = formatNumber(crypto.marketCapUsd);
                                const priceUsd = formatNumber(crypto.priceUsd);
                                const supply = formatNumber(crypto.supply);
                                const volumeUsd24Hr = formatNumber(crypto.volumeUsd24Hr);

                                return(

                                    <div className='bg-white crypto__repeated p-2 px-3 flex items-center flex-col rounded-md'>
                                        <span className='text-3xl'>{crypto.symbol}</span>
                                        <span className='mt-2 text-xl color-lb'>{crypto.name}</span>
                                        <span className='text-gray'>{marketBillions}</span>
                                        <div className='flex flex-col gap-1 crypto__info w-full mt-3'>
                                            <div className='flex gap-1'>
                                                <i className='fas fa-dollar text-center'></i>
                                                <span>{priceUsd}</span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <i className='fas fa-clock text-center'></i>
                                                <span>{volumeUsd24Hr}</span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <i className='fas fa-coins text-center'></i>
                                                <span>{supply}</span>
                                            </div>

                                        </div>
                                        <a href={crypto.explorer} target="_blank" className='explore__crypto rounded-md text-white'>Explore</a>

                                    </div>
                                )
                            })

                            }
                        
                        </>

                        }


                    </div>

                </div>


            </main>

            <Footer/>
            
        </>
    );
}

export default Cryptos;