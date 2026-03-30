import React from 'react';
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../api/auth";

const ACCENT = "#C8FF00";
const DARK = "#0A0A0A";
const WHITE = "#F5F5F0";

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


function LogoutButton() {

    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
        navigate('/')
    }

    return (
        <button style={{
            ...saveBtn,
            background: "#E24B4A",
            color: WHITE,
            border: `1px solid  "#E24B4A"`,
            cursor: "pointer",
            transition: "all .2s",
        }}
                onClick={handleLogout}
        >
            <LogOut/>
            Logout
        </button>
    );
}

export default LogoutButton;
