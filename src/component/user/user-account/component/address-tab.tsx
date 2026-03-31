import React, { useState } from "react";

const ACCENT = "#C8FF00";
const DARK = "#0A0A0A";
const SURFACE = "#111111";
const SURFACE2 = "#1A1A1A";
const BORDER = "#2A2A2A";
const MUTED = "#666666";
const WHITE = "#F5F5F0";


const labelStyle = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: MUTED,
    display: "block",
    marginBottom: 6,
    textAlign: 'left',
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

const AddressTab = () => {
    const [saved, setSaved] = useState(false);
    return (
        <div>
            <div style={{marginBottom: 20, display: "flex", gap: 10}}>
                {["Home", "Work"].map((t, i) => (
                    <div key={t} style={{
                        padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
                        background: i === 0 ? ACCENT : "transparent",
                        color: i === 0 ? DARK : MUTED,
                        border: i === 0 ? `1px solid ${ACCENT}` : `1px solid ${BORDER}`,
                        fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em",
                    }}>{t}</div>
                ))}
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16}}>
                {[["Full name", "Kick Head"], ["Phone", "+91 98765 43210"]].map(([l, v]) => (
                    <div key={l}><label style={labelStyle}>{l}</label><input defaultValue={v} style={field}/></div>
                ))}
            </div>
            <div style={{marginBottom: 16}}>
                <label style={labelStyle}>Address line 1</label>
                <input defaultValue="42, Sneaker Lane, MG Road" style={field}/>
            </div>
            <div style={{marginBottom: 16}}>
                <label style={labelStyle}>Address line 2</label>
                <input defaultValue="Near Sole Market" style={field}/>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24}}>
                {[["City", "Jaipur"], ["State", "Rajasthan"], ["PIN", "302001"]].map(([l, v]) => (
                    <div key={l}><label style={labelStyle}>{l}</label><input defaultValue={v} style={field}/></div>
                ))}
            </div>
            <button style={saveBtn} onClick={() => {
                setSaved(true);
                setTimeout(() => setSaved(false), 2000);
            }}>
                {saved ? "✓ Address saved" : "Save address"}
            </button>
        </div>
    );
}

export default AddressTab;
