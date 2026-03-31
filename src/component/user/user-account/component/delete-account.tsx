import React, { useState } from "react";
import { deleteAccount } from "../../../../api/auth";
import { ChevronRight } from "lucide-react";


const ACCENT = "#C8FF00";
const DARK = "#0A0A0A";
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


function DangerTab() {
    const [typed, setTyped] = useState("");
    const confirmed = typed.length>4;

    async function handleAccountDelete() {
        console.log('account deleted')
        await deleteAccount(typed);
    }


    return (
        <div>
            <div style={{
                padding: "16px",
                background: "#E24B4A12",
                border: "1px solid #E24B4A44",
                borderRadius: 10,
                marginBottom: 24
            }}>
                <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#E24B4A",
                    marginBottom: 6
                }}>⚠ This action is permanent
                </div>
                <div style={{fontSize: 13, color: MUTED, lineHeight: 1.6}}>Deleting your account removes all your
                    orders, addresses, and profile data. This cannot be undone. Your sneaker purchase history will be
                    permanently erased.
                </div>
            </div>
            <div style={{marginBottom: 24}}>
                <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: MUTED,
                    letterSpacing: "0.1em",
                    marginBottom: 14
                }}>BEFORE YOU GO
                </div>
                {[
                    ["Export data", "Download your order history and profile data"],
                    ["Pause account", "Temporarily disable without losing data"],
                ].map(([title, desc]) => (
                    <div key={title} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "13px 16px",
                        background: SURFACE2,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 10,
                        marginBottom: 8,
                        cursor: "pointer"
                    }}
                         onMouseEnter={e => e.currentTarget.style.borderColor = ACCENT + "44"}
                         onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
                    >
                        <div>
                            <div style={{fontSize: 13, fontWeight: 500, color: WHITE, marginBottom: 2}}>{title}</div>
                            <div style={{fontSize: 12, color: MUTED}}>{desc}</div>
                        </div>
                        <div style={{color: MUTED, flexShrink: 0}}><ChevronRight/></div>
                    </div>
                ))}
            </div>
            <div style={{marginBottom: 16}}>
                <label style={labelStyle}>Type Password to confirm</label>
                <input
                    placeholder='Type password'
                       style={{
                    ...field,
                    borderColor: typed.length > 0 ? (confirmed ? "#1D9E75" : "#E24B4A66") : BORDER
                }}
                    onChange={e => setTyped(e.target.value)}
                />
            </div>
            <button
                onClick={handleAccountDelete}
                style={{
                    ...saveBtn,
                    background: confirmed ? "#E24B4A" : SURFACE2,
                    color: confirmed ? WHITE : MUTED,
                    border: `1px solid ${confirmed ? "#E24B4A" : BORDER}`,
                    cursor: confirmed ? "pointer" : "not-allowed",
                    transition: "all .2s",
                }} disabled={!confirmed}>
                {confirmed ? "Permanently delete account" : "Delete account"}
            </button>
        </div>
    );
}

export default DangerTab;
