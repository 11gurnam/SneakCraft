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


const ProfileTab = () => {
    const [saved, setSaved] = useState(false);
    return (
        <div>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 32,
                paddingBottom: 24,
                borderBottom: `1px solid ${BORDER}`
            }}>
                <div style={{position: "relative"}}>
                    <div style={{
                        width: 72, height: 72, borderRadius: "50%",
                        background: `linear-gradient(135deg, ${ACCENT}33, ${ACCENT}11)`,
                        border: `2px solid ${ACCENT}44`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800, fontSize: 26, color: ACCENT,
                    }}>KH
                    </div>
                    <div style={{
                        position: "absolute", bottom: 0, right: 0,
                        width: 20, height: 20, borderRadius: "50%",
                        background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer",
                    }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 8.5l1.5-1.5 5-5L9 3.5 4 8.5H1z" stroke={DARK} strokeWidth="1.1"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        color: WHITE
                    }}>KickHead_99
                    </div>
                    <div style={{fontSize: 13, color: MUTED, marginTop: 2}}>kickhead99@gmail.com · Member since Jan
                        2024
                    </div>
                    <div style={{
                        marginTop: 6, display: "inline-flex", alignItems: "center", gap: 5,
                        background: `${ACCENT}15`, border: `1px solid ${ACCENT}33`, borderRadius: 20,
                        padding: "3px 10px", fontSize: 11, fontWeight: 600, color: ACCENT,
                        fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em",
                    }}>⚡ SNEAK PRO
                    </div>
                </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16}}>
                {[["First name", "Kick"], ["Last name", "Head"]].map(([l, v]) => (
                    <div key={l}>
                        <label style={labelStyle}>{l}</label>
                        <input defaultValue={v} style={field}/>
                    </div>
                ))}
            </div>
            <div style={{marginBottom: 16}}>
                <label style={labelStyle}>Username</label>
                <input defaultValue="KickHead_99" style={field}/>
            </div>
            <div style={{marginBottom: 24}}>
                <label style={labelStyle}>Email</label>
                <input defaultValue="kickhead99@gmail.com" style={field}/>
            </div>
            <div style={{display: "flex", gap: 12}}>
                <button style={saveBtn} onClick={() => {
                    setSaved(true);
                }}>
                    {saved ? "✓ Saved" : "Save changes"}
                </button>
                <button
                    style={{...saveBtn, background: "transparent", color: MUTED, border: `1px solid ${BORDER}`}}>Cancel
                </button>
            </div>
        </div>
    );
}


export default ProfileTab;
