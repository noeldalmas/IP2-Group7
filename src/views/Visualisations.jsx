import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {barChartData} from "./testData"
import { ResponsiveBar } from '@nivo/bar'
import WordCloud from 'react-d3-cloud';
import { ResponsiveLine } from '@nivo/line'
import Loader from '../components/Loader';
import { ResponsivePie } from '@nivo/pie'
import { useAutoAnimate } from '@formkit/auto-animate/react'


function Visualisations(props) {

    useEffect(()=>{
        document.title = "Visualisations | Analytics Hub";
    }, [])

    const [loading, setLoading] = useState(false);

    const testData = {
        "id": 1730093,
        "url": "https://remotive.com/remote-jobs/finance-legal/director-of-legal-affairs-1730093",
        "title": "Director of Legal Affairs",
        "company_name": "Her Campus Media",
        "company_logo": "https://remotive.com/job/1730093/logo",
        "category": "Finance / Legal",
        "tags": [
            "video",
            "documentation",
            "digital media",
            "healthcare",
            "partnerships",
            "insurance"
        ],
        "job_type": "full_time",
        "publication_date": "2023-07-13T01:39:54",
        "candidate_required_location": "USA",
        "salary": "",
        "description": "<br><br><div class=\"h3\">Company Description</div><p><u>Her Campus Media</u> is the #1 media portfolio for college students and Gen Z. Our brands -- <u>Her Campus</u>, <u>Spoon University</u>, <u>College Fashionista</u>, <u>InfluenceHer Collective</u>, and <u>Generation Hired</u> -- reach an audience of over 130 million social followers and 19 million monthly unique users, and count more than 50,000 influencers and student ambassadors at 1,800 colleges in our global network. Whether through content, resources, events, or other experiences, our mission is to support, celebrate, inspire, amplify, and equip Gen Z to realize their dreams as individuals and for society. We also power full-service, integrated marketing programs for the world’s top brands, who partner with us to create authentic, meaningful connections with our audience.</p><p>Her Campus Media is made up of passionate, entrepreneurial, ambitious doers who are fired up about cultivating the next generation of leaders and changemakers. We are a small but mighty team of individuals, most of whom identify as women, committed to continuing to build a dynamic and inclusive organization where we want to work. Visit our Careers page to learn more about our culture and what makes us tick at hercampusmedia.com/careers!</p><br><br><div class=\"h3\">Job Description</div><p>Her Campus Media is looking for an experienced Director of Legal Affairs with a broad legal experience with a media background to play a critical role in the day-to-day in-house legal operations. Working across all the Her Campus Media brands, this role will report into the company’s SVP of Business Strategy and Legal Affairs and will lead on overseeing various legal items, primarily those involving drafting and reviewing client agreements and other commercial media arrangements such as those with vendors, talent, and influencers, and will support the SVP on items such as advising and leading on compliance issues, contract negotiations and disputes, and potential litigation. This role has high interaction across the company, supporting the business teams and collaborating with department heads to draft legal documents and review contracts to ensure they meet all regulatory guidelines and protect the business’s interests. It is critical that this person be able to apply a strategic, business-minded lens and understanding to their work. </p><p>The Director of Legal Affairs will play a key role in supporting the Company’s growth by working on a wide array of documents, operational initiatives and other contractual activities, all in a fast-paced, flexible work environment, and, in each case, while ensuring corporate guidelines and legal and ethical standards are consistently met.</p><p>This role is a full-time employment position, based remotely.</p><br><br><div class=\"h3\">Qualifications</div><p><strong>Responsibilities and Duties:</strong></p><ul style=\"\"><li style=\"\">Internal co-lead on IP, business, legal negotiations and analysis related to current brands, marketing agreements, licensing deals, partnerships, potential litigation, and other business agreements and opportunities</li><li style=\"\">Lead in the preparation of contracts and manage workflow for contracts</li><li style=\"\">Draft and review client agreements, considering and balancing business terms and implications in the process </li><li style=\"\">Draft and review other commercial agreements with third-party vendors such as video/photo production companies, event speakers, and influencers</li><li style=\"\">Draft and review terms and conditions for contests and sweepstakes</li><li style=\"\">Review, understand, evaluate and provide guidance on contracts and a variety of other documents based on corporate guidelines and input from various stakeholders of the Company, and identify, analyze, and provide guidance on main ideas, potential business and legal risks involved, and areas where additional information, coordination, guidance, review or approval is needed from others</li><li style=\"\">Audit and review cross-department legal documentation and processes, implementing optimizations and training teams on best practices</li><li style=\"\">Offer the company legal advice in a variety of areas across the business to ensure compliance</li><li style=\"\">Support in drafting company policies to ensure up-to-date best practices and compliance</li></ul><p><strong>Qualifications</strong></p><p>We believe the following will set you up for success in this role. If you don't have all of these qualifications, please still consider applying and tell us more about what makes you a great candidate for this role! We value unique perspectives, approaches and backgrounds. </p><ul style=\"\"><li style=\"\">5+ years of legal experience and contract administration (JD or LLM degree from an accredited law school)</li><li style=\"\">Digital media and/or marketing legal experience required </li><li style=\"\">Experience in a law firm or in-house legal department preferred</li><li style=\"\">Proficiency in drafting and reviewing various legal partnership and commercial agreements   </li><li style=\"\">Knowledge of basic copyright and trademark matters as they pertain to media</li><li style=\"\">Strong organizational &amp; analytical skills</li><li style=\"\">Excellent written and oral communication skills; comfort and ability to handle calls with opposing legal teams to work through a negotiation</li><li style=\"\">Ability to problem-solve, multi-task, prioritize, take initiative and adapt to a fast-paced and changing business environment</li><li style=\"\">High level of integrity and professionalism</li><li style=\"\">Ability to establish strong relationships with peers, colleagues, customers and counterparties to achieve optimal results</li><li style=\"\">Impeccable attention to detail</li></ul><br><br><div class=\"h3\">Additional Information</div><p><strong>Benefits &amp; Perks</strong></p><ul style=\"\"><li style=\"\">Eligibility for performance bonuses</li><li style=\"\">Choice among six health insurance plans</li><li style=\"\">Dental and vision insurance</li><li style=\"\">401k retirement savings plan with company matching</li><li style=\"\">Unlimited PTO and flexibility to work remotely</li><li style=\"\">Extremely generous company holiday policy, with eighteen (18) paid federal and office holidays including two (2) floating holidays each year</li><li style=\"\">Highly parent-friendly culture, including 12 full weeks of parental leave plus additional 4 weeks of part-time parental leave, all fully paid</li><li style=\"\">Summer Fridays</li><li style=\"\">FSA and HSA offered</li><li style=\"\">Life insurance</li><li style=\"\">Optional short-term and long-term disability insurance</li><li style=\"\">Free One Medical membership offering same-day primary care over video or in person</li><li style=\"\">Free Health Advocate services to help navigate the healthcare system</li><li style=\"\">Dog-friendly office (if in Boston)</li></ul><p><strong>Salary Range:</strong> $140,000-$160,000/year + bonus eligible</p><ul style=\"\"><li style=\"\">Final salary offered to the candidate selected for the position will be based on factors including but not limited to the candidate’s skills, experience, and other factors.</li></ul><p><strong>Interview Process &amp; Expectations</strong></p><p>To apply, click the “I’m interested” button to upload your resume and submit a cover letter.</p><p>Our timeline is to make a hire by August 15, 2023. You can expect three rounds of interviews, including an initial phone screen and subsequent interviews with the SVP of Business Strategy and Legal Affairs and other members of the Her Campus Media Operations team. </p><p>Please refer to our <u>Interview Prep Guide</u> (hercampusmedia.com/careers/interview-prep) for a general overview of our hiring and interview process and what we look for in applications.</p><p>All your information will be kept confidential according to EEO guidelines.</p><img src=\"https://remotive.com/job/track/1730093/blank.gif?source=public_api\" alt=\"\"/>"
    }

    const [jobsByCategory, setJobsByCategory] = useState([]);
    const [cloudData, setCloudData] = useState([]);
    const [jobsOverTime, setJobsOverTime] = useState([]);
    const [jobsPerCompany, setJobsPerCompany] = useState([]);
    const [jobsPerJobType, setJobsPerJobType] = useState([])
    const [topJobLocations, setTopJobLocations] = useState([])

    function countTags(jobData){
       const regex = /[\/&\-\(\)\d]/;
        const tags = jobData.map((job)=>job.title.split(" ")).flat(2).filter((tag)=>!regex.test(tag))
        const countObj = tags.reduce((obj, element) => {
            if (obj[element]) {
              obj[element]++;
            } else {
              obj[element] = 1;
            }
            return obj;
          }, {});

        return Object.entries(countObj).map(([item, count]) => ({ text: item, value: count }));  
    }


    function calculateJobsByCategory(jobData) {
        const jobsByCategory = {};
      
        for (const job of jobData) {
          const category = job.category;
          if (jobsByCategory.hasOwnProperty(category)) {
            jobsByCategory[category]++;
          } else {
            jobsByCategory[category] = 1;
          }
        }

        const result = Object.entries(jobsByCategory).map(([category, count]) => {
            return {
              id: category,
              category: count
            };
          });
      
        return result;
      }
    
    function calculateJobGrowth(jobData) {
        const growthData = [];
        const jobCountByDate = {};

        for (const job of jobData) {
            const date = job.publication_date.slice(0, 10); // Extract the date (YYYY-MM-DD)

            if (jobCountByDate[date]) {
            jobCountByDate[date]++;
            } else {
            jobCountByDate[date] = 1;
            }
        }

        for (const date in jobCountByDate) {
            const growth = {
            x: date,
            y: jobCountByDate[date],
            };

            growthData.push(growth);
        }

        
        return [{id:"Job growth", data:growthData}];
    }
   
    function calculateJobsByCompany(jobData) {
        const jobsByCompany = {};
      
        for (const job of jobData) {
          const company = job.company_name;
      
          if (jobsByCompany[company]) {
            jobsByCompany[company]++;
          } else {
            jobsByCompany[company] = 1;
          }
        }

        const companiesCount = {};
        const sortedJobsByCompany = Object.entries(jobsByCompany).sort((a, b) => b[1] - a[1]);

        for (const [company, totalJobs] of sortedJobsByCompany) {
            if (companiesCount[totalJobs]) {
            companiesCount[totalJobs]++;
            } else {
            companiesCount[totalJobs] = 1;
            }
        }

        return Object.entries(companiesCount).map(([totalJobs, totalCompanies]) => ({
            id: `${Number(totalJobs)} job${Number(totalJobs)>1 ? "s" : ""}`,
            value: totalCompanies,
          }));;
      
      }

    function calculateJobsPerJobType(jobData){
        const jobsByJobType = {};

        for (const job of jobData) {
          const jobType = job.job_type;
      
          if (jobsByJobType[jobType]) {
            jobsByJobType[jobType]++;
          } else {
            jobsByJobType[jobType] = 1;
          }
        }
      
        const result = Object.entries(jobsByJobType).map(([jobType, total]) => [jobType, total]);

        return result;

    }

    function calculateJobsByLocation(jobData) {
        const locationDistribution = jobData.reduce((distribution, job) => {
            const locations = job.candidate_required_location.split(',').map((location) => location.trim());
            locations.forEach((location) => {
              if (!distribution[location]) {
                distribution[location] = 0;
              }
              distribution[location]++;
            });
            return distribution;
          }, {});

          const topLocations = Object.entries(locationDistribution).sort((a, b)=>b[1]-a[1]).filter((item, i)=>i<=5).map((item)=>({id:item[0], category:item[1]}))

          return topLocations;
      }
    
    
    const [topCryptos, setTopCryptos] = useState([]);
    const [bitcoinOverTime, setBitcoinOverTime] = useState([]);


    function getBestCryptos(cryptos) {
        const sortedCryptos = cryptos.sort((a, b) => {
          const marketCapDiff = parseFloat(b.marketCapUsd) - parseFloat(a.marketCapUsd);
          if (marketCapDiff !== 0) {
            return marketCapDiff;
          }
          return parseFloat(b.volumeUsd24Hr) - parseFloat(a.volumeUsd24Hr);
        });
      
        const best10Cryptos = sortedCryptos.slice(0, 10).map((crypto) => ({
          id: crypto.name,
          category: (parseFloat(crypto.marketCapUsd)/1000000000).toFixed(1),
        })).toReversed();
      
        return best10Cryptos;
      }
    
    function calculatePricesOverTime(apiResponse, cryptoId="Bitcoin") {
        const sortedData = apiResponse.sort((a, b) => a.time - b.time);
        
        const formattedData = sortedData.map((data) => ({
            x: new Date(data.date).toISOString().split("T")[0], 
            y: parseFloat(data.priceUsd),
        }));
        
        return [
            {
            data: formattedData,
            id: cryptoId,
            },
        ];
    }


    const handleFetchJobs = async()=>{
        setLoading(true)
        const res = await fetch("https://remotive.com/api/remote-jobs");

        if(res.ok){
            const data = await res.json();
            if(data){
                const testData = data.jobs;          
                

                setTopJobLocations(calculateJobsByLocation(testData))
                setJobsPerJobType(calculateJobsPerJobType(testData))
                setJobsPerCompany(calculateJobsByCompany(testData))
                setJobsOverTime(calculateJobGrowth(testData))

                setCloudData(countTags(testData))
                setJobsByCategory(calculateJobsByCategory(testData))
                setLoading(false)
            }

            else setLoading(false)
        }

        else setLoading(false)
    }




    const handleFetchCryptoData = async ()=>{
        const baseUrl = "https://api.coincap.io";
        setLoading(true)
        const assets = await fetch(`${baseUrl}/v2/assets`)
        const bitcoin = await fetch(`${baseUrl}/v2/assets/bitcoin/history?interval=d1`);

        const [response, response2] = await Promise.all([assets, bitcoin]);

        if(response){
            if(response.ok){
                const data = await response.json();
                if(data){
                    const temp = data.data;
    
                    console.log(getBestCryptos(temp))
                    setTopCryptos(getBestCryptos(temp))
                    
                }
            }
            
            console.log(response)

            if(response2.ok){
                const data = await response2.json();
                if(data){
                    const temp = data.data;
                    
                    setBitcoinOverTime(calculatePricesOverTime(temp))
                    console.log(calculatePricesOverTime(temp))
                }

            }

            setLoading(false)
        }


    }

    useEffect(()=>{
        handleFetchJobs();
        handleFetchCryptoData();
    }, [])

    const [vizParent] = useAutoAnimate();


    const CustomLineTooltip = ({e})=>{
        return(
        <div className='line__tooltip rounded-md'>
            <div className='flex mb-1'>
                <span className='line__tooltip--label'>Date</span>
                <span className='font-500'>{e.point.data.xFormatted}</span>
            </div>
            <div className='flex'>
                <span className='line__tooltip--label'>Total jobs</span>
                <span className='font-700 color-main'>{e.point.data.yFormatted}</span>
            </div>
        </div>
        )
    }

    const [currentVizTab, setCurrentVizTab] = useState(0);
    const tabs = ["Visualisation 1", "Visualisation 2", "Visualisation 3" ]

    const heroList = [
        {
            title: "Identify",
            icon:'fas fa-search',
        },
        {
            title: "Discover",
            icon:'far fa-compass',
        },
        {
            title: "Visualize",
            icon:'fas fa-chart-bar',
        },
        {
            title: "Analyse",
            icon:'fas fa-chart-line',
        },
    ]
    return (
        <>
            <Header/>
            <main>
                <section className="viz-intro flex">
                    <div className="container flex flex-col justify-center">
                        <h1 className='text-5xl font-500 mb-1'>We provide insights.</h1>
                        <p className='mb-3 text-lg w-3/4 opacity-7'>
                        At Job Analytics Hub, we transform complex employment data into intuitive visualizations that reveal valuable insights.

                        </p>

                        <div className='flex mt-5 gap-5 justify-between insights__desc'>

                            {heroList.map((item, i)=>{
                                return <div className='flex flex-col full-center'>
                                    <i className={`${item.icon} text-3xl mb-1`}></i>
                                    <span className='text-center'>{item.title}</span>
                                </div>
                                })

                            }

                        </div>
                    
                    </div>

                </section>

                <section className='viz-message text-center flex justify-center'>
                    <p className='w-3/4 text-xl'>
                    Let’s see the engine in action. Scroll down the and select the visualizations according to your goals and needs	. Hover over each to get more insights.

                    </p>
                </section>


                <section ref={vizParent} className='p-5'>

                    <div className='flex justify-center gap-5 mb-5 filters__btns'>
                        
                        {tabs.map((tab, i)=><button onClick={()=>setCurrentVizTab(i)} className={`${currentVizTab !== i && "not__selected--btn"} transition-300`}>{tab}</button>)}


                    </div>


                    {
                    currentVizTab === 0 &&
                    <>
                        <div className='viz-row flex justify-between gap-5'>
                            <div className='w-1/3 flex flex-col justify-center'>
                                <div className='text-xl mb-1'>Jobs By Category</div>
                                <div>
                                Visualize proportional distribution of open jobs across categories like Software Development, Design, Finance etc. Identify areas of abundance.
Software development is the most sought after talent with design, sales and customer service following, showing employers also require talent in these creative, revenue-driving, and service-oriented functions in addition to technical teams.


                                </div>
                            </div>

                            
                            <div className='w-2/3 viz-chart'>

                                {
                                    loading ? <div className='flex full-center h-full color-main'><Loader/></div> : 
                                    <ResponsiveBar
                                        data={jobsByCategory}
                                        keys={[
                                            'category',                                    
                                        ]}
                                        indexBy="id"
                                        margin={{ top: 50, right: 130, bottom: 160, left: 60 }}
                                        padding={0.3}
                                        valueScale={{ type: 'linear' }}
                                        indexScale={{ type: 'band', round: true }}
                                        colors={{ scheme: 'category10' }}
                                
                                        axisTop={null}
                                        axisRight={null}
                                        axisBottom={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 90,
                                            legend: 'Category',
                                            legendPosition: 'middle',
                                            legendOffset: 135
                                        }}
                                        axisLeft={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: 'Total Jobs',
                                            legendPosition: 'middle',
                                            legendOffset: -40
                                        }}
                                        labelSkipWidth={12}
                                        labelSkipHeight={12}
                                        labelTextColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    1.6
                                                ]
                                            ]
                                        }}
                                        legends={[
                                            {
                                                dataFrom: 'keys',
                                                anchor: 'bottom-right',
                                                direction: 'column',
                                                justify: false,
                                                translateX: 120,
                                                translateY: 0,
                                                itemsSpacing: 2,
                                                itemWidth: 100,
                                                itemHeight: 20,
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 0.85,
                                                symbolSize: 20,
                                                effects: [
                                                    {
                                                        on: 'hover',
                                                        style: {
                                                            itemOpacity: 1
                                                        }
                                                    }
                                                ]
                                            }
                                        ]}
                                        role="application"
                                        ariaLabel="Nivo bar chart demo"
                                        // barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                                    />


                                }

                            </div>

                        </div>
                    

                        <div className='viz-row-reverse flex justify-between gap-5 mt-5'>
                            <div className='w-2/3 viz-chart word-cloud'>

                                {
                                    loading ? <div className='flex full-center h-full color-main'><Loader/></div> : 
                                    <WordCloud 
                                        data={cloudData} 
                                        spiral="rectangular"
                                        rotate={(word) => 0}
                                        padding={10}     
                                        // fill={"#23ace215"}                
                                    />

                                }

                            </div>
                            <div className='w-1/3 flex flex-col justify-center'>
                                <div className='text-xl mb-1'>Job Tags Word Cloud</div>
                                <div>
                                The word cloud illustrates the most frequent words found in job titles listed. Reveals the most in-demand roles and skills employers are seeking.
