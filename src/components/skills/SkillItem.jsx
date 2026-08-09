// src/components/skills/SkillItem.jsx
import React from "react";
import { SKILL_LEVELS } from "../../data/skills";
import DeviconIcon from "../shared/DeviconIcon";

export default function SkillItem({ skill, accentHex }) {
    const lvl = SKILL_LEVELS[skill.level] ?? SKILL_LEVELS["EN FORMACIÓN"];

    return (
        <li className="skill-item" style={{ "--accent": accentHex }}>
            <span className="skill-bar" />

            {skill.mono !== "</>" ? (
                <DeviconIcon name={skill.mono} className="skill-mono" />
            ) : (
                <span className="skill-mono" style={{ borderColor: accentHex + "33" }}>
                    {skill.mono}
                </span>
            )}

            <span className="skill-name">{skill.name}</span>

            <span   
                className="skill-badge"
                style={{ color: lvl.color, background: lvl.bg }}
            >
                {skill.level}
            </span>
        </li>
    );
}