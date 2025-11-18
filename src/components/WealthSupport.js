"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WealthSupport() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE IMAGE & FLOATING CARD */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative w-full"
                >
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="/wealth.jpg" // place image in public folder
                            alt="Wealth Management"
                            width={550}
                            height={450}
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Floating Stats Card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="absolute left-6 top-6 bg-white/90 backdrop-blur-md shadow-xl border rounded-xl p-6 w-44 space-y-4"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">112K+</h3>
                            <p className="text-gray-600 text-sm">Active Users</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-teal-700">+40%</h3>
                            <p className="text-gray-600 text-sm">Wealth Increase</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-teal-700">+872$</h3>
                            <p className="text-gray-600 text-sm">Net Income</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE CONTENT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className=""
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Always Ready Support Your{" "}
                        <span className="italic font-serif relative">
                            Wealth Management
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-100 -z-10"></span>
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-5 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>

                    {/* Services list */}
                    <div className="mt-10 space-y-6">
                        {[
                            {
                                title: "One-Time Profit",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit utelit tellus luctus ullamcorper mattis.",
                            },
                            {
                                title: "Fast Round-Up",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit utelit tellus luctus ullamcorper mattis.",
                            },
                            {
                                title: "Virtual Account",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit utelit tellus luctus ullamcorper mattis.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="border-b pb-4"
                            >
                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-6 mt-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-teal-700 transition"
                        >
                            Read More
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-3 text-gray-700 hover:text-teal-700 transition"
                        >
                            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                                <Play size={18} className="text-teal-600" />
                            </div>
                            <span>Play Video</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
