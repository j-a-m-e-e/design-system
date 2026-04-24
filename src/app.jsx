import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon, cn, Button, Input, Textarea, InputWithIcon, Field, Checkbox, Radio, Switch, Slider, Badge, Avatar, AvatarGroup, Tooltip, Tabs, Progress, Breadcrumbs, Select, Alert, Kbd, Example, Section, Sub } from './primitives.jsx';
import { IntroSection, ColorSection, TypographySection, FoundationsSection, IconSection } from './sections-foundation.jsx';
import { ButtonSection, InputSection, SelectSection, CheckRadioSwitchSection, SliderSection, BadgeTagSection, AvatarSection, TooltipSection, TabsSection, ProgressSection, BreadcrumbSection, DialogSection } from './sections-primitives.jsx';
import { TableSection, StatCardSection, EmptyStateSection, SkeletonSection } from './sections-data.jsx';
import { SidebarSection, TopnavSection, CommandSection } from './sections-nav.jsx';
import { ToastSection, BannerSection, AlertSection, ResultStateSection } from './sections-feedback.jsx';
import { FormsSection, DatePickerSection, FileUploadSection } from './sections-forms.jsx';
import { CourseItemSection, ContentCardSection, StickyNoteSection, QuizSection, AuthoringSection } from './sections-sodium.jsx';
import { PatternsSection } from './sections-patterns.jsx';
import { ChangelogSection } from './sections-changelog.jsx';

const { useState: aState, useEffect: aEffect, useMemo: aMemo } = React;

const NAV = [
  { group: "Getting started", items: [
    { id: "intro", label: "Introduction" },
    { id: "changelog", label: "Migration · v2 → v3" },
  ]},
  { group: "Foundations", items: [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "foundations", label: "Spacing · Radius · Motion" },
    { id: "icons", label: "Icons" },
  ]},
  { group: "Primitives", items: [
    { id: "button", label: "Button" },
    { id: "input", label: "Input & Textarea" },
    { id: "select", label: "Select & Dropdown" },
    { id: "toggles", label: "Checkbox · Radio · Switch" },
    { id: "slider", label: "Slider" },
    { id: "badge", label: "Badge & Tag" },
    { id: "avatar", label: "Avatar" },
    { id: "tooltip", label: "Tooltip" },
    { id: "tabs", label: "Tabs" },
    { id: "progress", label: "Progress" },
    { id: "breadcrumb", label: "Breadcrumb" },
    { id: "dialog", label: "Dialog" },
  ]},
  { group: "Data", items: [
    { id: "table", label: "Table" },
    { id: "stat", label: "Stat card" },
    { id: "empty", label: "Empty states" },
    { id: "skeleton", label: "Skeleton" },
  ]},
  { group: "Navigation", items: [
    { id: "sidebar", label: "Sidebar" },
    { id: "topnav", label: "Top nav" },
    { id: "command", label: "Command palette" },
  ]},
  { group: "Feedback", items: [
    { id: "toast", label: "Toast" },
    { id: "banner", label: "Banner" },
    { id: "alert", label: "Inline alert" },
    { id: "result", label: "Result states" },
  ]},
  { group: "Forms", items: [
    { id: "forms", label: "Form patterns" },
    { id: "date", label: "Date picker" },
    { id: "upload", label: "File upload" },
  ]},
  { group: "Sodium specifics", items: [
    { id: "course-item", label: "Course item" },
    { id: "content-card", label: "Content card" },
    { id: "sticky", label: "Sticky note" },
    { id: "quiz", label: "Quiz" },
    { id: "authoring", label: "Authoring tool" },
  ]},
  { group: "Patterns", items: [
    { id: "patterns", label: "Composed patterns" },
  ]},
];

/* ---------- Tweaks ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "primary": "#217BD6",
  "radius": 8,
  "density": "comfortable",
  "uiFont": "Inter"
}/*EDITMODE-END*/;

