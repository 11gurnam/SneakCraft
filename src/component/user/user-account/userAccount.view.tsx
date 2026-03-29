import React ,{ useState } from 'react';

const ACCENT = "#C8FF00";
const DARK = "#0A0A0A";
const SURFACE = "#111111";
const SURFACE2 = "#1A1A1A";
const BORDER = "#2A2A2A";
const MUTED = "#666666";
const WHITE = "#F5F5F0";

const tabs = [
    { id: "profile",  label: "Profile",         icon: ProfileIcon },
    { id: "orders",   label: "Orders",           icon: OrdersIcon },
    { id: "address",  label: "Address",          icon: AddressIcon },
    { id: "password", label: "Password",         icon: LockIcon },
    { id: "support",  label: "Support",          icon: SupportIcon },
    { id: "danger",   label: "Delete Account",   icon: TrashIcon },
];

function ProfileIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M2.5 13.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
    );
}
function OrdersIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M5 6h6M5 8.5h4M5 11h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
    );
}
function AddressIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.4"/>
            <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        </svg>
    );
}
function LockIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="3.5" y="7" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="8" cy="10.5" r="1" fill="currentColor"/>
        </svg>
    );
}
function SupportIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M8 9V8c1-0.5 1.5-1.5 1-2.5S7.5 4 6.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="8" cy="11" r="0.7" fill="currentColor"/>
        </svg>
    );
}
function TrashIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 5h10M6 5V3.5h4V5M5.5 5l.5 7.5h4L11 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function ChevronRight() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

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

function ProfileTab() {
    const [saved, setSaved] = useState(false);
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ position: "relative" }}>
                    <div style={{
                        width: 72, height: 72, borderRadius: "50%",
                        background: `linear-gradient(135deg, ${ACCENT}33, ${ACCENT}11)`,
                        border: `2px solid ${ACCENT}44`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800, fontSize: 26, color: ACCENT,
                    }}>KH</div>
                    <div style={{
                        position: "absolute", bottom: 0, right: 0,
                        width: 20, height: 20, borderRadius: "50%",
                        background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer",
                    }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 8.5l1.5-1.5 5-5L9 3.5 4 8.5H1z" stroke={DARK} strokeWidth="1.1" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: WHITE }}>KickHead_99</div>
                    <div style={{ fontSize: 13, color: MUTED, marginTop: 2 }}>kickhead99@gmail.com · Member since Jan 2024</div>
                    <div style={{ marginTop: 6, display: "inline-flex", alignItems: "center", gap: 5,
                        background: `${ACCENT}15`, border: `1px solid ${ACCENT}33`, borderRadius: 20,
                        padding: "3px 10px", fontSize: 11, fontWeight: 600, color: ACCENT,
                        fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em",
                    }}>⚡ SNEAK PRO</div>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[["First name","Kick"],["Last name","Head"]].map(([l,v]) => (
                    <div key={l}>
                        <label style={labelStyle}>{l}</label>
                        <input defaultValue={v} style={field} />
                    </div>
                ))}
            </div>
            <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Username</label>
                <input defaultValue="KickHead_99" style={field} />
            </div>
            <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Email</label>
                <input defaultValue="kickhead99@gmail.com" style={field} />
            </div>
            <div style={{ display: "flex", gap: 12 }}>
                <button style={saveBtn} onClick={() => { setSaved(true); }}>
                    {saved ? "✓ Saved" : "Save changes"}
                </button>
                <button style={{ ...saveBtn, background: "transparent", color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
            </div>
        </div>
    );
}

const orders = [
    { id: "#SNC-4821", date: "Mar 22, 2026", item: "Air Jordan 1 Retro High OG — Chicago", size: "US 10", price: "₹18,999", status: "Delivered", color: "#1D9E75" },
    { id: "#SNC-4756", date: "Mar 10, 2026", item: "Nike Dunk Low — Panda", size: "US 9.5", price: "₹9,499", status: "Shipped", color: "#378ADD" },
    { id: "#SNC-4690", date: "Feb 28, 2026", item: "Yeezy 350 V2 — Zebra", size: "US 10", price: "₹24,500", status: "Processing", color: "#BA7517" },
    { id: "#SNC-4500", date: "Jan 15, 2026", item: "New Balance 550 — White Green", size: "US 9", price: "₹8,200", status: "Delivered", color: "#1D9E75" },
];

function OrdersTab() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, color: MUTED, letterSpacing: "0.08em" }}>4 ORDERS</div>
                <select style={{ ...field, width: "auto", padding: "6px 12px", fontSize: 12, cursor: "pointer" }}>
                    <option>All time</option><option>Last 30 days</option><option>Last 3 months</option>
                </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                            <div style={{
                                width: 42, height: 42, borderRadius: 8,
                                background: SURFACE, border: `1px solid ${BORDER}`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2 14h16M2 14l3-7h8l2 3.5L18 14" stroke={MUTED} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: 13, fontWeight: 500, color: WHITE, marginBottom: 2 }}>{o.item}</div>
                                <div style={{ fontSize: 12, color: MUTED }}>{o.id} · {o.date} · Size {o.size}</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0, marginLeft: 16 }}>
                            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, color: WHITE }}>{o.price}</div>
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

