import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Contact(props) {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString(),
        })
        .then(() => setSuccess(true))
        .catch((error) => alert("Something went wrong. Please try again"))
        .finally(()=>e.target.reset());
        
    };

      useEffect(()=>{
        document.title = 'Contact Us | Analytics Hub'
            
        }, [])

    return (
        <>
            <Header/>
            <main>
                <section className="relative flex flex-col justify-center items-center contact">
                    <h1 className='w-3/4 text-5xl font-500'>HAVE ANY QUESTIONS?  </h1>
                    <p className='w-3/4'>
                    GET IN TOUCH WITH US
                    </p>                    
                    <div className='flex contact__container w-3/4 rounded-xl'>
                        <form 
                            name="contactUs" 
                            method="POST" 
                            data-netlify="true"
                            onSubmit={handleSubmit} 
                            className='w-3/5 bg-white p-2'
                        >
                            <input type="hidden" name="form-name" value="contactUs" />
                            <span className='mb-2 text-2xl block'>Send Us A Message</span>
                            {success && (
                                <p className='success__message'>Success! Thank you for reaching out! </p>
                            )}

                            <div className="form__group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder='Enter your name' required/>
                            </div>
                            <div className="form__group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder='Enter your email' required/>
                            </div>
                            <div className="form__group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required></textarea>
                            </div>

                            <button className='bg-blue-500 text-white mt-2 mb-4 rounded-lg'>Send Message</button>

                        </form>
                        <div className='w-2/5 p-2 text-white'>
                            <span className='mb-2 text-2xl block'>Contact Information</span>
                            <div className="contact__info">
                                <div className="contact__info__item mb-2 flex items-center gap-2">
                                    <i className="fas fa-map-marker-alt text-xl"></i>
                                    <span>Beau Plan, 21001 Pamplemousses</span>
                                </div>

                                <div className="contact__info__item mb-2 flex items-center gap-2">
                                    <i className="fas fa-phone-alt text-xl"></i>
                                    <span>
                                        <a href="tel:+23054345678" className='text-white'>+230 54 345 678</a>
                                    </span>
                                </div>

                                <div className="contact__info__item mb-2 flex items-center gap-2">
                                    <i className="fas fa-envelope text-xl"></i>
                                    <span>
                                        <a href="mailto:info@analyticshub.com" className='text-white'>info@analyticshub.com</a>
                                    </span>
                                </div>
                                
                            </div>

                        </div>

                    </div>                    
                </section>

            </main>
            <Footer/>            
        </>
    );
}

export default Contact;