const PRIMARIES = [
  { label: "Sodium (#217BD6)", hex: "#217BD6", ramp: ["#f1f6fe","#e3ecfb","#c0d9f7","#88bbf1","#4898e8","#217bd6","#1465c2","#014da1","#0a3b7d","#012b59"] },
  { label: "Indigo", hex: "#4F46E5", ramp: ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81"] },
  { label: "Violet", hex: "#8347E0", ramp: ["#f6f4fe","#eeebfc","#e0d9fb","#c9baf8","#ad93f2","#9e77ed","#8347e0","#7435cc","#5e27ab","#51268c"] },
  { label: "Teal", hex: "#0D9488", ramp: ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a"] },
  { label: "Green", hex: "#26A95F", ramp: ["#eefbf4","#dff8ea","#b2eecc","#84e4ae","#56d990","#2dca72","#26a95f","#1e874c","#165f37","#0f4527"] },
  { label: "Slate", hex: "#0F172A", ramp: ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a"] },
];

function applyTweaks(t) {
  const root = document.documentElement;
  root.setAttribute("data-theme", t.theme);
  const p = PRIMARIES.find(x => x.hex.toLowerCase() === t.primary.toLowerCase()) || PRIMARIES[0];
  ["50","100","200","300","400","500","600","700","800","900"].forEach((step, i) => {
    root.style.setProperty(`--brand-${step}`, p.ramp[i]);
  });
  // radius override cascade
  const r = t.radius;
  root.style.setProperty("--r-xs", Math.max(2, r-4) + "px");
  root.style.setProperty("--r-sm", Math.max(3, r-2) + "px");
  root.style.setProperty("--r-md", r + "px");
  root.style.setProperty("--r-lg", (r+4) + "px");
  root.style.setProperty("--r-xl", (r+8) + "px");
  // density
  if (t.density === "compact") {
    root.style.setProperty("--control-h-sm", "26px");
    root.style.setProperty("--control-h-md", "32px");
    root.style.setProperty("--control-h-lg", "40px");
    root.style.setProperty("--sp-5", "16px");
    root.style.setProperty("--sp-6", "20px");
  } else if (t.density === "spacious") {
    root.style.setProperty("--control-h-sm", "32px");
    root.style.setProperty("--control-h-md", "40px");
    root.style.setProperty("--control-h-lg", "48px");
    root.style.setProperty("--sp-5", "24px");
    root.style.setProperty("--sp-6", "32px");
  } else {
    root.style.setProperty("--control-h-sm", "28px");
    root.style.setProperty("--control-h-md", "36px");
    root.style.setProperty("--control-h-lg", "44px");
    root.style.setProperty("--sp-5", "20px");
    root.style.setProperty("--sp-6", "24px");
  }
  root.style.setProperty("--font-sans", `"${t.uiFont}", ui-sans-serif, system-ui, sans-serif`);
}

function TweaksPanel({ tweaks, setTweaks, visible, onClose }) {
  if (!visible) return null;
  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try { localStorage.setItem("sl-tweaks", JSON.stringify(next)); } catch (e) {}
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch (e) {}
  };
  return (
    <div className="tweaks-panel">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <Button variant="ghost" size="sm" icon={<Icon.X size={14}/>} onClick={onClose}/>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <div className="tweak-row-label"><span>Theme</span><span style={{ color: "var(--fg)" }}>{tweaks.theme}</span></div>
          <div style={{ display:"flex", gap: 4, background: "var(--bg-muted)", padding: 4, borderRadius: "var(--r-sm)" }}>
            <button onClick={() => update({ theme: "light" })}
              style={{ flex:1, padding: "6px 0", borderRadius: 4, border: 0, fontSize: 13,
                background: tweaks.theme==="light" ? "var(--surface)" : "transparent",
                color: "var(--fg)", fontWeight: tweaks.theme==="light"?500:400, boxShadow: tweaks.theme==="light"?"var(--shadow-xs)":"none" }}>
              <Icon.Sun size={13}/> Light
            </button>
            <button onClick={() => update({ theme: "dark" })}
              style={{ flex:1, padding: "6px 0", borderRadius: 4, border: 0, fontSize: 13,
                background: tweaks.theme==="dark" ? "var(--surface)" : "transparent",
                color: "var(--fg)", fontWeight: tweaks.theme==="dark"?500:400, boxShadow: tweaks.theme==="dark"?"var(--shadow-xs)":"none" }}>
              <Icon.Moon size={13}/> Dark
            </button>
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-row-label"><span>Primary color</span><span style={{ fontFamily:"var(--font-mono)", fontSize: 11 }}>{tweaks.primary}</span></div>
          <div className="tweak-swatches">
            {PRIMARIES.map(p => (
              <button key={p.hex} className="tweak-swatch" data-active={tweaks.primary.toLowerCase()===p.hex.toLowerCase()}
                onClick={() => update({ primary: p.hex })} title={p.label} style={{ background: p.hex }}/>
            ))}
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-row-label"><span>Radius</span><span style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{tweaks.radius}px</span></div>
          <input type="range" min="0" max="16" step="2" value={tweaks.radius}
            onChange={e => update({ radius: parseInt(e.target.value,10) })}
            style={{ width: "100%", accentColor: "var(--accent)" }}/>
        </div>

        <div className="tweak-row">
          <div className="tweak-row-label"><span>Density</span><span style={{ color:"var(--fg)" }}>{tweaks.density}</span></div>
          <div style={{ display: "flex", gap: 4, background: "var(--bg-muted)", padding: 4, borderRadius: "var(--r-sm)" }}>
            {["compact","comfortable","spacious"].map(d => (
              <button key={d} onClick={() => update({ density: d })}
                style={{ flex:1, padding:"6px 0", borderRadius: 4, border: 0, fontSize: 12, textTransform: "capitalize",
                  background: tweaks.density===d ? "var(--surface)" : "transparent",
                  boxShadow: tweaks.density===d ? "var(--shadow-xs)" : "none", color: "var(--fg)" }}>{d}</button>
            ))}
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-row-label"><span>UI font</span><span style={{ color:"var(--fg)" }}>{tweaks.uiFont}</span></div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {["Inter","Geist","system-ui"].map(f => (
              <button key={f} onClick={() => update({ uiFont: f })}
                style={{ padding: "6px 10px", borderRadius: "var(--r-sm)", border: "1px solid var(--border)",
                  background: tweaks.uiFont===f ? "var(--accent-subtle)" : "var(--surface)",
                  color: tweaks.uiFont===f ? "var(--accent)" : "var(--fg)", fontSize: 12, cursor: "pointer" }}>{f}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Sidebar with scroll-spy ---------- */
function SideNav({ active }) {
  return (
    <aside className="doc-side">
      <div className="doc-side-header">
        <div className="doc-brand">
          <div className="doc-brand-mark">S</div>
          <div>
            <div className="doc-brand-title">Sodium Learn</div>
            <div className="doc-brand-sub">Design System · v3.0</div>
          </div>
        </div>
      </div>
      {NAV.map(g => (
        <div key={g.group} className="doc-nav-group">
          <div className="doc-nav-group-label">{g.group}</div>
          <ul className="doc-nav">
            {g.items.map(it => (
              <li key={it.id}>
                <a href={`#${it.id}`} className={active === it.id ? "active" : ""}>{it.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

/* ---------- App ---------- */
function App() {
  const initial = (() => {
    try {
      const stored = JSON.parse(localStorage.getItem("sl-tweaks") || "null");
      return stored ? { ...TWEAK_DEFAULTS, ...stored } : TWEAK_DEFAULTS;
    } catch (e) { return TWEAK_DEFAULTS; }
  })();
  const [tweaks, setTweaks] = aState(initial);
  const [tweaksOpen, setTweaksOpen] = aState(false);
  const [active, setActive] = aState("intro");

  aEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  aEffect(() => {
    const onMsg = (e) => {
      const d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "__activate_edit_mode") setTweaksOpen(true);
      if (d.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  aEffect(() => {
    const sections = NAV.flatMap(g => g.items);
    const onScroll = () => {
      let best = sections[0].id;
      let bestTop = -Infinity;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < 120 && top > bestTop) { bestTop = top; best = s.id; }
      }
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="doc-app">
      <SideNav active={active} />
      <main>
        <div className="doc-topbar">
          <div style={{ fontSize: 13, color: "var(--fg-muted)" }}>
            <strong style={{ color: "var(--fg)" }}>Sodium Learn</strong> · Design System · v3.0
          </div>
          <div className="doc-topbar-actions">
            <Button variant="ghost" size="sm" icon={tweaks.theme === "dark" ? <Icon.Sun size={15}/> : <Icon.Moon size={15}/>}
              onClick={() => { const t = { ...tweaks, theme: tweaks.theme==="dark"?"light":"dark" }; setTweaks(t); try { localStorage.setItem("sl-tweaks", JSON.stringify(t)); } catch(e){} }}/>
            <Button variant="outline" size="sm" icon={<Icon.Sparkles size={14}/>} onClick={() => setTweaksOpen(v => !v)}>
              Tweaks
            </Button>
          </div>
        </div>

        <div className="doc-main">
          <IntroSection/>
          <ChangelogSection/>
          <ColorSection/>
          <TypographySection/>
          <FoundationsSection/>
          <IconSection/>

          <ButtonSection/>
          <InputSection/>
          <SelectSection/>
          <CheckRadioSwitchSection/>
          <SliderSection/>
          <BadgeTagSection/>
          <AvatarSection/>
          <TooltipSection/>
          <TabsSection/>
          <ProgressSection/>
          <BreadcrumbSection/>
          <DialogSection/>

          <TableSection/>
          <StatCardSection/>
          <EmptyStateSection/>
          <SkeletonSection/>

          <SidebarSection/>
          <TopnavSection/>
          <CommandSection/>

          <ToastSection/>
          <BannerSection/>
          <AlertSection/>
          <ResultStateSection/>

          <FormsSection/>
          <DatePickerSection/>
          <FileUploadSection/>

          <CourseItemSection/>
          <ContentCardSection/>
          <StickyNoteSection/>
          <QuizSection/>
          <AuthoringSection/>

          <PatternsSection/>

          <div style={{ marginTop: 96, padding: "24px 0", borderTop: "1px solid var(--border)", color: "var(--fg-muted)", fontSize: 13 }}>
            Sodium Learn · Design System v3.0 · Built for ship-day.
          </div>
        </div>

        <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksOpen} onClose={() => setTweaksOpen(false)}/>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);