import React from 'react';
import SneakerCraftPLPView from "./product-listing.view";



const SneakerCraftPLP:React.FC=()=>{

    const products = [
        {
            id: 1,
            name: "Vans Old Skool Pro",
            category: "Skate",
            material: "Full-Grain Leather",
            price: 189,
            colorways: ["#1a3a6e", "#f0f0f0", "#2c2c2c"],
            tag: "Bestseller",
            rating: 4.9,
            reviews: 312,
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        },
        {
            id: 2,
            name: "Canvas Court Low",
            category: "Lifestyle",
            material: "Premium Canvas",
            price: 149,
            colorways: ["#e8c547", "#2c2c2c", "#c9503e"],
            tag: "New Drop",
            rating: 4.7,
            reviews: 198,
            img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80",
        },
        {
            id: 3,
            name: "Suede Phantom High",
            category: "Street",
            material: "Italian Suede",
            price: 239,
            colorways: ["#6b4c3b", "#1a1a1a", "#d4c4a0"],
            tag: "Limited",
            rating: 4.8,
            reviews: 87,
            img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
        },
        {
            id: 4,
            name: "Mesh Runner X",
            category: "Sport",
            material: "Technical Mesh",
            price: 169,
            colorways: ["#ffffff", "#e8c547", "#333"],
            tag: null,
            rating: 4.6,
            reviews: 241,
            img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
        },
        {
            id: 5,
            name: "Nubuck Heritage",
            category: "Lifestyle",
            material: "Nubuck Leather",
            price: 219,
            colorways: ["#c9a86c", "#2c2c2c", "#8b3a3a"],
            tag: "Handcrafted",
            rating: 5.0,
            reviews: 56,
            img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
        },
        {
            id: 6,
            name: "Vulc Street Derby",
            category: "Skate",
            material: "Waxed Canvas",
            price: 159,
            colorways: ["#2c2c2c", "#e8c547", "#f0ede8"],
            tag: null,
            rating: 4.5,
            reviews: 174,
            img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&q=80",
        },
    ];

    return(
        <SneakerCraftPLPView products={products}/>
    )



}
