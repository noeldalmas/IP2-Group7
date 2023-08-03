import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import JobsDataSource from '../components/JobsDataSource';
import CryptosDataSource from '../components/CryptosDataSource';

function Sources(props) {
    const [sourceParent] = useAutoAnimate();
    const [isJobsSource, setIsJobsSource] = useState(true);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }, [isJobsSource])

    return (
        <>
            <Header/>
            <main className='flex justify-center'>
                
                {
                    isJobsSource ? (
                        <JobsDataSource setIsJobsSource={setIsJobsSource}/>
                    ) : (
                        <CryptosDataSource setIsJobsSource={setIsJobsSource}/>
                    )
                }

            </main>

            <Footer/>
        </>
    );
}

export default Sources;