The prevalence of words like "Engineer", "Senior", and "Manager" in top job titles reinforces that companies seek experienced professionals who can take on leadership responsibilities and work autonomously.
The wide variety of technical terms illustrates jobs span diverse domains from development to design, data, testing, operations etc.


                                </div>
                            </div>

                        </div>  

                        <div className='mt-5 viz-row flex flex-col items-center'>

                            <div className='w-3/4 mx-auto flex flex-col items-center text-center justify-center'>
                                <div className='text-xl mb-1'>Total Job Distribution Per Company</div>
                                <div>

                                View the distribution of open positions across top hiring companies. Use this to target employers actively recruiting at scale in your domain.
The long tail distribution with most companies only having 1-2 openings indicates hiring is dispersed across many smaller firms rather than concentrated in a few large entities.
This shows the democratizing effect of remote work in allowing smaller companies to leverage global talent.
Professionals may need to look beyond just well-known brands to find abundant opportunities. Targeting lesser-known but rapidly growing startups can be worthwhile.

                                </div>
                            </div>

                            <div className='w-2/3 viz-chart '>
                                {
                                    loading ? <div className='flex full-center h-full color-main'><Loader/></div> :

                                    <ResponsivePie
                                        data={jobsPerCompany}
                                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                                        innerRadius={0.5}
                                        padAngle={0.7}
                                        cornerRadius={3}
                                        activeOuterRadiusOffset={8}
                                        borderWidth={1}
                                        borderColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    0.2
                                                ]
                                            ]
                                        }}
                                        arcLinkLabelsSkipAngle={10}
                                        arcLinkLabelsTextColor="#333333"
                                        arcLinkLabelsThickness={2}
                                        arcLinkLabelsColor={{ from: 'color' }}
                                        arcLabelsSkipAngle={10}
                                        arcLabelsTextColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    2
                                                ]
                                            ]
                                        }}
                                        
                                        legends={[
                                            {
                                                anchor: 'bottom',
                                                direction: 'row',
                                                justify: false,
                                                translateX: 0,
                                                translateY: 56,
                                                itemsSpacing: 0,
                                                itemWidth: 100,
                                                itemHeight: 18,
                                                itemTextColor: '#999',
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 1,
                                                symbolSize: 18,
                                                symbolShape: 'circle',
                                                effects: [
                                                    {
                                                        on: 'hover',
                                                        style: {
                                                            itemTextColor: '#000'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]}
                                    />
                                }

                            </div>
                        </div>   


                    </>
                    }


                    {
                    currentVizTab === 1 &&
                    <>
                        <div className='viz-row flex flex-col items-center gap-5 mt-5'>
                            <div className='w-1/3 flex flex-col justify-center'>
                                <div className='text-xl mb-1'>Job Growth Over Time</div>
                                <div>

                                Analyze the growth trajectory of jobs historically. See how the workforce landscape is evolving globally based on chart. The chart shows the number of jobs added per month.
There is some volatility in the cumulative number of jobs available on the listing platform, with the general trend indicating upward trajectory.

                                </div>
                            </div>
                            <div className='viz-chart jobs__over--time'>

                                {
                                    loading ? <div className='flex full-center h-full color-main'><Loader/></div> : 
                                    <ResponsiveLine
                                        animate
                                        axisBottom={null}
                                        axisLeft={null}
                                        enableGridY={false}
                                        enableGridX={false}
                                        curve="monotoneX"
                                        data={jobsOverTime}
                                        height={400}
                                        margin={{
                                            bottom: 60,
                                            left: 80,
                                            right: 20,
                                            top: 20
                                        }}
                                    
                                        pointBorderWidth={1}
                                        pointSize={16}
                                        pointSymbol={function noRefCheck(){}}
                                        useMesh
                                        width={1000}
                                        xFormat="time:%Y-%m-%d"
                                        xScale={{
                                            format: '%Y-%m-%d',
                                            precision: 'day',
                                            type: 'time',
                                            useUTC: false
                                        }}
                                        yScale={{
                                            type: 'linear'
                                        }}

                                        tooltip={(e)=><CustomLineTooltip e={e}/>}

                                        />



                                }

                            </div>

                        </div>

                        <div className='flex viz-row mt-5 justify-between gap-5'>
                            <div className='w-1/3 flex flex-col justify-center'>
                                <div className='text-xl mb-1'>Top Job Locations</div>
                                <div>

                                Represents the countries and regions with the most job postings. Consider geographic regions where talents are in high demand.
The US dominating job locations is unsurprising given most platforms are US-based initially. However, noticeable presence across Europe, and Canada etc indicates talent demand is going global.
Some geographic gaps like Africa, Asia and South America reveal potential untapped talent markets employers can explore to diversify teams.

                                </div>
                            </div>

                            
                            <div className='w-2/3 viz-chart'>

                                {
                                    loading ? <div className='flex full-center h-full color-main'><Loader/></div> : 
                                    <ResponsiveBar
                                        data={topJobLocations}
                                        keys={[
                                            'category',                                    
                                        ]}
                                        layout="horizontal"
                                        indexBy="id"
                                        margin={{ top: 50, right: 130, bottom: 160, left: 160 }}
                                        padding={0.3}
                                        valueScale={{ type: 'linear' }}
                                        indexScale={{ type: 'band', round: true }}
                                        colors={['#23ABE2', '#222222']}  

                                        axisTop={null}
                                        axisRight={null}
                                        axisBottom={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: 'Category',
                                            legendPosition: 'middle',
                                            legendOffset: 50
                                        }}
                                        axisLeft={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: 'Total Jobs',
                                            legendPosition: 'middle',
                                            legendOffset: -130
                                        }}
                                        labelSkipWidth={12}
                                        labelSkipHeight={12}
                                        labelTextColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    1.6
                                                ]
                                            ]
                                        }}
                                        legends={[
                                            {
                                                dataFrom: 'keys',
                                                anchor: 'bottom-right',
                                                direction: 'column',
                                                justify: false,
                                                translateX: 120,
                                                translateY: 0,
                                                itemsSpacing: 2,
                                                itemWidth: 100,
                                                itemHeight: 20,
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 0.85,
                                                symbolSize: 20,
                                                effects: [
                                                    {
                                                        on: 'hover',
                                                        style: {
                                                            itemOpacity: 1
                                                        }
                                                    }
                                                ]
                                            }
                                        ]}
                                        role="application"
                                        ariaLabel="Nivo bar chart demo"
                                        // barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                                    />


                                }

                            </div>

                        </div>

                        <div className='viz-row flex mt-4 viz-row flex-col gap-4'>

                            <div className='w-3/4 mx-auto flex flex-col justify-center'>
                                <div className='text-xl mb-1'>Jobs By Employment Type</div>
                                <div>

                                The distribution of open jobs across different employment types like full-time, contract, part-time etc.
