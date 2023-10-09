import React, { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <section id="contact" className='relative'>
            <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
                <div className='lg:mx-auto md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151564.70739577318!2d-2.619123003340506!3d53.589918772128534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0629dc3b1c93%3A0xcaa40cfafe557822!2sBolton!5e0!3m2!1sen!2suk!4v1696586229012!5m2!1sen!2suk"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                LOCATION
                            </h2>
                            <p className="mt-1">
                                Bolton, <br />
                                Greater Manchester
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                jakeknox11@hotmail.co.uk
                            </a>
                            <h2 className="title-font font-semibold text-white tracing-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">07554938745</p>
                        </div>
                    </div>
                </div>
                {/* <ContactForm /> */}
            </div>
        </section>
    )
}
