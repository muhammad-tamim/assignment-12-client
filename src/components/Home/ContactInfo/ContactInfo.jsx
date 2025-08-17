import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';
import supportGirl from '../../../assets/images/banner.jpg'
import Heading from '../../Elements/Heading';

const ContactInfo = () => {
    return (
        <section>

            <Heading title={"Contact MedEasy Pharmacy"}></Heading>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side - Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={supportGirl}
                            alt="MedEasy Pharmacy"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </div>

                    {/* Right Side - Contact Form */}
                    <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Your message here..."
                                rows="4"
                                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full btn btn-info"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
