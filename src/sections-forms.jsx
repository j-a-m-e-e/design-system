import React from 'react';
import { Icon, cn, Example, Section, Sub, Button, Input, Textarea, InputWithIcon, Field, Select, Checkbox, Radio, Switch } from './primitives.jsx';

const { useState: fmState } = React;

function FormsSection() {
  const [enroll, setEnroll] = fmState(true);
  return (
    <Section id="forms" kicker="Forms" title="Form patterns"
      lead="Vertical layout, left-aligned labels above inputs, single column up to 480px, two-column only for related fields (first/last, start/end).">
      <Example pad="sm" plain>
        <div className="sl-card" style={{ width: 520, maxWidth: "100%" }}>
          <h4 className="h4" style={{ marginTop: 0 }}>Create a course</h4>
          <p className="sub-desc" style={{ marginBottom: 20 }}>Fill in the basics — you can edit details any time.</p>
          <div style={{ display: "grid", gap: 14 }}>
            <Field label="Title" hint="Shown on Explore and in search">
              <Input placeholder="Intro to Systems Thinking" />
            </Field>
            <div className="grid-2">
              <Field label="Category">
                <Select placeholder="Choose" options={[
                  {value:"d",label:"Design"},{value:"r",label:"Research"},{value:"e",label:"Engineering"}
                ]}/>
              </Field>
              <Field label="Level">
                <Select placeholder="Choose" options={[
                  {value:"b",label:"Beginner"},{value:"i",label:"Intermediate"},{value:"a",label:"Advanced"}
                ]}/>
              </Field>
            </div>
            <Field label="Description" hint="Markdown supported">
              <Textarea rows={4} placeholder="Describe what learners will take away…" />
            </Field>
            <div style={{ display: "flex", alignItems:"center", gap: 10, padding: "10px 12px", background: "var(--bg-muted)", borderRadius: "var(--r-md)" }}>
              <Switch checked={enroll} onChange={setEnroll}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>Open enrollment</div>
                <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>Anyone with the link can join without approval.</div>
              </div>
            </div>
            <div style={{ display:"flex", justifyContent:"flex-end", gap: 8, marginTop: 6 }}>
              <Button variant="secondary">Cancel</Button>
              <Button variant="brand">Create course</Button>
            </div>
          </div>
        </div>
      </Example>
    </Section>
  );
}

function DatePickerSection() {
  const dow = ["S","M","T","W","T","F","S"];
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  return (
    <Section id="date" kicker="Forms" title="Date picker"
      lead="Single-date and range. Arrow-keys to navigate, Enter to select.">
      <Example pad="sm" plain center>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div className="sl-cal">
            <div className="sl-cal-head">
              <Button variant="ghost" size="sm" icon={<Icon.ChevronLeft size={14}/>}/>
              <div style={{ fontWeight: 600 }}>April 2026</div>
              <Button variant="ghost" size="sm" icon={<Icon.ChevronRight size={14}/>}/>
            </div>
            <div className="sl-cal-grid">
              {dow.map((d,i) => <div className="sl-cal-dow" key={i}>{d}</div>)}
              {days.map((d,i) => {
                const outside = d < 1 || d > 30;
                const today = d === 18;
                const inRange = d >= 14 && d <= 22;
                const selected = d === 14 || d === 22;
                return (
                  <div key={i}
                       className={cn("sl-cal-day", outside && "outside", today && "today", inRange && !selected && "in-range")}
                       aria-selected={selected}>
                    {outside ? (d < 1 ? 31 + d : d - 30) : d}
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 240 }}>
            <Field label="Start date">
              <InputWithIcon icon={<Icon.Calendar size={14}/>} value="Apr 14, 2026" readOnly />
            </Field>
            <Field label="End date">
              <InputWithIcon icon={<Icon.Calendar size={14}/>} value="Apr 22, 2026" readOnly />
            </Field>
          </div>
        </div>
      </Example>
    </Section>
  );
}

function FileUploadSection() {
  return (
    <Section id="upload" kicker="Forms" title="File upload"
      lead="Drag-and-drop zone + fallback click-to-browse. Use for course materials, thumbnails, SCORM packages.">
      <Example pad="sm" plain>
        <div className="sl-drop" style={{ width: "100%" }}>
          <div className="sl-drop-ico"><Icon.Upload size={18}/></div>
          <div style={{ fontSize: "var(--text-md)" }}><strong>Drop files</strong> or <a href="#">browse</a></div>
          <div style={{ fontSize: 12, marginTop: 4 }}>MP4, PDF, SCORM · up to 500 MB</div>
        </div>
      </Example>
      <Example title="With progress" pad="sm">
        <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, border: "1px solid var(--border)", borderRadius: "var(--r-md)", background: "var(--surface)" }}>
            <div style={{ width: 36, height: 36, borderRadius: "var(--r-sm)", background: "var(--accent-subtle)", color: "var(--accent)", display: "grid", placeItems: "center" }}>
              <Icon.FileText size={16}/>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ fontWeight: 500 }}>research-methods.pdf</span>
                <span style={{ color: "var(--fg-muted)" }}>62% · 1.2 MB/s</span>
              </div>
              <div className="sl-progress sl-progress--sm"><div className="sl-progress-fill" style={{ width: "62%" }}/></div>
            </div>
            <Button variant="ghost" size="sm" icon={<Icon.X size={14}/>}/>
          </div>
        </div>
      </Example>
    </Section>
  );
}

export { FormsSection, DatePickerSection, FileUploadSection };