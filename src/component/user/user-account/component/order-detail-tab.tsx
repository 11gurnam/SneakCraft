import React from "react";

const orders = [
    {
        id: "#SNC-4821",
        date: "Mar 22, 2026",
        item: "Air Jordan 1 Retro High OG — Chicago",
        size: "US 10",
        price: "₹18,999",
        status: "Delivered",
        color: "#1D9E75"
    },
    {
        id: "#SNC-4756",
        date: "Mar 10, 2026",
        item: "Nike Dunk Low — Panda",
        size: "US 9.5",
        price: "₹9,499",
        status: "Shipped",
        color: "#378ADD"
    },
    {
        id: "#SNC-4690",
        date: "Feb 28, 2026",
        item: "Yeezy 350 V2 — Zebra",
        size: "US 10",
        price: "₹24,500",
        status: "Processing",
        color: "#BA7517"
    },
    {
        id: "#SNC-4500",
        date: "Jan 15, 2026",
        item: "New Balance 550 — White Green",
        size: "US 9",
        price: "₹8,200",
        status: "Delivered",
        color: "#1D9E75"
    },
];
const ACCENT = "#C8FF00";
const DARK = "#0A0A0A";
const SURFACE = "#111111";
const SURFACE2 = "#1A1A1A";
const BORDER = "#2A2A2A";
const MUTED = "#666666";
const WHITE = "#F5F5F0";

const field = {
    width: "100%",
    background: SURFACE2,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: "11px 14px",
    color: WHITE,
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
};

const labelStyle = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: MUTED,
    display: "block",
    marginBottom: 6,
};

const saveBtn = {
    background: ACCENT,
    color: DARK,
    border: "none",
    borderRadius: 8,
    padding: "11px 24px",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    cursor: "pointer",
};


const OrderDetailTab = () => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20}}>
                <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: MUTED,
                    letterSpacing: "0.08em"
                }}>4 ORDERS
                </div>
                <select style={{...field, width: "auto", padding: "6px 12px", fontSize: 12, cursor: "pointer"}}>
                    <option>All time</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                </select>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: 10}}>
                {orders.map(o => (
                    <div key={o.id} style={{
                        background: SURFACE2, border: `1px solid ${BORDER}`,
                        borderRadius: 10, padding: "14px 16px",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        cursor: "pointer", transition: "border-color .15s",
                    }}
                         onMouseEnter={e => e.currentTarget.style.borderColor = ACCENT + "55"}
                         onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
                    >
                        <div style={{display: "flex", gap: 14, alignItems: "center"}}>
                            <div style={{
                                width: 42, height: 42, borderRadius: 8,
                                background: SURFACE, border: `1px solid ${BORDER}`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2 14h16M2 14l3-7h8l2 3.5L18 14" stroke={MUTED} strokeWidth="1.4"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: WHITE,
                                    marginBottom: 2
                                }}>{o.item}</div>
                                <div style={{fontSize: 12, color: MUTED}}>{o.id} · {o.date} · Size {o.size}</div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: 4,
                            flexShrink: 0,
                            marginLeft: 16
                        }}>
                            <div style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 15,
                                color: WHITE
                            }}>{o.price}</div>
                            <div style={{
                                fontSize: 11, fontWeight: 600, letterSpacing: "0.06em",
                                background: o.color + "20", color: o.color,
                                border: `1px solid ${o.color}40`,
                                borderRadius: 20, padding: "2px 10px",
                            }}>{o.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default OrderDetailTab;
