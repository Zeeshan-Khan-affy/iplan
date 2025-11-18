"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

                {/* Left: Logo + Email */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-extrabold text-gray-900">iPlan</h1>
                    </div>

                    {/* Email */}
                    <p className="text-gray-600 text-sm border-l pl-4">
                        contact@jegstudio.com
                    </p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-[16px] font-medium text-gray-800">

                    {/* Active Menu Item */}
                    <Link
                        href="/"
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-md"
                    >
                        Home
                    </Link>

                    <Link href="/about" className="hover:text-teal-600 transition">
                        About
                    </Link>

                    <Link href="/services" className="hover:text-teal-600 transition">
                        Services
                    </Link>

                    {/* Pages Dropdown (just UI for now) */}
                    <button className="flex items-center gap-1 hover:text-teal-600 transition">
                        Pages
                        <ChevronDown size={16} />
                    </button>

                    <Link href="/contact" className="hover:text-teal-600 transition">
                        Contact
                    </Link>
                </div>

                {/* Let's Talk Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition"
                    >
                        Let’s Talk 💬
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="w-6 h-[2px] bg-black"></span>
                    <span className="w-6 h-[2px] bg-black"></span>
                    <span className="w-6 h-[2px] bg-black"></span>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
                    <Link href="/" className="block">Home</Link>
                    <Link href="/about" className="block">About</Link>
                    <Link href="/services" className="block">Services</Link>
                    <Link href="/contact" className="block">Contact</Link>

                    <Link
                        href="/contact"
                        className="block bg-teal-600 text-white w-full text-center py-2 rounded-lg"
                    >
                        Let’s Talk 💬
                    </Link>
                </div>
            )}
        </nav>
    );
}