function AddressTab() {
    const [saved, setSaved] = useState(false);
    return (
        <div>
            <div style={{ marginBottom: 20, display: "flex", gap: 10 }}>
                {["Home","Work"].map((t, i) => (
                    <div key={t} style={{
                        padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
                        background: i === 0 ? ACCENT : "transparent",
                        color: i === 0 ? DARK : MUTED,
                        border: i === 0 ? `1px solid ${ACCENT}` : `1px solid ${BORDER}`,
                        fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em",
                    }}>{t}</div>
                ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[["Full name","Kick Head"],["Phone","+91 98765 43210"]].map(([l,v]) => (
                    <div key={l}><label style={labelStyle}>{l}</label><input defaultValue={v} style={field} /></div>
                ))}
            </div>
            <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Address line 1</label>
                <input defaultValue="42, Sneaker Lane, MG Road" style={field} />
            </div>
            <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Address line 2</label>
                <input defaultValue="Near Sole Market" style={field} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["City","Jaipur"],["State","Rajasthan"],["PIN","302001"]].map(([l,v]) => (
                    <div key={l}><label style={labelStyle}>{l}</label><input defaultValue={v} style={field} /></div>
                ))}
            </div>
            <button style={saveBtn} onClick={() => { setSaved(true); }}>
                {saved ? "✓ Address saved" : "Save address"}
            </button>
        </div>
    );
}

function PasswordTab() {
    const [strength, setStrength] = useState(0);
    const checkStrength = (v) => {
        let s = 0;
        if (v.length >= 8) s++;
        if (/[A-Z]/.test(v)) s++;
        if (/[0-9]/.test(v)) s++;
        if (/[^A-Za-z0-9]/.test(v)) s++;
        setStrength(s);
    };
    const colors = ["#E24B4A","#BA7517","#BA7517",ACCENT];
    const labels = ["Weak","Fair","Good","Strong"];
    return (
        <div>
            <div style={{ marginBottom: 20, padding: "14px 16px", background: `${ACCENT}08`, border: `1px solid ${ACCENT}22`, borderRadius: 10 }}>
                <div style={{ fontSize: 12, color: ACCENT, fontWeight: 500 }}>Password tips: 8+ chars, uppercase, numbers & symbols for a strong password.</div>
            </div>
            <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Current password</label>
                <input type="password" defaultValue="••••••••" style={field} />
            </div>
            <div style={{ marginBottom: 8 }}>
                <label style={labelStyle}>New password</label>
                <input type="password" placeholder="Enter new password" style={field} onChange={e => checkStrength(e.target.value)} />
            </div>
            {strength > 0 && (
                <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        {[0,1,2,3].map(i => (
                            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i < strength ? colors[strength-1] : BORDER, transition: "background .2s" }} />
                        ))}
                    </div>
                    <div style={{ fontSize: 11, color: colors[strength-1], fontWeight: 600 }}>{labels[strength-1]}</div>
                </div>
            )}
            <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Confirm new password</label>
                <input type="password" placeholder="Re-enter password" style={field} />
            </div>
            <button style={saveBtn}>Update password</button>
        </div>
    );
}

const faqs = [
    { q: "Where is my order?", a: "Orders typically ship within 1-2 business days. Check the Orders tab for live tracking." },
    { q: "How do I return a sneaker?", a: "Returns are accepted within 7 days of delivery for unworn items. Contact support below." },
    { q: "Are all sneakers authentic?", a: "Yes — every pair on SneakCraft is 100% authenticated by our expert team before shipping." },
];

function SupportTab() {
    const [open, setOpen] = useState<any>(null);
    return (
        <div>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: MUTED, letterSpacing: "0.1em", marginBottom: 12 }}>FAQ</div>
                {faqs.map((f, i) => (
                    <div key={i} style={{ marginBottom: 8, border: `1px solid ${open===i ? ACCENT+"44" : BORDER}`, borderRadius: 10, overflow: "hidden", transition: "border-color .2s" }}>
                        <div onClick={() => setOpen(open===i?null:i)}
                             style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", cursor: "pointer" }}>
                            <div style={{ fontSize: 13, fontWeight: 500, color: WHITE }}>{f.q}</div>
                            <div style={{ color: MUTED, transform: open===i ? "rotate(90deg)" : "none", transition: "transform .2s", flexShrink: 0, marginLeft: 8 }}><ChevronRight /></div>
                        </div>
                        {open === i && <div style={{ padding: "0 16px 14px", fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{f.a}</div>}
                    </div>
                ))}
            </div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: MUTED, letterSpacing: "0.1em", marginBottom: 12 }}>CONTACT US</div>
            <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Subject</label>
                <input placeholder="What's the issue?" style={field} />
            </div>
            <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Message</label>
                <textarea placeholder="Describe your issue..." rows={4} style={{ ...field, resize: "vertical", lineHeight: 1.6 }} />
            </div>
            <div style={{ display: "flex", gap: 12 }}>
                <button style={saveBtn}>Send message</button>
                <button style={{ ...saveBtn, background: SURFACE2, color: WHITE, border: `1px solid ${BORDER}` }}>Live chat ↗</button>
            </div>
        </div>
    );
}

