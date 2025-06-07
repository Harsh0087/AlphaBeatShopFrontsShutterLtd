import React from 'react';

const ContactForm = () => {
    return (
        <div id='form' className="max-w-xl mx-auto p-6  shadow-lg text-white rounded-2xl mt-10 .bg-discount-gradient border">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us For Free Quotation</h2>
            <form  action="https://formsubmit.co/hsinghhh36@gmail.com" method="POST" className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-white font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full mt-1 px-4 py-2 border text-black rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-white font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        
                        className="w-full mt-1 px-4 py-2 border rounded-xl text-black shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-white font-medium">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="w-full mt-1 px-4 py-2 border rounded-xl text-black shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-white font-medium">Dimensions</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        required
                        className="w-full text-black mt-1 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-gradient hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
