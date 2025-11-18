"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* LEFT SIDE IMAGE WITH FLOATING CARDS */}
                <div className="relative w-full">
                    {/* Background Container */}
                    <div className="bg-gradient-to-br from-teal-900 to-teal-700 rounded-3xl p-6 md:h-[470px] h-[380px] flex justify-center items-end relative">

                        {/* Main Image */}
                        <div className="relative w-[260px] md:w-[330px] h-[330px] md:h-[420px]">
                            <Image
                                src="/hero.png"
                                alt="hero image"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>

                        {/* Floating Card #1 */}
                        <div className="absolute top-6 left-6 bg-white p-4 shadow-lg rounded-xl w-[160px]">
                            <p className="text-gray-600 text-xs">Total customers</p>
                            <h2 className="text-xl font-bold">2,420</h2>
                            <p className="text-green-600 text-xs">+40% vs last month</p>
                        </div>

                        {/* Floating Card #2 */}
                        <div className="absolute top-24 right-4 bg-white p-4 shadow-lg rounded-xl w-[180px]">
                            <p className="text-gray-700 text-sm font-semibold mb-1">Wealth Insights</p>
                            <div className="h-2 bg-teal-200 rounded-full"></div>
                            <p className="text-xs mt-2">Wealth Increase: +$8.6k</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div>
                    {/* News Badge */}
                    <div className="inline-flex items-center gap-4 bg-gray-100 px-5 py-2 rounded-full border mb-5">
                        <span className="px-3 py-1 bg-teal-700 text-white text-sm rounded-full">
                            News!
                        </span>
                        <p className="text-gray-700 text-sm">Get the latest update about wealth ✨</p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Manage Your Wealth
                    </h1>

                    {/* Subheading with underline */}
                    <h2 className="text-4xl italic font-serif text-gray-800 relative w-fit mt-2">
                        Protecting Your Legacy
                        <span className="absolute left-0 bottom-1 w-full h-3 bg-teal-100 -z-10"></span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mt-6 max-w-md leading-relaxed">
                        We understand the importance of managing your wealth, finance for individuals & businesses.
                    </p>

                    {/* CTA + Description */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-8">
                        <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700">
                            Get Started
                        </button>

                        <p className="text-gray-600 border-l pl-6 max-w-xs">
                            We understand the importance of managing your wealth & finances.
                        </p>
                    </div>

                    {/* Feature List */}
                    <div className="flex flex-wrap gap-8 text-gray-800 mt-10 pt-6 border-t">
                        <p className="flex items-center gap-2">
                            ✔ 100% Free Consultation
                        </p>
                        <p className="flex items-center gap-2">
                            ✔ +40% Increase of your wealth
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
