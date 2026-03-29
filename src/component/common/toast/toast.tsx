import { useState, useEffect } from "react";
import { setTimeout,clearTimeout } from "timers";
import { TYPE_STYLES } from "./utils";


const  Toast=({ msg, onDismiss, index }) =>{
    const [visible, setVisible] = useState(false);
    const [leaving, setLeaving] = useState(false);
    const style = TYPE_STYLES[msg.type];

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), index * 120);
        return () => clearTimeout(t);
    }, [index]);

    const dismiss = () => {
        setLeaving(true);
        setTimeout(() => onDismiss(msg.id), 320);
    };

    useEffect(() => {
        const t = setTimeout(dismiss, 6000 + index * 400);
        return () => clearTimeout(t);
    }, []);

    return (
        <div
            onClick={dismiss}
            style={{
                display: "flex",
                alignItems: "stretch",
                gap: 0,
                background: "rgba(18,18,22,0.96)",
                border: `1px solid ${style.accent}28`,
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: `0 4px 32px rgba(0,0,0,0.55), 0 0 0 1px ${style.accent}14`,
                cursor: "pointer",
                transform: visible && !leaving ? "translateX(0) scale(1)" : leaving ? "translateX(110%) scale(0.95)" : "translateX(110%) scale(0.95)",
                opacity: visible && !leaving ? 1 : 0,
                transition: "transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.32s ease",
                minWidth: 280,
                maxWidth: 340,
                position: "relative",
                userSelect: "none",
            }}
        >
            {/* Left accent bar */}
            <div style={{ width: 4, flexShrink: 0, background: style.bar }} />

            {/* Icon */}
            <div style={{
                width: 48, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, background: `${style.accent}0D`,
            }}>
                {msg.icon}
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: "10px 10px 10px 4px" }}>
                <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: style.accent,
                    lineHeight: 1,
                    marginBottom: 3,
                }}>
                    {msg.title}
                </div>
                <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.62)",
                    lineHeight: 1.4,
                }}>
                    {msg.detail}
                </div>
            </div>

            {/* Time */}
            <div style={{
                paddingRight: 10, display: "flex", alignItems: "flex-start", paddingTop: 10,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                color: "rgba(255,255,255,0.28)",
                whiteSpace: "nowrap",
            }}>
                {msg.time}
            </div>

            {/* Progress bar */}
            <div style={{
                position: "absolute", bottom: 0, left: 4, right: 0, height: 2,
                background: `${style.accent}22`,
                borderRadius: "0 0 10px 0",
                overflow: "hidden",
            }}>
                <div style={{
                    height: "100%",
                    width: "100%",
                    background: style.accent,
                    animation: `shrink ${6000 + index * 400}ms linear forwards`,
                    transformOrigin: "left",
                }} />
            </div>
        </div>
    );
}

export default Toast;
