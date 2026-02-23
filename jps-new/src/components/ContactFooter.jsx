import React from 'react';
import { Mail, Phone, MapPin, Upload } from 'lucide-react';

const ContactFooter = () => {
    return (
        <footer id="contact" className="bg-secondary text-white relative">
            {/* Contact Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Optimize Your Production?</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Send us your requirements or technical drawings. Our engineering team will get back to you with a quote within 24 hours.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-none">
                                    <MapPin className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg mb-1">Visit Us</h4>
                                    <p className="text-gray-400 text-sm">4/47, Ajanta Textile Compound Site -2, <br />Industrial Area, Mohan Nagar Ghaziabad, UP-201007</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-none">
                                    <Mail className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg mb-1">Email Us</h4>
                                    <a href="mailto:contact@jpsenggmaterials.com" className="text-gray-400 text-sm hover:text-primary transition">contact@jpsenggmaterials.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-none">
                                    <Phone className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg mb-1">Call Us</h4>
                                    <a href="tel:01204818775" className="text-gray-400 text-sm hover:text-primary transition">0120-4818775</a>
                                    <span className="text-gray-400 text-sm mx-1">,</span>
                                    <a href="tel:+919811131910" className="text-gray-400 text-sm hover:text-primary transition">+91-9811131910 (Sales)</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-10 shadow-2xl">
                        <h3 className="text-secondary font-heading font-bold text-2xl mb-6">Request a Quote</h3>
                        <form className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="bg-gray-50 border border-gray-200 p-3 text-secondary focus:outline-none focus:border-primary placeholder:text-gray-400" />
                                <input type="text" placeholder="Company Name" className="bg-gray-50 border border-gray-200 p-3 text-secondary focus:outline-none focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="email" placeholder="Email Address" className="bg-gray-50 border border-gray-200 p-3 text-secondary focus:outline-none focus:border-primary placeholder:text-gray-400" />
                                <input type="tel" placeholder="Phone Number" className="bg-gray-50 border border-gray-200 p-3 text-secondary focus:outline-none focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <textarea rows="4" placeholder="Describe your requirement..." className="bg-gray-50 border border-gray-200 p-3 text-secondary focus:outline-none focus:border-primary placeholder:text-gray-400"></textarea>

                            {/* File Upload Simulation */}
                            <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition">
                                <Upload className="text-gray-400 mb-2" />
                                <span className="text-sm text-gray-500 font-medium">Upload Drawing / CAD File</span>
                                <span className="text-xs text-gray-400 mt-1">(PDF, DWG, DXF accepted)</span>
                            </div>

                            <button className="bg-primary text-secondary font-heading font-bold uppercase tracking-widest py-4 mt-2 hover:bg-secondary hover:text-white transition-colors duration-300">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright Footer */}
            <div className="border-t border-white/10 py-6 bg-secondary text-center">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2025 JPS Engineering Material Pvt Ltd. All Rights Reserved.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-primary transition">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
