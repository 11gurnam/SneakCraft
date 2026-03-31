import React, { useState } from 'react';
import ProfileTab from "./component/profile-tab";
import OrderDetailTab from "./component/order-detail-tab";
import AddressTab from "./component/address-tab";
import SecurityTab from "./component/security-tab";
import SupportTab from "./component/support-tab";
import DangerTab from "./component/delete-account";
import { CircleUser, Info, KeyRound, LogIn, LogOut, MapPinHouse, ScrollText, Trash2 } from "lucide-react";
import LogoutButton from "./component/logout-button";
import { IUserAccountView } from "./types/user-account.types";

const ACCENT = "#C8FF00";
const DARK = "#0A0A0A";
const SURFACE = "#111111";
const SURFACE2 = "#1A1A1A";
const BORDER = "#2A2A2A";
const MUTED = "#666666";
const WHITE = "#F5F5F0";

const tabs = [
    {id: "profile", label: "Profile", icon: <CircleUser />},
    {id: "orders", label: "Orders", icon: <ScrollText />},
    {id: "address", label: "Address", icon: <MapPinHouse />},
    {id: "password", label: "Password", icon: <KeyRound />},
    {id: "support", label: "Support", icon: <Info />},
    {id: "danger", label: "Delete Account", icon: <Trash2 />},
    {id: 'logout', label: 'Log Out', icon: <LogOut/>}
];

const TAB_CONTENT = {
    profile: ProfileTab,
    orders: OrderDetailTab,
    address: AddressTab,
    password: SecurityTab,
    support: SupportTab,
    danger: DangerTab,
    logout: LogoutButton
};

const  UserAccountView:React.FC<IUserAccountView>=(props) =>{
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

            <div style={{minHeight: "100vh", background: DARK, display: "flex", flexDirection: "column"}}>

                {/* Top bar */}
                <div style={{
                    borderBottom: `1px solid ${BORDER}`,
                    padding: "0 32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 56,
                    flexShrink: 0
                }}>
                    <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: 20,
                        letterSpacing: "0.04em",
                        color: WHITE
                    }}>
                        SNEAK<span style={{color: ACCENT}}>CRAFT</span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: 8}}>
                        <div style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background: `${ACCENT}20`,
                            border: `1px solid ${ACCENT}44`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: 12,
                            color: ACCENT
                        }}>KH
                        </div>
                        <div style={{fontSize: 13, color: MUTED}}>My Account</div>
                    </div>
                </div>

                <div style={{display: "flex", flex: 1, overflow: "hidden"}}>

                    {/* Sidebar */}
                    <div style={{
                        width: 220,
                        flexShrink: 0,
                        borderRight: `1px solid ${BORDER}`,
                        padding: "24px 0",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div style={{padding: "0 20px", marginBottom: 8}}>
                            <div style={{
                                fontSize: 11,
                                fontWeight: 600,
                                color: MUTED,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontFamily: "'Barlow Condensed', sans-serif"
                            }}>Account
                            </div>
                        </div>
                        {tabs.map(tab => {
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
                                    {tab.icon}
                                    {tab.label}
                                </div>
                            );
                        })}
                        <div style={{marginTop: "auto"}}/>
                    </div>

                    {/* Main */}
                    <div style={{flex: 1, overflow: "auto", padding: "32px"}}>
                        <div style={{maxWidth: 560}}>
                            <div style={{marginBottom: 24}}>
                                <div style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontWeight: 800,
                                    fontSize: 26,
                                    color: WHITE,
                                    marginBottom: 4
                                }}>
                                    {tabs.find(t => t.id === active)?.label}
                                </div>
                                <div style={{height: 2, width: 32, background: ACCENT, borderRadius: 1}}/>
                            </div>
                            <Content/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserAccountView;
