"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";

export default function Steps() {
    const itemsRef = useRef([]);

    // fade + slide-up animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("animate-fade-up");
                }),
            { threshold: 0.2 }
        );

        itemsRef.current.forEach((el) => el && observer.observe(el));
    }, []);

    const steps = [
        {
            number: "01.",
            title: "Register via our Wealthy Official Website",
            desc: "Quis autem vel eum iure reprehenderit qui inea voluptate.",
        },
        {
            number: "02.",
            title: "Choose a wealth service that will help you",
            desc: "Lorem ipsum dolor sit amet, qua consectetur adipiscing elit.",
        },
        {
            number: "03.",
            title: "Complete payment according the service",
            desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
        },
        {
            number: "04.",
            title: "Bring the file and verify it to our office",
            desc: "Lorem ipsum dolor sit amet, qua consectetur adipiscing elit.",
        },
    ];

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

                {/* LEFT SIDE STEPS */}
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                            style={{ animationDelay: `${index * 0.12}s` }}
                            className="opacity-0 translate-y-8 transition-all duration-700"
                        >
                            {/* Row */}
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

                                {/* Number */}
                                <div className="text-3xl font-semibold italic text-gray-700 relative">
                                    {step.number}
                                    <span className="absolute left-0 bottom-0 w-8 h-2 bg-teal-100 -z-10"></span>
                                </div>

                                {/* Title + Description */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                    <p className="text-gray-500 mt-1">{step.desc}</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] bg-gray-200 mt-8"></div>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="flex flex-col justify-center">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Simple Step To Get{" "}
                        <span className="italic font-serif relative">
                            Our Services
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-100 -z-10"></span>
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-600 mt-4">
                        Your wealth management is our top priority
                    </p>

                    <p className="text-gray-500 mt-2 mb-10 leading-relaxed">
                        Nemo enim ipsam voluptatem sit quia elit voluptas sit aspernatur aut fugit magnam aliquam.
                    </p>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">

                        {/* Call Card */}
                        <div className="bg-white shadow-xl rounded-2xl p-6 border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="bg-teal-100 p-4 rounded-xl inline-flex items-center justify-center group-hover:scale-110 transition">
                                <Phone size={30} className="text-teal-700" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mt-4">For Call</h3>
                            <p className="text-gray-500">(+62) 81 6754 345</p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white shadow-xl rounded-2xl p-6 border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="bg-teal-100 p-4 rounded-xl inline-flex items-center justify-center group-hover:scale-110 transition">
                                <Mail size={30} className="text-teal-700" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mt-4">For Consultation</h3>
                            <p className="text-gray-500">contact@jegstudio.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
