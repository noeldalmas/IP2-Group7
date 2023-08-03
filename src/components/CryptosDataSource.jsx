import React from 'react';

function CryptosDataSource({setIsJobsSource}) {
    return (
        <section className='source__section'>

            <h1>Crypto Data</h1>
            
            <h5>Data Source</h5>

            <p>
            The CoinCap API provides real-time and historical cryptocurrency market data aggregated from numerous exchanges worldwide.
            It was created by CoinCap.io which operates a crypto market tracking website. The API gives programmatic access to their data.
            The API includes endpoints for assets (/assets), exchanges (/exchanges), markets (/markets), rates (/rates), and OHLCV candle data (/candles).
            The API currently tracks over 1000 cryptocurrencies by integrating with 100+ exchanges to provide transparent and accurate pricing and market data.



            </p>
            
            <h5>Data Contents</h5>
            <p>
            The /assets endpoint returns an array of all coins tracked by CoinCap (over 1000). Each asset object contains:

            </p>
            <ul>
                <li>
                id - unique identifier

                </li>
                <li>
                rank - market cap rank

                </li>
                <li>
                symbol - ticker symbol

                </li>
                <li>
                name - full name

                </li>
                <li>
                supply - circulating supply

                </li>
                <li>
                maxSupply - maximum supply

                </li>
                <li>
                marketCapUsd - market capitalization in USD

                </li>
                <li>
                volumeUsd24Hr - 24 hour trading volume

                </li>
                <li>
                priceUsd - current price in USD

                </li>
                <li>
                changePercent24Hr - 24 hour price change

                </li>
                <li>
                vwap24Hr - 24 hour volume weighted average price

                </li>
          
            </ul>
            
            <p>
            Other endpoints provide supplementary data like exchange details, currency conversion rates, and historical OHLCV candle data.


            </p>

            <h5>API Documentation and SDKs</h5>
   
            <ul>
                <li>
                Detailed documentation is provided on all endpoints, parameters, response formats, schemas, errors codes, limits etc.
                </li>
                <li>
                Code snippets are provided in shell, JavaScript, Python, Ruby, PHP and more for quickly getting started.
                </li>
                <li>
                Client libraries like coincap-js (JavaScript) and coincap_python (Python) are also available to easily integrate with projects.
                </li>
            
            </ul>          
            
            <h5>API Access</h5>
   
            <ul>
                <li>
                The API does not require an API key and can be accessed directly.
                </li>
                <li>
                Optional API keys can be obtained for higher rate limits.
                </li>
                <li>
                The free tier allows 200 requests/minute. API keys provide higher limits like 500 requests/minute.
                </li>
                <li>
                Rate limiting will return 429 Too Many Requests errors if exceeded.
                </li>
            
            </ul>                 
            
            
            <h5>Code Implementation</h5>                    
            <ul>
                <li>
                The API client makes GET requests to endpoints like /assets to retrieve data.

                </li>
                <li>
                The JSON response is parsed to extract the cryptocurrency data objects.

                </li>
                <li>
                The data can be processed and filtered as needed for analysis.

                </li>
            </ul>
            
            
            
            <button onClick={()=>setIsJobsSource(true)} className='mt-5 p-1/2 text-md'>Jobs Data Source</button>

        </section>
    );
}

export default CryptosDataSource;