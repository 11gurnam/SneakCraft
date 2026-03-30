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

function SecurityTab() {
    const [strength, setStrength] = useState(0);
    const checkStrength = (v) => {
        let s = 0;
        if (v.length >= 8) s++;
        if (/[A-Z]/.test(v)) s++;
        if (/[0-9]/.test(v)) s++;
        if (/[^A-Za-z0-9]/.test(v)) s++;
        setStrength(s);
    };
    const colors = ["#E24B4A", "#BA7517", "#BA7517", ACCENT];
    const labels = ["Weak", "Fair", "Good", "Strong"];
    return (
        <div>
            <div style={{
                marginBottom: 20,
                padding: "14px 16px",
                background: `${ACCENT}08`,
                border: `1px solid ${ACCENT}22`,
                borderRadius: 10
            }}>
                <div style={{fontSize: 12, color: ACCENT, fontWeight: 500}}>Password tips: 8+ chars, uppercase, numbers
                    & symbols for a strong password.
                </div>
            </div>
            <div style={{marginBottom: 16}}>
                <label style={labelStyle}>Current password</label>
                <input type="password" defaultValue="••••••••" style={field}/>
            </div>
            <div style={{marginBottom: 8}}>
                <label style={labelStyle}>New password</label>
                <input type="password" placeholder="Enter new password" style={field}
                       onChange={e => checkStrength(e.target.value)}/>
            </div>
            {strength > 0 && (
                <div style={{marginBottom: 16}}>
                    <div style={{display: "flex", gap: 4, marginBottom: 4}}>
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} style={{
                                flex: 1,
                                height: 3,
                                borderRadius: 2,
                                background: i < strength ? colors[strength - 1] : BORDER,
                                transition: "background .2s"
                            }}/>
                        ))}
                    </div>
                    <div style={{
                        fontSize: 11,
                        color: colors[strength - 1],
                        fontWeight: 600
                    }}>{labels[strength - 1]}</div>
                </div>
            )}
            <div style={{marginBottom: 24}}>
                <label style={labelStyle}>Confirm new password</label>
                <input type="password" placeholder="Re-enter password" style={field}/>
            </div>
            <button style={saveBtn}>Update password</button>
        </div>
    );
}


export default SecurityTab;
