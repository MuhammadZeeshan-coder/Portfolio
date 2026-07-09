import React from 'react'
import SemiHeading from '../Shared/SemiHeading'
import zeeshan3 from '../assets/zeeshan3.png'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import BoxTwo from '../Shared/BoxTwo';



const Contact = () => {
    return (
        <section className='bg-(--white) py-15 flex justify-center gap-50' id='contact'>
            <div>
                <SemiHeading h5="Contact" h2="let's work together !" />
                <p className='mt-3' style={{ fontFamily: "poppins" }}>I am currently available for work. <br />
                    Lets's talk about your project.</p>
                <div className='mt-5'>
                    <BoxTwo icon={<Mail />} title="Email" value="mzeeshan151109@gmail.com" />
                    <BoxTwo icon={<MapPin />} title="Location" value="Karachi, Pakistan" />
                    <BoxTwo icon={<Phone />} title="Phone" value="+92 3103696838" />
                </div>
            </div>
            <div>
                <form class="text-black p-6 rounded-lg space-y-4 w-150">
                    <div className='flex gap-7'>
                        <div>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                class="w-65 rounded-lg p-3 bg-white border border-(--green)  focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="company"
                                placeholder="Your Company Name"
                                class="w-65 rounded-lg p-3 bg-white border border-(--green)  focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            class="w-full p-3 rounded-lg bg-white border border-(--green)  focus:outline-none"
                        />
                    </div>

                    <div>
                        <textarea
                            id="message"
                            placeholder="Message"
                            rows="5"
                            class="w-full p-3 rounded-lg bg-white border border-(--green) focus:outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-(--green) text-black border border-(--green) flex gap-2 justify-center items-center hover:text-black hover:bg-(--white) duration-300 delay-75 py-3 px-6 rounded-4xl transition"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Contact