import React from 'react';
import { Icon } from './icons.jsx';
import { cn, Section, Sub, Example, Badge, Button, Kbd } from './primitives.jsx';

const { useState: fState, useMemo: fMemo } = React;

/* --- Intro --- */
function IntroSection() {
  return (
    <Section id="intro" kicker="Sodium Learn · v3.0"
      title="A calmer, more consistent design system."
      lead="Version 3.0 consolidates our existing Sodium Learn 2.0 tokens with shadcn-style architecture — one button system, one color ramp per role, one type scale, light + dark first-class, and a tweakable theme. Built for our learning platform: courses, quizzes, authoring, annotation.">
      <div className="grid-3" style={{ marginTop: 24 }}>
        <div className="sl-card">
          <div style={{ display:"inline-flex", width:36, height:36, borderRadius:8, background:"var(--accent-subtle)", color:"var(--accent)", alignItems:"center", justifyContent:"center", marginBottom:12 }}>
            <Icon.Layers size={18}/>
          </div>
          <h4 className="sl-card-title">Token-first</h4>
          <p className="sl-card-desc">Every component reads from CSS custom properties. Change one token, everything follows.</p>
        </div>
        <div className="sl-card">
          <div style={{ display:"inline-flex", width:36, height:36, borderRadius:8, background:"var(--accent-subtle)", color:"var(--accent)", alignItems:"center", justifyContent:"center", marginBottom:12 }}>
            <Icon.Moon size={18}/>
          </div>
          <h4 className="sl-card-title">Dark mode native</h4>
          <p className="sl-card-desc">Both themes are designed, not inverted. Toggle in the top bar.</p>
        </div>
        <div className="sl-card">
          <div style={{ display:"inline-flex", width:36, height:36, borderRadius:8, background:"var(--accent-subtle)", color:"var(--accent)", alignItems:"center", justifyContent:"center", marginBottom:12 }}>
            <Icon.Sparkles size={18}/>
          </div>
          <h4 className="sl-card-title">Tweakable</h4>
          <p className="sl-card-desc">Primary color, radius, density, font — tune live from the panel (bottom-right).</p>
        </div>
      </div>

      <div className="sub">
        <h3 className="sub-title">What changed from 2.0</h3>
        <ul style={{ color: "var(--fg-muted)", fontSize: "var(--text-md)", lineHeight: 1.8, paddingLeft: 20 }}>
          <li>One button system — 6 variants × 3 sizes × icon/pill modifiers (was ~60 combos).</li>
          <li>Single canonical Course Item; Course-Item-Variant2 and Course-Item2 merged as <code>density</code> and <code>layout</code> props.</li>
          <li>Tab-Nav unified — underline + pills are now variants of one component.</li>
          <li>Typography: Inter primary for UI, Geist reserved for display. Noto Sans / Poppins / Grape Nuts removed.</li>
          <li>Icon library: Lucide replaces Vuesax/Iconsax (cleaner strokes, better coverage, matches shadcn).</li>
          <li>New primitives: Command palette, Tooltip, Skeleton, Slider, File upload, Date range picker.</li>
        </ul>
      </div>
    </Section>
  );
}

/* --- Colors --- */
const COLOR_SCALES = [
  { name: "gray",    label: "Gray (neutral)", hex: ["#fcfcfd","#f8f9fc","#f3f4f8","#e5e7ee","#cdd1dc","#9ea3b3","#6e7487","#515668","#3a3e4d","#242734","#14161f"] },
  { name: "brand",   label: "Brand (Sodium Blue)", hex: ["#f1f6fe","#e3ecfb","#c0d9f7","#88bbf1","#4898e8","#217bd6","#1465c2","#014da1","#0a3b7d","#012b59","#001a36"] },
  { name: "success", label: "Success (Green)",  hex: ["#eefbf4","#dff8ea","#b2eecc","#84e4ae","#56d990","#2dca72","#26a95f","#1e874c","#165f37","#0f4527","#082913"] },
  { name: "warning", label: "Warning (Amber)",  hex: ["#fffbed","#fff7d4","#ffeba8","#ffda71","#ffbf38","#fda712","#f79009","#c56a09","#974e0b","#7e4510","#4a2907"] },
  { name: "danger",  label: "Danger (Red)",     hex: ["#fef3f2","#fee4e2","#ffcdc9","#fdaaa4","#f97970","#f04438","#de3024","#bb241a","#8b1911","#5a0f0a","#2e0705"] },
  { name: "info",    label: "Info (Blue)",      hex: ["#eef5ff","#d9e8ff","#bcd8ff","#8ec0ff","#599cff","#2970ff","#1b55f5","#1440e1","#0d2fb0","#19318f","#0a1f5c"] },
  { name: "violet",  label: "Violet (Accent)",  hex: ["#f6f4fe","#eeebfc","#e0d9fb","#c9baf8","#ad93f2","#9e77ed","#8347e0","#7435cc","#5e27ab","#51268c","#2f1563"] },
];
const STEPS = [25,50,100,200,300,400,500,600,700,800,900];

