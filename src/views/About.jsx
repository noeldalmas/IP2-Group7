import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import member from "../assets/member.jpg"
import noel from "../assets/noel.jpg"
import tinotenda from "../assets/tino.jpg"
import bridget from "../assets/bridget.jpg"
import roselyne from "../assets/roselyne.png"
import anotida from "../assets/ano.png"
import samantha from "../assets/samantha.png"


function About(props) {

    const team = [
        {
            name: "Noel Oduory",
            role: "Project Manager | Web Developer",
            img: noel,
            linkedin: "https://www.linkedin.com/in/noel-dalmas-064686231/",
            github: "",
            bio: `
            An analytical and creative Kenyan professional pursuing degree in Computing at African Leadership University in Mauritius.
            He has experience as a Research Analyst analyzing startups, investors, and funding deals. Noel is interested in finance, venture capital, entrepreneurship, and agribusiness. His technical skills include web development, financial & data analysis, and machine learning modeling.

            `
        },
        {
            name: "Tinotenda Tsomondo",
            role: "UI/UX Designer",
            img: tinotenda,
            linkedin: "https://www.linkedin.com/in/tinotenda-tsomondo-5b4339193/",
            github: "",
            bio: `
            Tinotenda is an enthusiastic Computer Science student. She is primarily interested in the fields of business analytics, data visualization, and machine learning and seeks to apply these skills to derive impactful insights. Tinotenda has honed his programming abilities by contributing to various open source projects in his leisure time. Her technical skills are concentrated in UI/UX design.
            Outside of technology, Tinotenda is an avid soccer player who enjoys the thrill of competition and teamwork. She also likes to challenge herself mentally with chess games.

            `
        },
        {
            name: "Bridget Chirimbani",
            role: "UI/UX Designer",
            img: bridget,
            linkedin: "https://www.linkedin.com/in/bridgetchirimbani/",
            github: "https://github.com/BRIDGETCHIRIMBANI",
            bio: `
            Bridget is currently pursuing her Bachelor's degree in Computer Science. She is deeply passionate about leveraging technology to drive innovation in healthcare. Her technical interests span data analysis, and UI/UX design. Bridget actively seeks out opportunities to apply her skills to improve medical systems and make healthcare more accessible.
            In her free time, Bridget enjoys giving back to the community by mentoring youth interested in STEM fields. She finds joy in volunteering with various organizations to support underprivileged students gaining technology skills and exposure. Bridget hopes to inspire the next generation of women leaders in the tech industry.
            
            `
        },
        {
            name: "Roselyne Abdalla",
            role: "QA Tester",
            img: roselyne,
            linkedin: "https://www.linkedin.com/in/roselyne-abdalla-014a57206/",
            github: "",
            bio: `
            Roselyne is currently majoring in Computer Science. She is driven by a passion for using technology ethically to promote human rights, equity, and sustainable development globally. Roselyne is interested in various technical domains including cryptography, network security, AI ethics and climate tech.
            In addition to her studies, Roselyne is an active volunteer supporting initiatives related to youth education, women's empowerment, and climate justice. She devotes her free time to working with non-profits that provide marginalized communities access to technology resources and training. Roselyne aspires to become a tech policy leader advocating for diversity, inclusion, and ethical standards.
            
            `
        },
        {
            name: "Anotida Tauya",
            role: "Data Analyst",
            img: anotida,
            linkedin: "https://www.linkedin.com/in/anotida-liniant-tauya-8bb156205/",
            github: "",
            bio: `
            Anotida is an inquisitive Computer Science student with a strong interest in data analytics and modeling. Her academic work explores various technical domains like machine learning algorithms, data visualization using Python, and database system optimization. Outside of classes, Anotida is an active member of the Google Developer Student Club where she works on solutions to real-world problems.
            In addition to her technical aptitude, Anotida cares deeply about social impact. She seeks opportunities to apply her data science skills to pressing global issues like healthcare access, economic empowerment, and climate change. Anotida aspires to become a leading data scientist driving innovation at a technology company making meaningful change worldwide.
            
            `
        },
        {
            name: "Samantha Kelosi",
            role: "Software Documentation",
            img: samantha,
            linkedin: "https://www.linkedin.com/in/samantha-kelosi-57b694215/",
            github: "",
            bio: `
            Samantha is the founder of a tech startup dedicated to driving impact for women across the field. She is currently pursuing her Bachelor's in Computer Science with a diverse skillset spanning web development, cryptography, and computer vision. Samantha is skilled in programming languages like Java, Python and JavaScript which she leverages to build innovative solutions.
            As a startup leader, Samantha brings invaluable experience running a small business and collaborating with other entrepreneurs. She previously had the opportunity to work with an incubator which gave her exposure to developing an organizational vision and executing strategically. Samantha is committed to empowering more women to excel in technology and become leaders in the industry.
            
            `
        },


        
    ]

    useEffect(()=>{
        document.title = 'About | Analytics Hub'
            
        }, [])
    return (
        <>
            <Header/>
            <main>
                <section className="about__hero">
                    <div className="container flex flex-col">
                        <h1 className='text-5xl font-600 mt-5 color-lb'>Meet The Team</h1>
                        <p className='text-white text-lg mt-1 opacity-7'>
                        Our diverse team of data enthusiasts came together to create Job Analytics Hub and empower professionals with data-driven insights.

                        </p>
                        
                    </div>
                </section>

                <section className="team">
                    <div className="container">

                        {team.map((member, key)=>{
                            return (
                                <div key={key} className={`member flex ${key % 2 && "flex-row-reverse"} items-center gap-2`}>
                                    <div className="member__img w-1/2 flex justify-center">
                                        <img src={member.img} alt="" className='rounded-lg img__filter--anim' loading='lazy'/>
                                    </div>

                                    <div className="member__info w-1/2">
                                        <h2 className='text-2xl font-600'>{member.name}</h2>
                                        <h5 className='mb-2'>
                                            <span className='text-xl opacity-5 font-500'>{member.role}</span>
                                        </h5>
                                        <p className='text-md mb-1'>
                                            {member.bio}
                                        </p>
                                        <div className='flex gap-1'>
                                            <a href={`${member.linkedin}`} className='text-xl color-lb'>
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                            <a href={`${member.github}`} className='text-xl color-lb'>
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            )
                        })

                        }


                    </div>
                </section>

            </main>

            <Footer/>
            
        </>
    );
}

export default About;