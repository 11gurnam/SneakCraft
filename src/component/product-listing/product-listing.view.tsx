import { useState } from "react";
import { ISneakerCraftPLPView } from "./type/product-listing.types";
import { ChevronDown, FilterIcon, HeartIcon, StarIcon } from "../common/icons";

const categories = ["All", "Skate", "Lifestyle", "Street", "Sport"];
const sortOptions = ["Featured", "Price: Low–High", "Price: High–Low", "Top Rated", "Newest"];



const SneakerCraftPLPView:React.FC<ISneakerCraftPLPView>=(props)=> {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeSort, setActiveSort] = useState("Featured");
    const [wishlist, setWishlist] = useState([]);
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedColors, setSelectedColors] = useState({});
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const filtered = props.products.filter(
        (p) => activeCategory === "All" || p.category === activeCategory
    );

    const sorted = [...filtered].sort((a, b) => {
        if (activeSort === "Price: Low–High") return a.price - b.price;
        if (activeSort === "Price: High–Low") return b.price - a.price;
        if (activeSort === "Top Rated") return b.rating - a.rating;
        return 0;
    });

    const tagStyles = {
        Bestseller: "bg-[#e8c547] text-black",
        "New Drop": "bg-white text-black",
        Limited: "bg-[#c9503e] text-white",
        Handcrafted: "bg-[#2c6e49] text-white",
    };

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white">

            {/* NAV */}
            <nav className="flex items-center justify-between px-10 py-5 border-b border-white/10 sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm">
                <span className="display-font text-2xl font-bold tracking-widest">SNEAKERCRAFT</span>
                <div className="flex items-center gap-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Customize</a>
                    <a href="#" className="hover:text-white transition-colors">Materials</a>
                    <a href="#" className="hover:text-white transition-colors">Process</a>
                    <a href="#" className="hover:text-white transition-colors">Reviews</a>
                </div>
                <button className="bg-[#e8c547] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#f5d458] transition-colors">
                    Start Crafting
                </button>
            </nav>



            {/* FILTER BAR */}
            <div className="px-10 py-5 flex items-center justify-between border-y border-white/10">
                {/* Category Pills */}
                <div className="flex items-center gap-2">
                    <FilterIcon />
                    <span className="text-gray-500 text-sm mr-3">Filter</span>
                    <div className="flex gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`pill-btn text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                                    activeCategory === cat
                                        ? "bg-[#e8c547] text-black border-[#e8c547]"
                                        : "border-white/20 text-gray-400 hover:border-white/50 hover:text-white"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sort + Count */}
                <div className="flex items-center gap-6">
                    <span className="text-gray-500 text-sm">{sorted.length} styles</span>
                    <div className="relative">
                        <button
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-full"
                        >
                            {activeSort}
                            <ChevronDown />
                        </button>
                        {showSortDropdown && (
                            <div className="absolute right-0 top-full mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden z-10 w-44">
                                {sortOptions.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => { setActiveSort(opt); setShowSortDropdown(false); }}
                                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                                            activeSort === opt
                                                ? "text-[#e8c547] bg-white/5"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sorted.map((product) => {
                    const isWished = wishlist.includes(product.id);
                    const isHovered = hoveredId === product.id;
                    const selectedColor = selectedColors[product.id] ?? 0;

                    return (
                        <div
                            key={product.id}
                            className="card group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#e8c547]/30 transition-all duration-300"
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image area */}
                            <div className="relative h-64 bg-[#1c1c1c] overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="card-img w-full h-full object-cover object-center"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />

                                {/* Tag */}
                                {product.tag && (
                                    <span className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${tagStyles[product.tag]}`}>
                    {product.tag}
                  </span>
                                )}

                                {/* Wishlist */}
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-all"
                                >
                                    <HeartIcon filled={isWished} />
                                </button>

                                {/* Quick add - visible on hover */}
                                <div className={`card-overlay absolute bottom-4 left-4 right-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                                    <button className="add-btn w-full bg-[#e8c547] text-black text-xs font-bold tracking-wider py-2.5 rounded-xl hover:bg-[#f5d458]">
                                        CUSTOMIZE THIS STYLE
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-1">
                                    <div>
                                        <p className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">{product.category} · {product.material}</p>
                                        <h3 className="display-font text-xl font-bold tracking-wide">{product.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[#e8c547] font-semibold text-lg">${product.price}</p>
                                        <p className="text-gray-600 text-[10px]">from</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1.5 mt-2 mb-4">
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </div>
                                    <span className="text-[#e8c547] text-xs font-semibold">{product.rating}</span>
                                    <span className="text-gray-600 text-xs">({product.reviews})</span>
                                </div>

                                {/* Color Swatches */}
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-gray-600 uppercase tracking-wider mr-1">Color</span>
                                    {product.colorways.map((color, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedColors((prev) => ({ ...prev, [product.id]: i }))}
                                            className="w-5 h-5 rounded-full border-2 transition-all"
                                            style={{
                                                backgroundColor: color,
                                                borderColor: selectedColor === i ? "#e8c547" : "transparent",
                                                outline: selectedColor === i ? "2px solid transparent" : "1px solid rgba(255,255,255,0.15)",
                                                outlineOffset: "1px",
                                            }}
                                        />
                                    ))}
                                    <span className="ml-auto text-[10px] text-gray-600">{product.colorways.length} colorways</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* BOTTOM CTA */}
            <div className="mx-10 mb-16 rounded-2xl bg-[#e8c547] p-12 flex items-center justify-between">
                <div>
                    <p className="text-black/60 text-xs tracking-widest uppercase mb-2">Don't see what you want?</p>
                    <h2 className="display-font text-5xl font-extrabold text-black leading-none">BUILD FROM<br />SCRATCH.</h2>
                </div>
                <div className="flex flex-col gap-3 items-end">
                    <p className="text-black/70 text-sm max-w-xs text-right">12 premium materials. 40+ colourways. Every pair made by hand, built for you alone.</p>
                    <button className="bg-black text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors">
                        Start Crafting →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SneakerCraftPLPView;
