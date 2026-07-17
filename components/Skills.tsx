import { SKILLS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { SkillBar } from "@/components/ui/SkillBar";

const GROUPS: { key: keyof typeof SKILLS; label: string }[] = [
  { key: "languages", label: '"languages"' },
  { key: "web", label: '"web"' },
  { key: "tools", label: '"tools"' },
  { key: "core", label: '"core"' },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-[980px] px-6 py-16 md:px-12">
      <Reveal className="mb-1.5 flex items-center gap-2 font-mono text-xs text-text-dim">
        <span className="text-purple">const</span> section = &quot;skills&quot;
      </Reveal>
      <Reveal delay={0.08} className="mb-7 font-mono text-[clamp(24px,3vw,32px)] font-bold text-text">
        skills<span className="text-amber">.json</span>
      </Reveal>

      <StaggerGroup
        stagger={0.12}
        className="rounded-[10px] border border-border bg-surface px-7 py-6 font-mono"
      >
        <StaggerItem className="text-text-dim">{"{"}</StaggerItem>
        {GROUPS.map((group, i) => (
          <StaggerItem key={group.key} className={i > 0 ? "mt-4" : "mt-2"}>
            <div className="mb-2 pl-5 text-sky">
              {group.label}
              <span className="text-text-dim">:</span>
            </div>
            <div className="pl-5">
              {SKILLS[group.key].map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </StaggerItem>
        ))}
        <StaggerItem className="mt-2 text-text-dim">{"}"}</StaggerItem>
      </StaggerGroup>
    </section>
  );
}
