import DeviconIcon from '../shared/DeviconIcon.jsx';
import Badge from '../ui/Badge.jsx';
import { SKILL_LEVELS } from '../../data/skills.js';

export default function SkillBadge({ skill }) {
  const levelMeta = SKILL_LEVELS[skill.level];

  return (
    <li className="flex items-center gap-3 rounded-md border border-transparent px-2 py-2 transition-colors duration-300 hover:border-border dark:hover:border-border">
      {skill.devicon ? (
        <DeviconIcon name={skill.devicon} />
      ) : (
        <span
          className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-light-2 dark:bg-surface-2 font-mono text-xs text-ink-light-dim dark:text-ink-dim"
          aria-hidden="true"
        >
          {'</>'}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-ink-light dark:text-ink">{skill.name}</p>
        <Badge colorClass={levelMeta.colorClass} className="mt-1">
          {levelMeta.label}
        </Badge>
      </div>
    </li>
  );
}