function ColorSection() {
  return (
    <Section id="colors" kicker="Foundations" title="Colors"
      lead="Seven scales (gray + brand + five semantic). 11 steps per scale — enough for surfaces, borders, text, fills, and on-dark tints. Brand Sodium Blue (#217BD6) is preserved.">
      <Sub title="Scales" desc="Each row is one semantic scale from lightest (25) to darkest (900).">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="swatch-scale" style={{ color: "var(--fg-subtle)", fontSize: 10, fontFamily: "var(--font-mono)" }}>
            <span></span>
            {STEPS.map(s => <span key={s} style={{ textAlign: "center" }}>{s}</span>)}
          </div>
          {COLOR_SCALES.map(sc => (
            <div key={sc.name} className="swatch-scale">
              <span className="swatch-scale-name">{sc.label}</span>
              {sc.hex.map((h, i) => (
                <div key={i} className={cn("swatch", i >= 5 && "dark")}
                     style={{ background: h }}
                     title={`${sc.name}-${STEPS[i]} · ${h.toUpperCase()}`}>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Sub>

      <Sub title="Semantic tokens" desc="Components consume semantic tokens, not raw scale values. Tokens resolve differently in light/dark.">
        <div className="grid-2">
          <div className="sl-card">
            <h4 className="h4">Background</h4>
            <SemanticRow tok="--bg" note="Page" />
            <SemanticRow tok="--bg-subtle" note="Sections, table head" />
            <SemanticRow tok="--bg-muted" note="Hover, secondary surface" />
            <SemanticRow tok="--surface" note="Cards, dialogs, inputs" />
            <SemanticRow tok="--overlay" note="Modal scrim" />
          </div>
          <div className="sl-card">
            <h4 className="h4">Foreground</h4>
            <SemanticRow tok="--fg" note="Primary text" />
            <SemanticRow tok="--fg-muted" note="Body, descriptions" />
            <SemanticRow tok="--fg-subtle" note="Labels, captions" />
            <SemanticRow tok="--fg-placeholder" note="Input placeholders" />
            <SemanticRow tok="--fg-disabled" note="Disabled text" />
          </div>
          <div className="sl-card">
            <h4 className="h4">Border</h4>
            <SemanticRow tok="--border" note="Default borders" />
            <SemanticRow tok="--border-strong" note="Inputs, dividers" />
            <SemanticRow tok="--border-focus" note="Focus ring" />
          </div>
          <div className="sl-card">
            <h4 className="h4">Accent &amp; status</h4>
            <SemanticRow tok="--accent" note="Primary action" />
            <SemanticRow tok="--accent-subtle" note="Soft brand fills" />
            <SemanticRow tok="--success" note="Success text/bg" />
            <SemanticRow tok="--warning" note="Warning" />
            <SemanticRow tok="--danger" note="Destructive / error" />
          </div>
        </div>
      </Sub>
    </Section>
  );
}
function SemanticRow({ tok, note }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", fontSize: 12, borderBottom: "1px solid var(--border)" }}>
      <span style={{ width: 22, height: 22, borderRadius: 4, border: "1px solid var(--border)", background: `var(${tok})` }} />
      <span className="mono" style={{ color: "var(--fg)" }}>{tok}</span>
      <span style={{ color: "var(--fg-muted)", marginLeft: "auto" }}>{note}</span>
    </div>
  );
}

/* --- Typography --- */
const TYPE_SCALE = [
  { name: "Display 1",  role: "display",  font: "display", size: 60, lh: 64, weight: 600, sample: "Learn anything, faster." },
  { name: "Display 2",  role: "display",  font: "display", size: 48, lh: 52, weight: 600, sample: "Design systems at scale" },
  { name: "Heading 1",  role: "heading",  font: "display", size: 36, lh: 42, weight: 600, sample: "Start your learning journey" },
  { name: "Heading 2",  role: "heading",  font: "display", size: 30, lh: 36, weight: 600, sample: "Chapter two: Foundations" },
  { name: "Heading 3",  role: "heading",  font: "display", size: 24, lh: 30, weight: 600, sample: "Introduction to UX research" },
  { name: "Heading 4",  role: "heading",  font: "display", size: 20, lh: 26, weight: 600, sample: "Recommended for you" },
  { name: "Body Large", role: "body",     font: "sans",    size: 16, lh: 24, weight: 400, sample: "A design system provides a unified set of guidelines and components that ensure consistency." },
  { name: "Body",       role: "body",     font: "sans",    size: 14, lh: 20, weight: 400, sample: "A design system provides a unified set of guidelines and components." },
  { name: "Body Small", role: "body",     font: "sans",    size: 13, lh: 18, weight: 400, sample: "A design system provides guidelines and reusable components." },
  { name: "Caption",    role: "caption",  font: "sans",    size: 12, lh: 16, weight: 500, sample: "Last updated 2 hours ago" },
  { name: "Code",       role: "mono",     font: "mono",    size: 13, lh: 20, weight: 400, sample: "const theme = 'sodium';" },
];

function TypographySection() {
  return (
    <Section id="typography" kicker="Foundations" title="Typography"
      lead="Inter for product UI, Geist for display and headlines, JetBrains Mono for code. Three families — no more Poppins, Noto Sans, DM Sans or Grape Nuts floating around.">
      <Sub title="Type scale">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {TYPE_SCALE.map(t => (
            <div key={t.name} className="type-preview">
              <div className="type-preview-sample" style={{
                fontFamily: t.font === "display" ? "var(--font-display)" : t.font === "mono" ? "var(--font-mono)" : "var(--font-sans)",
                fontSize: t.size, lineHeight: `${t.lh}px`, fontWeight: t.weight, letterSpacing: t.size >= 30 ? "-0.02em" : t.size >= 20 ? "-0.01em" : "0",
              }}>{t.sample}</div>
              <div className="type-preview-meta">
                <div style={{ color: "var(--fg)", fontFamily: "var(--font-sans)", fontWeight: 600 }}>{t.name}</div>
                <div>{t.font} · {t.weight}</div>
                <div>{t.size}/{t.lh}</div>
              </div>
            </div>
          ))}
        </div>
      </Sub>

      <Sub title="Font families">
        <div className="grid-3">
          <FontCard name="Inter" label="UI · body" sample="Aa Bb Cc 012" style={{ fontFamily: "Inter" }} />
          <FontCard name="Geist" label="Display · headlines" sample="Aa Bb Cc 012" style={{ fontFamily: "Geist" }} />
          <FontCard name="JetBrains Mono" label="Code · tokens" sample="Aa Bb Cc 012" style={{ fontFamily: "JetBrains Mono" }} />
        </div>
      </Sub>
    </Section>
  );
}
function FontCard({ name, label, sample, style }) {
  return (
    <div className="sl-card">
      <div style={{ ...style, fontSize: 48, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{sample}</div>
      <div style={{ marginTop: 12, fontWeight: 600 }}>{name}</div>
      <div style={{ color: "var(--fg-muted)", fontSize: 12 }}>{label}</div>
    </div>
  );
}

/* --- Spacing / Radius / Shadows / Motion --- */
function FoundationsSection() {
  return (
    <Section id="foundations" kicker="Foundations" title="Spacing, radius, elevation, motion"
      lead="A 4px grid with named tokens; radii from sharp corners to full pills; 5 elevation levels; 3 durations with a single easing curve.">
      <Sub title="Spacing scale" desc="Base unit 4px. All paddings, gaps, and margins should come from this scale.">
        <div className="example" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          {[["sp-1",4],["sp-2",8],["sp-3",12],["sp-4",16],["sp-5",20],["sp-6",24],["sp-8",32],["sp-10",40],["sp-12",48],["sp-16",64]].map(([n,v]) => (
            <div key={n} style={{ display:"flex", alignItems:"center", gap: 12 }}>
              <span className="mono" style={{ width: 72, color: "var(--fg-muted)", fontSize: 12 }}>--{n}</span>
              <span className="mono" style={{ width: 44, color: "var(--fg-subtle)", fontSize: 12 }}>{v}px</span>
              <span style={{ display:"inline-block", height: 12, background: "var(--accent)", borderRadius: 2, width: v }} />
            </div>
          ))}
        </div>
      </Sub>

      <Sub title="Radius">
        <div className="row">
          {[["xs",4],["sm",6],["md",8],["lg",12],["xl",16],["2xl",20],["full",999]].map(([n,v]) => (
            <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap: 8 }}>
              <div style={{ width: 80, height: 80, background: "var(--accent-subtle)", border: "1px solid var(--accent-subtle-border)", borderRadius: v }} />
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-muted)" }}>--r-{n}</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-subtle)" }}>{v === 999 ? "9999px" : v + "px"}</span>
            </div>
          ))}
        </div>
      </Sub>

      <Sub title="Elevation">
        <div className="row" style={{ gap: 24, padding: 24 }}>
          {[["xs","shadow-xs"],["sm","shadow-sm"],["md","shadow-md"],["lg","shadow-lg"],["xl","shadow-xl"]].map(([n, tok]) => (
            <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap: 10 }}>
              <div style={{ width: 120, height: 72, background: "var(--surface)", borderRadius: "var(--r-md)", boxShadow: `var(--${tok})`, border: "1px solid var(--border)" }} />
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-muted)" }}>--{tok}</span>
            </div>
          ))}
        </div>
      </Sub>

      <Sub title="Motion">
        <table className="spec">
          <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td className="mono">--dur-fast</td><td className="mono">120ms</td><td>Hover/press, small state changes</td></tr>
            <tr><td className="mono">--dur</td><td className="mono">180ms</td><td>Dropdowns, switches, toasts</td></tr>
            <tr><td className="mono">--dur-slow</td><td className="mono">260ms</td><td>Dialogs, page transitions</td></tr>
            <tr><td className="mono">--ease-out</td><td className="mono">cubic-bezier(.16,1,.3,1)</td><td>Enter animations</td></tr>
            <tr><td className="mono">--ease-in-out</td><td className="mono">cubic-bezier(.65,0,.35,1)</td><td>Reversible transitions</td></tr>
          </tbody>
        </table>
      </Sub>
    </Section>
  );
}

/* --- Iconography --- */
function IconSection() {
  const names = Object.keys(Icon).sort();
  return (
    <Section id="icons" kicker="Foundations" title="Iconography"
      lead="Lucide is our default icon set. 16px default, 1.5–2px stroke, optical center aligned. Use `.sl-ico` class or set size via prop.">
      <Example title="Icon grid · 16px">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(88px, 1fr))", gap: 8, width: "100%" }}>
          {names.map(n => {
            const I = Icon[n];
            return (
              <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap: 6, padding: 10, border: "1px solid var(--border)", borderRadius: "var(--r-sm)", background: "var(--surface)" }}>
                <I size={18} />
                <span style={{ fontSize: 10, color: "var(--fg-subtle)", fontFamily: "var(--font-mono)" }}>{n}</span>
              </div>
            );
          })}
        </div>
      </Example>

      <Sub title="Sizes">
        <Example>
          {[12,14,16,20,24,32].map(s => <Icon.Bell key={s} size={s} />)}
        </Example>
      </Sub>
    </Section>
  );
}

export { IntroSection, ColorSection, TypographySection, FoundationsSection, IconSection };