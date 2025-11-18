"use client";

export default function Partners() {
    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Top Title */}
                <p className="text-gray-600 text-lg">
                    Worked & supported by many international{" "}
                    <span className="font-semibold text-gray-800">Famous Finance</span>{" "}
                    services.
                </p>

                {/* Marquee Wrapper */}
                <div className="mt-10 relative overflow-hidden">

                    {/* Gradient Fade Left */}
                    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20"></div>

                    {/* Gradient Fade Right */}
                    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20"></div>

                    {/* Marquee Content */}
                    <div className="flex items-center gap-16 whitespace-nowrap animate-marquee text-gray-400 opacity-80 text-2xl font-semibold">

                        {/* Duplicate content for infinite scroll */}
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16">
                                <span className="flex items-center gap-2">
                                    <span className="text-3xl">✖</span> Inspire
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-3xl">✳</span> Sitemark
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-3xl">◎</span> vision
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-3xl">〰</span> waveless
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-3xl">⊕</span> umbrella
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}
