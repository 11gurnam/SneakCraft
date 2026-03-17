import React from "react";
import Layout from "../component/layout/layout";

const Home = () => {
    return (
        <Layout>
            {/* HERO */}
            <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-[#0f0f0f] text-white">

                {/* LEFT */}
                <div className="max-w-xl ">
                    <div className="uppercase tracking-widest text-sm text-gray-400 mb-4 ">
                        Handcrafted to Order
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-[#565655]">
                        Your Sole.<br />
                        Your <em className="text-yellow-500 not-italic">Story.</em><br />
                        Your Craft.
                    </h1>

                    <p className="text-gray-400 mb-8 text-[#565655]">
                        Choose from 12 premium materials, 40+ colourways, and infinite
                        combinations. Every pair made by hand, built for you alone.
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("customizer")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition"
                        >
                            Design My Pair
                        </button>

                        <button className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 transition">
                            Watch Process
                        </button>
                    </div>
                </div>

                {/* RIGHT (SVG SHOE) */}
                <div className="mt-12 lg:mt-0">
                    <svg
                        className="w-[420px] max-w-full"
                        viewBox="0 0 480 380"
                        fill="none"
                    >
                        <ellipse
                            cx="240"
                            cy="355"
                            rx="160"
                            ry="14"
                            fill="rgba(0,0,0,0.4)"
                        />

                        <path
                            d="M60 310 Q40 310 35 295 L30 270 Q28 255 40 250 L380 238 Q410 237 420 252 L430 270 Q440 290 430 305 Q420 318 380 320 Z"
                            fill="#2A2A2A"
                        />

                        <path
                            d="M55 258 Q42 258 40 248 L50 238 Q55 232 70 232 L370 230 Q395 230 400 240 L408 252 Q410 262 395 265 L65 268 Z"
                            fill="#3A3530"
                        />

                        <path
                            d="M68 238 L75 180 Q78 165 90 155 L130 135 Q148 128 165 130 L230 134 Q255 136 275 148 L310 165 Q330 175 345 190 L365 215 Q378 228 380 240 L68 238Z"
                            fill="#8B6914"
                        />
                    </svg>
                </div>
            </section>

            {/* REVIEWS */}
            <section className="px-6 lg:px-20 py-20 bg-[#111] text-white">

                <div className="mb-12">
                    <div className="uppercase tracking-widest text-gray-400 text-sm mb-2">
                        Worn and Loved
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#565655]">
                        What Our <em className="text-yellow-500 not-italic">Wearers Say</em>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* CARD */}
                    <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
                        <div className="text-yellow-500 mb-2">★★★★★</div>
                        <p className="text-gray-300 mb-6">
                            "I chose the full-grain leather in Oxford Blue with cork soles.
                            Six months in — the leather has developed the most beautiful
                            patina."
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800">
                                A
                            </div>
                            <div>
                                <div className="font-semibold">Arjun Mehta</div>
                                <div className="text-sm text-gray-400">
                                    Delhi · Customised Oxford
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD */}
                    <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
                        <div className="text-yellow-500 mb-2">★★★★★</div>
                        <p className="text-gray-300 mb-6">
                            "The velvet loafer in Midnight Plum with gold laces was a risk —
                            and I'd do it again."
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-800">
                                P
                            </div>
                            <div>
                                <div className="font-semibold">Priya Sharma</div>
                                <div className="text-sm text-gray-400">
                                    Mumbai · Velvet Loafer
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD */}
                    <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
                        <div className="text-yellow-500 mb-2">★★★★★</div>
                        <p className="text-gray-300 mb-6">
                            "They nailed every detail. The wooden delivery box alone was worth
                            it."
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800">
                                R
                            </div>
                            <div>
                                <div className="font-semibold">Rohan Verma</div>
                                <div className="text-sm text-gray-400">
                                    Bangalore · Custom Derby
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Home;
