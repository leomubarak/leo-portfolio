import { cn } from '@/lib/cn';
import { MAX_SKILL_STEPS, skillLevelMeta } from '@/data/skills';
import type { SkillLevel } from '@/types';

export function SkillLevelMeter({ level, className }: { level: SkillLevel; className?: string }) {
  const filled = skillLevelMeta[level].order;
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="flex gap-1" aria-hidden="true">
        {Array.from({ length: MAX_SKILL_STEPS }, (_, index) => (
          <span
            key={index}
            className={cn('h-1.5 w-4 rounded-full transition-colors duration-300', index < filled ? 'bg-accent' : 'bg-line-strong')}
          />
        ))}
      </span>
      <span className="font-mono text-[11px] tracking-wide text-content-subtle">{level}</span>
    </span>
  );
}
