"use client";

import { useEffect, useRef } from "react";
import {
    Calculator,
    Wallet,
    Receipt,
    PiggyBank,
    BarChart,
    CircleDollarSign,
    FileBadge,
    CreditCard,
} from "lucide-react";

export default function Services() {
    const cardsRef = useRef([]);

    // Stagger animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("animate-stagger");
                }),
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });
    }, []);

    const services = [
        { title: "Wealth Budgeting", icon: <Calculator size={28} /> },
        { title: "Debt Assistance", icon: <Wallet size={28} /> },
        { title: "Tax Strategies", icon: <Receipt size={28} /> },
        { title: "Retirement Income", icon: <PiggyBank size={28} /> },
        { title: "Online Investment", icon: <BarChart size={28} /> },
        { title: "Cash Management", icon: <CircleDollarSign size={28} /> },
        { title: "Full Insurance", icon: <FileBadge size={28} /> },
        { title: "Instant Withdraw", icon: <CreditCard size={28} /> },
    ];

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Everything{" "}
                    <span className="italic font-serif relative">
                        Just Becomes So Easy
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-100 -z-10"></span>
                    </span>
                </h1>

                <p className="text-gray-500 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ animationDelay: `${index * 0.12}s` }}
                            className="opacity-0 translate-y-8 transform transition-all duration-700
              bg-white p-6 rounded-2xl shadow-sm border cursor-pointer
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
              hover:border-teal-300
              hover:bg-white/90
              hover:[box-shadow:0px_20px_40px_rgba(0,0,0,0.08)]
              transition ease-[cubic-bezier(.21,1.02,.73,1)]
              group
              perspective-1000
              hover:rotate-[1deg] hover:skew-x-[1deg]"
                        >
                            {/* Icon Box */}
                            <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center
                              text-teal-700 group-hover:scale-110 group-hover:rotate-6
                              transition duration-300 ease-out shadow-sm">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <div className="text-left mt-4">
                                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-teal-700 transition">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