Full-time positions dominating shows companies still prefer traditional employment for critical roles. But sizeable contract jobs reveal businesses are warming up to flexible arrangements to access specialized skills.
Minimal internships point to under-leveraging of job openings to provide high impact internship opportunities for students.

                                </div>
                            </div>

                            <div className='flex flex-wrap w-3/4 mx-auto gap-2 justify-between'>
                                {
                                    loading ? <div className='flex full-center h-full color-main'><Loader/></div> :
                                    <>
                                        {jobsPerJobType.map((job, key)=>{
                                            
                                            return (
                                                <div className="flex stat__box p-3 gap-2 items-center">
                                                    <span className="text-5xl color-main opacity-2 font-900">0{key+1}</span>
                                                    <div className="flex flex-col">
                                                        <span className='text-xl font-300 capitalize'>{job[0].split("_").join(" ") || "Not Specified"}</span>
                                                        <span className='text-3xl'>{job[1]}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </>
                                }

                            </div>


                            

                        </div>
                    </>
                    }


                    {
                    currentVizTab === 2 &&
                    <>                        
                       <div className='viz-row flex justify-between gap-5'>
                            <div className='w-1/3 flex flex-col justify-center'>
                                <div className='text-xl mb-1'>Top Cryptos By Market Cap And 24hr Trading Volume</div>
                                <div>
                                    This bar chart illustrates the top 10 cryptocurrencies ranked by current market capitalization.
                                    Bitcoin leads as expected, followed by Ethereum, Tether, and other altcoins like Cardano and Solana.
                                    Analyzing market cap distribution helps gauge the relative size and dominance of cryptocurrencies in the overall ecosystem.
                                    Consider focusing on widely adopted cryptos with high market caps for long term holdings, while smaller altcoins present opportunities for short term gains.
                                </div>
                            </div>

                            
                            <div className='w-2/3 viz-chart'>

                                {
                                    loading ? <div className='flex full-center h-full color-main'><Loader/></div> : 
                                    <ResponsiveBar
                                        data={topCryptos}
                                        keys={[
                                            'category',                                    
                                        ]}
                                        indexBy="id"
                                        margin={{ top: 50, right: 130, bottom: 160, left: 60 }}
                                        padding={0.3}
                                        valueScale={{ type: 'linear' }}
                                        indexScale={{ type: 'band', round: true }}
                                        colors={{ scheme: 'category10' }}
                                
                                        axisTop={null}
                                        axisRight={null}
                                        axisBottom={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 90,
                                            legend: 'Cryptocurrency',
                                            legendPosition: 'middle',
                                            legendOffset: 135
                                        }}
                                        axisLeft={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: 'Market Cap(Billion USD)',
                                            legendPosition: 'middle',
                                            legendOffset: -40
                                        }}
                                        labelSkipWidth={12}
                                        labelSkipHeight={12}
                                        labelTextColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    1.6
                                                ]
                                            ]
                                        }}
                                        legends={[
                                            {
                                                dataFrom: 'keys',
                                                anchor: 'bottom-right',
                                                direction: 'column',
                                                justify: false,
                                                translateX: 120,
                                                translateY: 0,
                                                itemsSpacing: 2,
                                                itemWidth: 100,
                                                itemHeight: 20,
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 0.85,
                                                symbolSize: 20,
                                                effects: [
                                                    {
                                                        on: 'hover',
                                                        style: {
                                                            itemOpacity: 1
                                                        }
                                                    }
                                                ]
                                            }
                                        ]}
                                        role="application"
                                        ariaLabel="Nivo bar chart demo"
                                        // barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                                    />


                                }

                            </div>


                        </div>

                        <div className='viz-row flex flex-col items-center gap-5 mt-5'>
                        <div className='w-1/3 flex flex-col justify-center'>
                            <div className='text-xl mb-1'>Bitcoin One Year Price History</div>
                            <div>
                            The line chart depicts the price trend of Bitcoin over time.
                            Notable events like market cycles and crashes can be correlated to fluctuations in Bitcoin's price historically.
                            Studying price charts can help investors identity buying opportunities during price dips or accumulation phases.
                            Historical data also puts the current price in perspective - whether Bitcoin seems undervalued or overheated relative to its past trajectory.

                            </div>
                        </div>
                        <div className='viz-chart jobs__over--time'>

                            {
                                loading ? <div className='flex full-center h-full color-main'><Loader/></div> : 
                                <ResponsiveLine
                                    animate
                                    axisBottom={null}
                                    axisLeft={null}
                                    enableGridY={false}
                                    enableGridX={false}
                                    curve="monotoneX"
                                    data={bitcoinOverTime}
                                    height={400}
                                    margin={{
                                        bottom: 60,
                                        left: 80,
                                        right: 20,
                                        top: 20
                                    }}
                                
                                    pointBorderWidth={1}
                                    pointSize={16}
                                    pointSymbol={function noRefCheck(){}}
                                    useMesh
                                    width={1000}
                                    xFormat="time:%Y-%m-%d"
                                    xScale={{
                                        format: '%Y-%m-%d',
                                        precision: 'day',
                                        type: 'time',
                                        useUTC: false
                                    }}
                                    yScale={{
                                        type: 'linear'
                                    }}

                                    tooltip={(e)=><CustomLineTooltip e={e}/>}

                                    />



                            }

                        </div>

                        </div>
                       
                    </>
                    }

                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Visualisations;