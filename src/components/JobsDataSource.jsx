import React from 'react';

function JobsDataSource({setIsJobsSource}) {

    return (
        <section className='source__section'>

                    <h1>Jobs Data</h1>
                    
                    <h5>Data Source</h5>

                    <p>
                        The job listing data is sourced from the Remote Jobs API provided by RapidAPI. The specific endpoint used is the /jobs endpoint which returns a list of the latest remote job listings.
                        The Remote Jobs API aggregates and indexes remote job listings from various online job boards and company career sites. This provides a centralized datasource for remote work job listings covering a wide variety of positions, companies, and industries.
                        Access to the API requires signing up on RapidAPI to obtain an API key. The API uses a freemium model with a limited free tier and paid tiers for increased requests.
                        The Remote Jobs API documentation includes detailed information on endpoint URLs, parameters, headers, example requests/responses, and code snippets for accessing the API in various programming languages like JavaScript, Python, etc.

                    </p>
                    
                    <h5>Data Contents</h5>
                    <p>
                        The /jobs endpoint returns the job listing data in JSON format. Each job listing contains the following fields:
                    </p>
                    <ul>
                        <li>
                            id: Unique identifier for the job listing
                        </li>
                        <li>
                            url: URL link to apply for the job listing
                        </li>
                        <li>
                            title: Job title
                        </li>
                        <li>
                            company_name: Name of the company posting the job
                        </li>
                        <li>
                            company_logo: URL link to the company logo image
                        </li>
                        <li>
                            category: Category of the job such as programming, design, etc.
                        </li>
                        <li>
                            tags: Keywords or tags relevant to the job listing
                        </li>
                        <li>
                            job_type: Type of job such as full-time, part-time, contract, etc.
                        </li>
                        <li>
                            publication_date: Date when the job listing was first published
                        </li>
                        <li>
                            candidate_required_location: Location requirement or preference for candidates
                        </li>
                        <li>
                            salary: Salary details like estimated salary range
                        </li>
                        <li>
                            description: Full text description of the job listing including responsibilities, requirements, benefits, etc.
                        </li>
                    </ul>
                    
                    <p>
                        Additional metadata like the source job board and date indexed is provided with each listing as well. The data provides rich details on each job opening suitable for analysis and visualization.

                    </p>
                   
                    <h5>API Access</h5>
                    <p>
                        To retrieve the job listings data, a GET request is made to the /jobs endpoint.
                        Two headers are required:
                    </p>
                    <ul>
                        <li>
                            X-RapidAPI-Key: This is the API key obtained from RapidAPI
                        </li>
                        <li>
                            X-RapidAPI-Host: The host name which is 'remote-jobs-api.p.rapidapi.com'
                        </li>
                        <li>
                            Optional query parameters can be used to filter the results such as by company name, location, job type etc.
                        </li>
                        <li>
                            The API client handles encoding the parameters, headers, and parsing the response JSON.
                        </li>
                    
                    </ul>                 
                    
                    
                    <h5>Code Implementation</h5>                    
                    <ul>
                        <li>
                            The code makes a GET request to the /jobs endpoint and passes the RapidAPI key and host header values.
                        </li>
                        <li>
                            The returned JSON response is parsed to extract the job listing data.
                        </li>
                        <li>
                            Each job listing object can be accessed to retrieve the specific fields needed for analysis/visualization such as job title, salary, location, etc.
                        </li>
                        <li>
                            Features like search filters, pagination, and retrieving a specific job by id can also be implemented by passing additional parameters.
                        </li>
                    </ul>

                    <button onClick={()=>setIsJobsSource(false)} className='mt-5 p-1/2 text-md'>Crypto Data Source</button>
                    
                    
                    

                </section>
    );
}

export default JobsDataSource;