function DangerTab() {
    const [typed, setTyped] = useState("");
    const confirmed = typed === "DELETE";
    return (
        <div>
            <div style={{ padding: "16px", background: "#E24B4A12", border: "1px solid #E24B4A44", borderRadius: 10, marginBottom: 24 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, color: "#E24B4A", marginBottom: 6 }}>⚠ This action is permanent</div>
                <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>Deleting your account removes all your orders, addresses, and profile data. This cannot be undone. Your sneaker purchase history will be permanently erased.</div>
            </div>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: MUTED, letterSpacing: "0.1em", marginBottom: 14 }}>BEFORE YOU GO</div>
                {[
                    ["Export data", "Download your order history and profile data"],
                    ["Pause account", "Temporarily disable without losing data"],
                ].map(([title, desc]) => (
                    <div key={title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", background: SURFACE2, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 8, cursor: "pointer" }}
                         onMouseEnter={e => e.currentTarget.style.borderColor = ACCENT+"44"}
                         onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
                    >
                        <div>
                            <div style={{ fontSize: 13, fontWeight: 500, color: WHITE, marginBottom: 2 }}>{title}</div>
                            <div style={{ fontSize: 12, color: MUTED }}>{desc}</div>
                        </div>
                        <div style={{ color: MUTED, flexShrink: 0 }}><ChevronRight /></div>
                    </div>
                ))}
            </div>
            <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Type DELETE to confirm</label>
                <input placeholder='Type "DELETE"' style={{ ...field, borderColor: typed.length > 0 ? (confirmed ? "#1D9E75" : "#E24B4A66") : BORDER }} onChange={e => setTyped(e.target.value)} />
            </div>
            <button style={{
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

const TAB_CONTENT = {
    profile: ProfileTab,
    orders: OrdersTab,
    address: AddressTab,
    password: PasswordTab,
    support: SupportTab,
    danger: DangerTab,
};

export default function UserAccount() {
    const [active, setActive] = useState("profile");
    const Content = TAB_CONTENT[active];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:${DARK};color:${WHITE};font-family:'DM Sans',sans-serif}
        input,textarea,select{transition:border-color .15s}
        input:focus,textarea:focus,select:focus{border-color:${ACCENT}88!important;outline:none}
        input::placeholder,textarea::placeholder{color:${MUTED}}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:${DARK}}
        ::-webkit-scrollbar-thumb{background:${BORDER};border-radius:2px}
      `}</style>

            <div style={{ minHeight: "100vh", background: DARK, display: "flex", flexDirection: "column" }}>

                {/* Top bar */}
                <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, flexShrink: 0 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: "0.04em", color: WHITE }}>
                        SNEAK<span style={{ color: ACCENT }}>CRAFT</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 30, height: 30, borderRadius: "50%", background: `${ACCENT}20`, border: `1px solid ${ACCENT}44`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: ACCENT }}>KH</div>
                        <div style={{ fontSize: 13, color: MUTED }}>My Account</div>
                    </div>
                </div>

                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

                    {/* Sidebar */}
                    <div style={{ width: 220, flexShrink: 0, borderRight: `1px solid ${BORDER}`, padding: "24px 0", display: "flex", flexDirection: "column" }}>
                        <div style={{ padding: "0 20px", marginBottom: 8 }}>
                            <div style={{ fontSize: 11, fontWeight: 600, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>Account</div>
                        </div>
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            const isActive = active === tab.id;
                            const isDanger = tab.id === "danger";
                            return (
                                <div key={tab.id} onClick={() => setActive(tab.id)} style={{
                                    display: "flex", alignItems: "center", gap: 10,
                                    padding: "10px 20px", cursor: "pointer",
                                    color: isActive ? (isDanger ? "#E24B4A" : ACCENT) : isDanger ? "#E24B4A88" : MUTED,
                                    background: isActive ? (isDanger ? "#E24B4A10" : `${ACCENT}10`) : "transparent",
                                    borderRight: isActive ? `2px solid ${isDanger ? "#E24B4A" : ACCENT}` : "2px solid transparent",
                                    transition: "all .15s", fontSize: 13, fontWeight: isActive ? 500 : 400,
                                    marginTop: isDanger ? "auto" : 0,
                                }}>
                                    <Icon />
                                    {tab.label}
                                </div>
                            );
                        })}
                        <div style={{ marginTop: "auto" }} />
                    </div>

                    {/* Main */}
                    <div style={{ flex: 1, overflow: "auto", padding: "32px" }}>
                        <div style={{ maxWidth: 560 }}>
                            <div style={{ marginBottom: 24 }}>
                                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 26, color: WHITE, marginBottom: 4 }}>
                                    {tabs.find(t => t.id === active)?.label}
                                </div>
                                <div style={{ height: 2, width: 32, background: ACCENT, borderRadius: 1 }} />
                            </div>
                            <Content />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
