import SkillBadge from './SkillBadge.jsx';

export default function SkillGroup({ group }) {
  return (
    <article className="hover-glow rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface p-5">
      <h3 className="font-display text-lg font-semibold text-ink-light dark:text-ink">
        {group.title}
      </h3>
      <ul className="mt-4 space-y-1">
        {group.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </ul>
    </article>
  );
}
