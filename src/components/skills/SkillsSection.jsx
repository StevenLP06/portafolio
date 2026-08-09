import { SKILL_CATEGORIES } from '../../data/skills.js';
// import SkillGroup from './SkillGroup.jsx';
import SkillCard from './SkillCard.jsx';
import './skills.css';

export default function SkillsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="font-mono text-sm text-cyan">/habilidades</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-light dark:text-ink sm:text-4xl">
        Habilidades
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>
    </div>
  );
}
