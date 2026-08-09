// src/components/skills/SkillCard.jsx
import React, { useRef, useState } from "react";
import * as Icons from "lucide-react";
import { ACCENTS } from "../../data/skills";
import SkillItem from "./SkillItem";

export default function SkillCard({ category }) {
    const ref = useRef(null);
    const [hovering, setHovering] = useState(false);
    const accentHex = ACCENTS[category.accent];

    // category.icon guarda el nombre del icono como string (ej. "Code2")
    // así los datos en src/data/skills.js no importan React directamente.
    const Icon = Icons[category.icon] ?? Icons.Code2;

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={ref}
            className="skill-card"
            style={{ "--accent": accentHex }}
            onMouseMove={handleMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <span className="card-spotlight" style={{ opacity: hovering ? 1 : 0 }} />
            <span className="card-border-glow" />

            <div className="card-header">
                <span className="card-icon" style={{ color: accentHex }}>
                    <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="card-title">{category.title}</h3>
            </div>

            <ul className="skill-list">
                {category.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} accentHex={accentHex} />
                ))}
            </ul>
        </div>
    );
}