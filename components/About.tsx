import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

export function About() {
  return (
    <section id="about" className="max-w-[980px] px-6 py-16 md:px-12">
      <Reveal className="mb-1.5 flex items-center gap-2 font-mono text-xs text-text-dim">
        <span className="text-purple">const</span> section = &quot;about&quot;
      </Reveal>
      <Reveal delay={0.08} className="mb-7 font-mono text-[clamp(24px,3vw,32px)] font-bold text-text">
        <span className="text-purple">function</span> <span className="text-amber">About</span>()
      </Reveal>

      <StaggerGroup className="rounded-[10px] border border-border bg-surface px-7 py-6 font-sans text-[15px] text-text-dim">
        <StaggerItem className="mb-3">
          I&apos;m <strong className="text-text">Ashish Kumar</strong>, a second-year Information
          Technology student who likes taking things apart to see how they work — code included.
          Most days you&apos;ll find me solving DSA problems, picking up a new web dev concept, or
          working through a Forage job simulation to understand how real engineering teams operate.
        </StaggerItem>
        <StaggerItem className="mb-3">
          I&apos;m early in the journey, but deliberate about it: strong fundamentals in{" "}
          <strong className="text-text">C / C++</strong>, comfortable across{" "}
          <strong className="text-text">HTML, CSS and JavaScript</strong>, and steadily building a
          habit of shipping small, complete projects rather than half-finished ones.
        </StaggerItem>
        <StaggerItem className="mt-4 flex flex-col gap-1 border-t border-dashed border-border pt-4 font-mono text-[13px]">
          <span className="font-sans text-[14.5px] font-semibold text-sky">
            Bachelor of Technology (B.Tech) — Information Technology
          </span>
          <span>Rajkiya Engineering College, Bijnor (AKTU) &middot; 2025 – 2029</span>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
