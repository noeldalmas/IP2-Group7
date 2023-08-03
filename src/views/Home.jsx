import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import hero from "../assets/unleashing.svg"
import powerful from "../assets/powerful.avif"
import helping from "../assets/helping.avif"

import { useAutoAnimate } from '@formkit/auto-animate/react';

function Home(props) {
    useEffect(()=>{
        document.title = 'Home | Analytics Hub'
            
        }, [])

    const faqData = [
        {
            question: 'What is the source of the data?',
            answer: `
            The web application sources real-time data from two API endpoints - a jobs API and a financial instruments API. By making live API calls, the latest data is displayed in the visualizations instead of static, pre-downloaded datasets. The jobs API provides global employment data spanning multiple industries and geographies. The financial instruments API covers market data on cryptocurrencies.

            `
        },
        {
            question: 'Is there a free and paid version?',
            answer: `
            No, the web application is completely free to use. There is no locked or premium content. All data visualizations, and insights provided are available without any registration or fees or sign up. The goal is to make valuable market perspectives easily accessible.

            `
        },
        {
            question: 'What types of industries do you cover?',
            answer: `
            Since the jobs data covers openings across fields like technology, finance, sales, human resources and more, the platform provides a sector-agnostic overview of the global employment landscape. The financial instruments data includes cryptocurrencies markets.

            `
        },
        {
            question: 'Which geographies are covered?',
            answer: `
            The underlying jobs and financials data have global coverage, allowing generating aggregated worldwide insights as well as country and region-specific trends. Key labor markets like the United States, Canada, UK, and EUare covered. The platform enables both localized and worldwide perspectives.

            `
        },
    ]

    const [faqParent] = useAutoAnimate();
    const [currrenfFaq, setCurrentFaq] = useState(null);

    function handleClickFAQItem(index) {
        if (currrenfFaq === index) {
            setCurrentFaq(null)
        } else {
            setCurrentFaq(index)
        }
    }

    const audienceData = [
        {
            title: 'Students',
            description: `
                Job Analytics Hub serves as an excellent resource for students evaluating career options. 
                They can use the platform to gather valuable insights about job growth and skill requirements across various industries.
            `,
            icon:'fas fa-user-graduate'
        },
        {
            title: 'Job Seekers',
            description: `
                Experienced professionals looking to switch roles or upgrade skills can leverage Job Analytics Hub to identify
                 in-demand skills, top companies, and locations hiring for their domain. The data empowers informed decision making.
            `,
            icon:'fas fa-user-tie'

        },
        {
            title: 'Employers',
            description: `
                HR and recruitment teams can use Job Analytics Hub to research candidate expectations, benchmarks, and map talent availability across geographies. These insights help attract and hire suitable candidates faster.
            `,
            icon:'fas fa-briefcase'
        }
    ]


    return (
        <>
            <Header/>
            <main>
                <section className="hero h-screen relative flex items-center justify-between">
                    <div className='w-1/2 flex flex-col gap-1 hero__left'>
                        <h1 className=''>Unleashing Global Opportunities</h1>
                        <p className='text-xl'>
                            Job Analytics Hub is a valuable platform catering to a diverse range of individuals seeking information and insights about jobs worldwide.
                        </p>
                        <div className='flex mt-5 flex gap-2'>
                            <a href="/visualisations" className=''>
                                <button>Get Started</button>
                            </a>
                            <a href="/contact" className=''>
                                <button className='secondary__btn'>Contact Us</button>
                            </a>
                        </div>
                    </div>
                    <div className='w-2/5'>
                        <img src={hero} alt="" />
                    </div>
                </section>

                <section>
                    <div className="container flex flex-col items-center gap-1">
                        <span className='small__title'>Target Audience</span>
                        <h3 className="section__title text-center">
                            Empowering Diverse User Groups
                        </h3>

                        <div className='flex justify-center gap-3 mt-5 cards__container'>
                            {
                                audienceData.map((item, index) => (
                                    <div key={index} className="card">
                                        <i className={`${item.icon} text-5xl color-lb`}></i>
                                        <h4 className='mt-1 mb-2 text-xl color-lb font-500'>{item.title}</h4>
                                        <p className='text-lg'>
                                            {item.description}
                                        </p>
                                    </div>
                                ))

                            }                              
                        </div>
                    </div>
                </section>

                <section className='section3'>
                    <div className="container flex justify-between items-center">
                        <div className='w-1/2'>
                            <h3 className='section__title mb-2'>Powerful Visualizations</h3>
                            <p className='text-xl'>
                                Job Analytics Hub transforms complex employment data into intuitive charts, graphs, maps and other visualizations that tell a story.
                                Quickly analyze global job growth trends over time, compare across countries, see top hiring companies in your city, identify lucrative skills, and more using our visually engaging dashboards.
                            </p>
                        </div>
                        <div className='w-1/3 section3__right relative img__filter--anim'>
                            <img src={powerful} alt="" className='rounded-md'/>
                        </div>
                    </div>
                </section>

                <section className='section4 py-5'>
                    <div className="container flex justify-between items-center">
                        <div className='w-1/3 relative '>
                            <img src={helping} alt="" className='rounded-md img__filter--anim'/>
                        </div>
                        <div className='flex flex-col gap-1 w-3/5 items-start'>
                            <h3 className='section__title'>How Job Analytics Hub can help you?</h3>
                            <p className='text-xl mb-1'>
                                Job Analytics Hub is a valuable platform catering to a diverse range of individuals seeking information and insights about jobs worldwide. Let's explore the examples you mentioned in more detail:
                            </p>
                            <ul className='flex flex-col gap-2 items-start mb-2'>
                                <li className='flex items-center gap-1'>
                                    <i className='fas fa-check text-white'></i>
                                    <span>Identify lucrative and fast-growing career fields based on historical job growth data.</span>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <i className='fas fa-check text-white'></i>
                                    <span>Determine skill adjacencies between occupations to pivot careers in a structured way.</span>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <i className='fas fa-check text-white'></i>
                                    <span>Analyze hiring volume trends for strategic skills to optimize investment in professional development.</span>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <i className='fas fa-check text-white'></i>
                                    <span>Enable data-driven decisions on education paths based on career prospects, earning potential and growth outlook.</span>
                                </li>
                            </ul>

                            <a href="/visualisations"><button>Try Now</button></a>

                        </div>

                    </div>
                </section>

                <section className="faq flex py-5">
                    <div className='mx-auto w-1/2 flex flex-col items-center gap-1'>
                        <h1 className='section__title'>
                            Frequently Asked Questions
                        </h1>
                        <p className='text-center text-xl'>
                            Job Analytics Hub is a valuable platform catering to a diverse range of individuals seeking information and insights about jobs worldwide. Let's explore the examples you mentioned in more detail:
                        </p>
                        <div className='mt-3 w-full'>
                            {faqData.map((item, index) => (

                                <div ref={faqParent} key={index} className={` ${currrenfFaq===index ? "current__faq" : ""} faq__repeated rounded-md p-1 flex flex-col`}>

                                    <div onClick={()=>handleClickFAQItem(index)} className='flex cursor-pointer pb-1 justify-between items-center faq__repeated--top'>
                                        <div className='flex gap-1 items-center'>
                                            <div className="dot"></div>
                                            <h4 className='text-xl font-400'>{item.question}</h4>
                                        </div>
                                        <div className='plus__container'>
                                            <i className={`fas fa-${currrenfFaq===index ? "minus" : "plus"}`}></i>
                                        </div>
                                    </div>
                                    {currrenfFaq===index &&
                                    <div className='py-1 faq__answer text-lg'>
                                        {item.answer}
                                    </div>
                                    }
                                </div>
                            ))}

                        </div>
                    </div>
                </section>


 
            </main>

            <Footer/>

        </>
    );
}

export default Home;