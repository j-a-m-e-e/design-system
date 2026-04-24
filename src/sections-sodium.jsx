import React from 'react';
import { Icon, Example, Section, Sub, Button, Badge, Avatar, AvatarGroup, Progress } from './primitives.jsx';

function CourseItemSection() {
  return (
    <Section id="course-item" kicker="Sodium specifics" title="Course item"
      lead="The canonical learning-unit card. Cover slot (gradient or image), badge, title, meta, progress, footer. Replaces Course-Item, Course-Item2, Course-Item-Variant2.">
      <Sub title="Grid layout (Explore / Dashboard)">
        <div className="grid-3">
          {[
            { title:"UX Research Fundamentals", lvl:"Beginner", len:"4h 20m", prog:72, owners: ["JM","AR"], cover: "" },
            { title:"Accessibility Deep Dive",  lvl:"Intermediate", len:"6h 10m", prog:38, owners:["SK"], cover:"violet" },
            { title:"Design Critique Playbook", lvl:"Advanced", len:"2h 45m", prog:100, owners:["LT","DP"], cover:"green" },
          ].map((c,i)=>(
            <div className="sl-course" key={i}>
              <div className={`sl-course-cover ${c.cover ? "sl-course-cover--"+c.cover : ""}`}>
                <Badge variant="brand">{c.lvl}</Badge>
              </div>
              <div className="sl-course-body">
                <div className="sl-course-meta">
                  <span><Icon.Clock size={12}/> {c.len}</span>
                  <span className="dot"/>
                  <span>8 chapters</span>
                </div>
                <h4 className="sl-course-title">{c.title}</h4>
                <Progress value={c.prog} size="sm" variant={c.prog===100?"success":undefined}/>
                <div className="sl-course-foot">
                  <AvatarGroup size="xs" items={c.owners.map(i=>({initials:i}))}/>
                  <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>{c.prog===100?"Completed":`${c.prog}% complete`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Sub>

      <Sub title="List layout (Library)">
        <div className="col">
          {[
            { title:"Intro to Systems Thinking", lvl:"Beginner", len:"3h 10m", prog:12 },
            { title:"Product Storytelling",      lvl:"Intermediate", len:"5h 30m", prog:88 },
            { title:"Writing Research Briefs",   lvl:"Beginner", len:"1h 45m", prog:0 },
          ].map((c,i) => (
            <div key={i} style={{ display:"flex", gap: 14, alignItems:"center", padding: 14, border:"1px solid var(--border)", borderRadius:"var(--r-lg)", background:"var(--surface)" }}>
              <div style={{ width: 64, height: 64, borderRadius:"var(--r-md)", background:"linear-gradient(135deg,var(--brand-300),var(--brand-700))", flexShrink: 0 }}/>
              <div style={{ flex: 1 }}>
                <div style={{ display:"flex", gap: 8, alignItems:"center" }}>
                  <Badge variant="outline">{c.lvl}</Badge>
                  <span style={{ color:"var(--fg-muted)", fontSize:12 }}><Icon.Clock size={11}/> {c.len}</span>
                </div>
                <div style={{ fontFamily:"var(--font-display)", fontWeight: 600, fontSize: "var(--text-lg)", margin: "4px 0 6px" }}>{c.title}</div>
                <Progress value={c.prog} size="sm"/>
              </div>
              <Button variant="outline" iconRight={<Icon.ArrowRight size={14}/>}>{c.prog === 0 ? "Start" : "Resume"}</Button>
            </div>
          ))}
        </div>
      </Sub>
    </Section>
  );
}

function ContentCardSection() {
  return (
    <Section id="content-card" kicker="Sodium specifics" title="Content card (Explore)"
      lead="Featured content on Explore home. Thumbnail + title + meta + CTA.">
      <div className="grid-2">
        {[
          { title:"The anatomy of a good course", who:"Sodium Editorial", type:"Article", when:"6 min read" },
          { title:"How cohorts change retention", who:"Jamee M.", type:"Guide", when:"12 min read" },
        ].map((c,i)=>(
          <div className="sl-content-card" key={i}>
            <div className="sl-content-card-thumb"/>
            <div style={{ flex: 1 }}>
              <div className="sl-content-card-meta">
                <Badge variant="brand">{c.type}</Badge>
                <span>•</span>
                <span>{c.when}</span>
              </div>
              <div className="sl-content-card-title">{c.title}</div>
              <div style={{ display:"flex", alignItems:"center", gap:8, fontSize:12, color:"var(--fg-muted)" }}>
                <Avatar size="xs" initials={c.who.split(" ").map(x=>x[0]).slice(0,2).join("")}/>
                {c.who}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function StickyNoteSection() {
  return (
    <Section id="sticky" kicker="Sodium specifics" title="Annotation / sticky note"
      lead="Learner and author notes anchored to content. Paper-like, four color themes; never uses Grape Nuts — Inter only.">
      <Example pad="sm" plain>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div className="sl-sticky">
            <div className="sl-sticky-head"><Avatar size="xs" initials="JM"/> Jamee · 2:14</div>
            Great framing here — worth adding a link to the research brief template.
          </div>
          <div className="sl-sticky sl-sticky--pink">
            <div className="sl-sticky-head"><Avatar size="xs" initials="AR"/> Aarav · 3:02</div>
            Is this step still relevant after the API migration?
          </div>
          <div className="sl-sticky sl-sticky--mint">
            <div className="sl-sticky-head"><Avatar size="xs" initials="SK"/> Sana · 4:55</div>
            Nailed it. Let's pull this into the onboarding pack.
          </div>
          <div className="sl-sticky sl-sticky--blue">
            <div className="sl-sticky-head"><Avatar size="xs" initials="LT"/> Liam · 5:31</div>
            I'd soften this — feels a bit prescriptive for beginners.
          </div>
        </div>
      </Example>
    </Section>
  );
}

function QuizSection() {
  return (
    <Section id="quiz" kicker="Sodium specifics" title="Quiz components"
      lead="Single-select quiz option in all states — default, selected, correct, incorrect. Used across Authoring preview and Learner attempts.">
      <Example stack>
        <div className="sl-quiz-opt"><span className="sl-quiz-letter">A</span><span className="sl-quiz-label">Gather insight from real learners before shipping.</span></div>
        <div className="sl-quiz-opt" data-state="selected"><span className="sl-quiz-letter">B</span><span className="sl-quiz-label">Ship fast, measure engagement afterward.</span><span className="sl-quiz-ico"><Icon.Check size={16}/></span></div>
        <div className="sl-quiz-opt" data-state="correct"><span className="sl-quiz-letter">C</span><span className="sl-quiz-label">Both qualitative and quantitative signal matter.</span><span className="sl-quiz-ico"><Icon.CheckCircle size={16}/></span></div>
        <div className="sl-quiz-opt" data-state="incorrect"><span className="sl-quiz-letter">D</span><span className="sl-quiz-label">Retention is the only meaningful metric.</span><span className="sl-quiz-ico"><Icon.XCircle size={16}/></span></div>
      </Example>

      <Sub title="Quiz result card" desc="End-of-attempt summary shown to learner.">
        <Example plain>
          <div style={{ width: "100%", display: "flex", gap: 24, padding: 24, border: "1px solid var(--border)", borderRadius: "var(--r-lg)", background: "var(--surface)", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--success-subtle)", color: "var(--success)", display:"grid", placeItems: "center" }}>
              <Icon.Award size={40}/>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ color: "var(--fg-muted)", fontSize: 13 }}>UX Research Fundamentals · Chapter 3 quiz</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 600, margin: "2px 0" }}>Great work — 82%</div>
              <div style={{ color: "var(--fg-muted)" }}>9 of 11 answered correctly in 4m 12s.</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline">Review answers</Button>
              <Button variant="brand">Next chapter</Button>
            </div>
          </div>
        </Example>
      </Sub>
    </Section>
  );
}

function AuthoringSection() {
  return (
    <Section id="authoring" kicker="Sodium specifics" title="Authoring tool pieces"
      lead="The left-rail block inserter, the right-rail properties panel, and the block toolbar.">
      <Example pad="sm" plain>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 260px", gap: 0, border: "1px solid var(--border)", borderRadius: "var(--r-lg)", overflow: "hidden", minHeight: 380, background: "var(--surface)" }}>
          <aside style={{ borderRight: "1px solid var(--border)", padding: 12, background: "var(--bg-subtle)" }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", color: "var(--fg-subtle)", fontWeight: 600, letterSpacing: ".06em", padding: "4px 6px" }}>Blocks</div>
            {["Heading","Paragraph","Image","Video","Quiz","Code","Callout","Embed"].map((b,i) => (
              <div key={b} className="sl-menu-item" style={{ padding: "8px 8px" }}>
                {[Icon.FileText, Icon.FileText, Icon.Layers, Icon.Play, Icon.Target, Icon.Command, Icon.Info, Icon.Globe][i]({size:14})}
                {b}
              </div>
            ))}
          </aside>
          <div style={{ padding: 24, position: "relative" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 8 }}>Chapter 3 · Interviewing techniques</div>
            <div style={{ color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: 20 }}>Most interviews fail before they begin — poor recruitment, vague goals, leading questions. In this chapter we walk through the three habits of researchers who consistently learn something new.</div>
            <div style={{ border: "1.5px dashed var(--accent)", borderRadius: "var(--r-md)", padding: 14, position: "relative", background: "var(--accent-subtle)", marginBottom: 12 }}>
              <div style={{ position: "absolute", top: -12, left: 10, background: "var(--accent)", color: "#fff", fontSize: 11, padding: "2px 8px", borderRadius: "var(--r-sm)", fontWeight: 500 }}>Selected · Paragraph</div>
              <div>Start with a warm-up question. The first two minutes set the whole interview's candor level — don't waste them.</div>
              <div style={{ position: "absolute", top: -14, right: 10, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-sm)", boxShadow: "var(--shadow-md)", display: "flex", padding: 2, gap: 2 }}>
                {[Icon.Edit, Icon.Layers, Icon.MessageSquare, Icon.Trash].map((I,i) => <Button key={i} variant="ghost" size="sm" icon={<I size={14}/>}/>)}
              </div>
            </div>
            <div style={{ color: "var(--fg-subtle)", fontSize: 13 }}>+ Add block</div>
          </div>
          <aside style={{ borderLeft: "1px solid var(--border)", padding: 16, background: "var(--bg-subtle)" }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", color: "var(--fg-subtle)", fontWeight: 600, letterSpacing: ".06em", marginBottom: 10 }}>Paragraph</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }}>
              <div>
                <div style={{ color: "var(--fg-muted)", fontSize: 11, marginBottom: 4 }}>Alignment</div>
                <div style={{ display: "flex", gap: 4 }}>
                  {["L","C","R","J"].map(k => <Button key={k} variant={k==="L"?"secondary":"ghost"} size="sm">{k}</Button>)}
                </div>
              </div>
              <div>
                <div style={{ color: "var(--fg-muted)", fontSize: 11, marginBottom: 4 }}>Style</div>
                <div style={{ display: "flex", gap: 4 }}>
                  {[<b>B</b>,<i>I</i>,<u>U</u>,<code>{"</>"}</code>].map((k,i) => <Button key={i} variant="ghost" size="sm">{k}</Button>)}
                </div>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 10, color: "var(--fg-muted)", fontSize: 12 }}>Last edited 2 min ago · Jamee M.</div>
            </div>
          </aside>
        </div>
      </Example>
    </Section>
  );
}

export { CourseItemSection, ContentCardSection, StickyNoteSection, QuizSection, AuthoringSection };