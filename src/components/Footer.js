"use client";

import {
    Instagram,
    Linkedin,
    Youtube,
    ArrowUp,
    Mail,
    Phone,
    FileText,
    HelpCircle,
    Truck,
    Users,
    Target,
    Briefcase,
    Newspaper
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#31B099] text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                    {/* Brand Column - 4 cols */}
                    <div className="lg:col-span-4 space-y-4">
                        <h2 className="text-2xl font-bold mb-4">Iplan</h2>
                        <p className="text-white/80 text-sm leading-relaxed max-w-md">
                            Your ultimate fashion destination. Style made simple, fashion made accessible for everyone.
                        </p>

                        {/* Newsletter */}
                        <div className="space-y-3 mt-6">
                            <h3 className="font-semibold text-white text-sm">NEWSLETTER</h3>
                            <div className="flex space-x-2 max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-2 bg-white rounded-l text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                                <button className="px-4 py-2 bg-white text-[#31B099] font-medium rounded-r hover:bg-gray-50 transition-colors text-sm">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns - 2 cols each */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Us */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">About Us</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Our Mission", icon: Target },
                                    { name: "Our Team", icon: Users },
                                    { name: "Careers", icon: Briefcase },
                                    { name: "Press Kit", icon: Newspaper }
                                ].map((item, index) => (
                                    <li key={item.name}>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 text-sm"
                                        >
                                            <item.icon size={16} />
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Support</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Contact Us", icon: Phone },
                                    { name: "Refund Policy", icon: FileText },
                                    { name: "FAQ", icon: HelpCircle },
                                    { name: "Shipping Info", icon: Truck }
                                ].map((item, index) => (
                                    <li key={item.name}>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 text-sm"
                                        >
                                            <item.icon size={16} />
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Connect</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Instagram", icon: Instagram },
                                    { name: "LinkedIn", icon: Linkedin },
                                    { name: "YouTube", icon: Youtube },
                                ].map((item, index) => (
                                    <li key={item.name}>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 text-sm"
                                        >
                                            <item.icon size={16} />
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Social Buttons */}
                            <div className="flex space-x-3 pt-2">
                                {[Instagram, Linkedin, Youtube].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors duration-200"
                                    >
                                        <Icon size={16} className="text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-white/60 text-sm">
                            © {new Date().getFullYear()} IPlan. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                Cookies
                            </a>
                        </div>

                        {/* Back to Top */}
                        <button
                            onClick={scrollToTop}
                            className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-sm"
                        >
                            <span>Back to top</span>
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}