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

function ChevronRight() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
}

const faqs = [
    {
        q: "Where is my order?",
        a: "Orders typically ship within 1-2 business days. Check the Orders tab for live tracking."
    },
    {
        q: "How do I return a sneaker?",
        a: "Returns are accepted within 7 days of delivery for unworn items. Contact support below."
    },
    {
        q: "Are all sneakers authentic?",
        a: "Yes — every pair on SneakCraft is 100% authenticated by our expert team before shipping."
    },
];

function SupportTab() {
    const [open, setOpen] = useState<any>(null);
    return (
        <div>
            <div style={{marginBottom: 24}}>
                <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: MUTED,
                    letterSpacing: "0.1em",
                    marginBottom: 12
                }}>FAQ
                </div>
                {faqs.map((f, i) => (
                    <div key={i} style={{
                        marginBottom: 8,
                        border: `1px solid ${open === i ? ACCENT + "44" : BORDER}`,
                        borderRadius: 10,
                        overflow: "hidden",
                        transition: "border-color .2s"
                    }}>
                        <div onClick={() => setOpen(open === i ? null : i)}
                             style={{
                                 display: "flex",
                                 justifyContent: "space-between",
                                 alignItems: "center",
                                 padding: "13px 16px",
                                 cursor: "pointer"
                             }}>
                            <div style={{fontSize: 13, fontWeight: 500, color: WHITE}}>{f.q}</div>
                            <div style={{
                                color: MUTED,
                                transform: open === i ? "rotate(90deg)" : "none",
                                transition: "transform .2s",
                                flexShrink: 0,
                                marginLeft: 8
                            }}><ChevronRight/></div>
                        </div>
                        {open === i &&
                        <div style={{padding: "0 16px 14px", fontSize: 13, color: MUTED, lineHeight: 1.6}}>{f.a}</div>}
                    </div>
                ))}
            </div>
            <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: MUTED,
                letterSpacing: "0.1em",
                marginBottom: 12
            }}>CONTACT US
            </div>
            <div style={{marginBottom: 16}}>
                <label style={labelStyle}>Subject</label>
                <input placeholder="What's the issue?" style={field}/>
            </div>
            <div style={{marginBottom: 20}}>
                <label style={labelStyle}>Message</label>
                <textarea placeholder="Describe your issue..." rows={4}
                          style={{...field, resize: "vertical", lineHeight: 1.6}}/>
            </div>
            <div style={{display: "flex", gap: 12}}>
                <button style={saveBtn}>Send message</button>
                <button style={{...saveBtn, background: SURFACE2, color: WHITE, border: `1px solid ${BORDER}`}}>Live
                    chat ↗
                </button>
            </div>
        </div>
    );
}

export default SupportTab;
