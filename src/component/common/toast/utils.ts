export const SNEAKCRAFT_MESSAGES = [
    { id: 1, type: "auth", icon: "🔐", title: "User Logged In", detail: "Welcome back, KickHead_99", time: "just now" },
    { id: 2, type: "select", icon: "👟", title: "Sneaker Selected", detail: "Air Jordan 1 Retro High OG — Chicago", time: "2s ago" },
    { id: 3, type: "drop", icon: "🔥", title: "Drop Alert", detail: "Yeezy 350 V2 — Zebra restocking in 10 min", time: "5s ago" },
    { id: 4, type: "cart", icon: "🛒", title: "Added to Cart", detail: "Nike Dunk Low — Panda, Size US 10", time: "12s ago" },
    { id: 5, type: "success", icon: "✅", title: "Order Confirmed", detail: "Order #SNC-2026-4821 is being processed", time: "1m ago" },
];

export const TYPE_STYLES = {
    auth:    { accent: "#00FFB2", bar: "linear-gradient(180deg,#00FFB2,#00c98a)" },
    select:  { accent: "#FF6B2B", bar: "linear-gradient(180deg,#FF6B2B,#d94d10)" },
    drop:    { accent: "#FF3A3A", bar: "linear-gradient(180deg,#FF3A3A,#c01e1e)" },
    cart:    { accent: "#FACC15", bar: "linear-gradient(180deg,#FACC15,#ca9e10)" },
    success: { accent: "#00FFB2", bar: "linear-gradient(180deg,#00FFB2,#00c98a)" },
};
