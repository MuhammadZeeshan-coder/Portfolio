import React from 'react'
import SemiHeading from '../Shared/SemiHeading'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import BoxTwo from '../Shared/BoxTwo'

const Contact = () => {
    return (
        <section className="py-12 md:py-20" id="contact">
            <div className="container mx-auto xl:px-25 lg:px-15 px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Contact Information */}
                    <div>
                        <SemiHeading h5="Contact" h2="let's work together !" />

                        <p
                            className="mt-3 text-sm sm:text-base"
                            style={{ fontFamily: 'Poppins' }}
                        >
                            I am currently available for work.
                            Let's talk about your project.
                        </p>

                        <div className="mt-8 space-y-4">

                            <BoxTwo
                                icon={<Mail size={22} />}
                                title="Email"
                                value="mzeeshan151109@gmail.com"
                            />

                            <BoxTwo
                                icon={<MapPin size={22} />}
                                title="Location"
                                value="Karachi, Pakistan"
                            />

                            <BoxTwo
                                icon={<Phone size={22} />}
                                title="Phone"
                                value="+92 3103696838"
                            />

                        </div>
                    </div>


                    {/* Contact Form */}
                    <div className="w-full">

                        <form className="text-black p-4 sm:p-6 rounded-lg space-y-4 w-full">

                            {/* Name + Company */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full rounded-lg p-3 bg-white border border-(--green) focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="company"
                                        placeholder="Your Company Name"
                                        className="w-full rounded-lg p-3 bg-white border border-(--green) focus:outline-none"
                                    />
                                </div>

                            </div>


                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg bg-white border border-(--green) focus:outline-none"
                                />
                            </div>


                            {/* Message */}
                            <div>
                                <textarea
                                    id="message"
                                    placeholder="Message"
                                    rows="5"
                                    className="w-full p-3 rounded-lg bg-white border border-(--green) focus:outline-none resize-none"
                                ></textarea>
                            </div>


                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-(--green) text-black border border-(--green) flex gap-2 justify-center items-center hover:text-black hover:bg-(--white) duration-300 py-3 px-6 rounded-full transition"
                            >
                                Send Message
                                <Send size={18} />
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact