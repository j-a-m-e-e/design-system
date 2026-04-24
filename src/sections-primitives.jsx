import React from 'react';
import { Icon, Example, Section, Sub, Button, Input, Textarea, InputWithIcon, Field, Checkbox, Radio, Switch, Slider, Badge, Avatar, AvatarGroup, Tooltip, Tabs, Progress, Breadcrumbs, Select, Alert, Kbd } from './primitives.jsx';

const { useState: psState } = React;

function ButtonSection() {
  return (
    <Section id="button" kicker="Primitives" title="Button"
      lead="Six variants × three sizes × two shape modifiers (default / pill / icon-only). Replaces the 60-combo legacy system.">
      <Example title="Variants">
        <Button variant="brand">Create course</Button>
        <Button variant="default">Continue</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="outline">Save draft</Button>
        <Button variant="ghost">Skip</Button>
        <Button variant="destructive">Delete</Button>
      </Example>
      <Example title="Sizes">
        <Button variant="brand" size="sm">Small</Button>
        <Button variant="brand">Medium</Button>
        <Button variant="brand" size="lg">Large</Button>
      </Example>
      <Example title="With icons">
        <Button variant="brand" icon={<Icon.Plus size={14}/>}>New course</Button>
        <Button variant="outline" icon={<Icon.Download size={14}/>}>Export</Button>
        <Button variant="secondary" iconRight={<Icon.ArrowRight size={14}/>}>Continue</Button>
        <Button variant="ghost" icon={<Icon.Edit size={14}/>}>Edit</Button>
      </Example>
      <Example title="Icon only">
        <Button variant="outline" icon={<Icon.Search size={16}/>} />
        <Button variant="ghost" icon={<Icon.More size={16}/>} />
        <Button variant="brand" icon={<Icon.Plus size={16}/>} />
        <Button variant="destructive" icon={<Icon.Trash size={16}/>} />
      </Example>
      <Example title="Pill (for filter bars, status chips-as-actions)">
        <Button variant="outline" pill>All courses</Button>
        <Button variant="brand" pill>Active <Badge variant="neutral" style={{ background:"rgba(255,255,255,0.25)", color:"#fff" }}>12</Badge></Button>
        <Button variant="ghost" pill>Archived</Button>
      </Example>
      <Example title="States">
        <Button variant="brand" disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="brand"><span className="sl-skel" style={{ width: 14, height: 14, borderRadius: "50%" }}/> Loading</Button>
      </Example>
      <table className="spec">
        <thead><tr><th>Variant</th><th>When to use</th></tr></thead>
        <tbody>
          <tr><td><code>brand</code></td><td>Primary action tied to Sodium identity — Create, Submit, Continue</td></tr>
          <tr><td><code>default</code></td><td>Strong neutral primary — page-level actions without brand weight</td></tr>
          <tr><td><code>secondary</code></td><td>Cancel, close, dismiss, companion actions</td></tr>
          <tr><td><code>outline</code></td><td>Tertiary actions sharing weight with primary (Export, Filter)</td></tr>
          <tr><td><code>ghost</code></td><td>Low-emphasis, tight spaces (toolbars, table rows)</td></tr>
          <tr><td><code>destructive</code></td><td>Delete, remove, unsubscribe</td></tr>
        </tbody>
      </table>
    </Section>
  );
}

function InputSection() {
  const [val, setVal] = psState("");
  return (
    <Section id="input" kicker="Primitives" title="Input &amp; Textarea"
      lead="Standard text inputs across sizes, with hint/error/icon variants, plus textareas.">
      <Example title="Default"><div style={{ width: 320 }}><Input placeholder="Enter course name" /></div></Example>
      <Example title="With icon"><div style={{ width: 320 }}><InputWithIcon icon={<Icon.Search size={14}/>} placeholder="Search courses, quizzes, users" /></div></Example>
      <Example title="Field with label + hint"><div style={{ width: 360 }}>
        <Field label="Course title" hint="Shown to learners in Explore">
          <Input placeholder="Intro to Systems Thinking" />
        </Field>
      </div></Example>
      <Example title="Error state"><div style={{ width: 360 }}>
        <Field label="Email" error="Enter a valid email address">
          <Input error value="jamee@" onChange={()=>{}} />
        </Field>
      </div></Example>
      <Example title="Textarea"><div style={{ width: 420 }}>
        <Field label="Description" hint="Markdown supported">
          <Textarea rows={4} placeholder="Describe what learners will take away…" />
        </Field>
      </div></Example>
      <Example title="Disabled"><div style={{ width: 320 }}><Input value="read-only" disabled onChange={()=>{}} /></div></Example>
    </Section>
  );
}

function SelectSection() {
  return (
    <Section id="select" kicker="Primitives" title="Select &amp; Dropdown"
      lead="Styled trigger + floating menu. Keyboard and outside-click aware.">
      <Example title="Select" pad="sm">
        <div style={{ width: 260 }}>
          <Select placeholder="Choose category" options={[
            { value: "design", label: "Design" },
            { value: "research", label: "Research" },
            { value: "product", label: "Product" },
            { value: "engineering", label: "Engineering" },
          ]}/>
        </div>
      </Example>
      <Example title="Dropdown menu" pad="sm">
        <div className="sl-menu" style={{ width: 240 }}>
          <div className="sl-menu-label">Actions</div>
          <div className="sl-menu-item"><Icon.Edit size={14}/> Edit<span className="sl-menu-right">⌘E</span></div>
          <div className="sl-menu-item"><Icon.Download size={14}/> Export<span className="sl-menu-right">⌘⇧E</span></div>
          <div className="sl-menu-item"><Icon.Bookmark size={14}/> Save for later</div>
          <div className="sl-menu-sep"/>
          <div className="sl-menu-item danger"><Icon.Trash size={14}/> Delete</div>
        </div>
      </Example>
    </Section>
  );
}

function CheckRadioSwitchSection() {
  const [r, setR] = psState("beg");
  return (
    <Section id="toggles" kicker="Primitives" title="Checkbox · Radio · Switch"
      lead="Minimal 16px controls with 2px focus rings. Switches use a pill shape regardless of global radius.">
      <Example title="Checkbox">
        <div className="col">
          <Checkbox defaultChecked label="I agree to the terms"/>
          <Checkbox label="Send me product updates"/>
          <Checkbox label="Newsletter"/>
        </div>
      </Example>
      <Example title="Radio group">
        <div className="col">
          {["beg","int","adv"].map(k => (
            <Radio key={k} name="lvl" checked={r===k} onChange={() => setR(k)}
                   label={{beg:"Beginner", int:"Intermediate", adv:"Advanced"}[k]}/>
          ))}
        </div>
      </Example>
      <Example title="Switch">
        <div className="row">
          <Switch /><span style={{ fontSize: 13 }}>Enable notifications</span>
          <span style={{ width: 24 }}/>
          <Switch defaultChecked size="lg" /><span style={{ fontSize: 13 }}>Auto-save</span>
        </div>
      </Example>
    </Section>
  );
}

function SliderSection() {
  const [v, setV] = psState(42);
  return (
    <Section id="slider" kicker="Primitives" title="Slider"
      lead="Single-value slider with draggable thumb.">
      <Example title="Playback speed">
        <div style={{ width: 320 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--fg-muted)", marginBottom: 8 }}>
            <span>0.5×</span><span style={{ color: "var(--fg)", fontWeight: 500 }}>{(v/50).toFixed(1)}×</span><span>2×</span>
          </div>
          <Slider value={v} onChange={setV} />
        </div>
      </Example>
    </Section>
  );
}

function BadgeTagSection() {
  return (
    <Section id="badge" kicker="Primitives" title="Badge &amp; Tag"
      lead="Status pills and user chips. Badges are decorative; chips are removable user/entity selections.">
      <Example title="Status badges">
        <Badge variant="brand">Featured</Badge>
        <Badge variant="success" dot>Published</Badge>
        <Badge variant="warning" dot>Review</Badge>
        <Badge variant="danger" dot>Overdue</Badge>
        <Badge variant="neutral">Draft</Badge>
        <Badge variant="outline">v3.0</Badge>
      </Example>
      <Example title="Count">
        <Button variant="outline" iconRight={<Badge variant="brand">12</Badge>}>Inbox</Button>
        <Badge variant="danger">99+</Badge>
      </Example>
      <Example title="User chips (removable)">
        <span className="sl-chip"><Avatar size="xs" initials="JM" /> Jamee M. <button className="sl-chip-x"><Icon.X size={12}/></button></span>
        <span className="sl-chip"><Avatar size="xs" initials="AR" /> Aarav R. <button className="sl-chip-x"><Icon.X size={12}/></button></span>
        <span className="sl-chip"><Avatar size="xs" initials="SK" /> Sana K. <button className="sl-chip-x"><Icon.X size={12}/></button></span>
      </Example>
    </Section>
  );
}

function AvatarSection() {
  return (
    <Section id="avatar" kicker="Primitives" title="Avatar"
      lead="Square PNG or fallback initials. Group with overlap.">
      <Example title="Sizes">
        <Avatar size="xs" initials="JM"/>
        <Avatar size="sm" initials="AR"/>
        <Avatar size="md" initials="SK"/>
        <Avatar size="lg" initials="LT"/>
        <Avatar size="xl" initials="DP"/>
      </Example>
      <Example title="Group">
        <AvatarGroup size="md" items={[
          { initials: "JM" },{ initials: "AR" },{ initials: "SK" },{ initials: "LT" },{ initials: "DP" },{ initials: "MB" },{ initials: "QZ" }
        ]}/>
      </Example>
    </Section>
  );
}

function TooltipSection() {
  return (
    <Section id="tooltip" kicker="Primitives" title="Tooltip"
      lead="Appears on hover/focus. Dark chip, short copy. Not for critical info.">
      <Example pad="sm" center>
        <div style={{ display: "flex", gap: 40, padding: "40px 20px 20px" }}>
          <Tooltip label="Delete" alwaysOpen><Button variant="ghost" icon={<Icon.Trash size={16}/>}/></Tooltip>
          <Tooltip label="Keyboard: ⌘K" alwaysOpen><Button variant="outline" icon={<Icon.Search size={16}/>}/></Tooltip>
          <Tooltip label="Notifications" alwaysOpen><Button variant="ghost" icon={<Icon.Bell size={16}/>}/></Tooltip>
        </div>
      </Example>
    </Section>
  );
}

function TabsSection() {
  return (
    <Section id="tabs" kicker="Primitives" title="Tabs"
      lead="Two styles — underline (page-level) and pills (in-card filters). Tab-Nav and Tab-Nav2 from v2 are merged here.">
      <Example title="Underline">
        <div style={{ width: "100%" }}>
          <Tabs items={[
            { value: "overview", label: "Overview" },
            { value: "learners", label: "Learners" },
            { value: "quiz", label: "Quiz" },
            { value: "settings", label: "Settings" },
          ]}/>
        </div>
      </Example>
      <Example title="Pills">
        <Tabs variant="pills" items={[
          { value: "all", label: "All" },
          { value: "draft", label: "Drafts" },
          { value: "pub", label: "Published" },
          { value: "arc", label: "Archived" },
        ]}/>
      </Example>
    </Section>
  );
}

function ProgressSection() {
  return (
    <Section id="progress" kicker="Primitives" title="Progress"
      lead="Determinate bar for course completion, uploads, quizzes.">
      <Example title="Default" stack>
        <Progress value={12}/>
        <Progress value={48}/>
        <Progress value={82} variant="success"/>
      </Example>
      <Example title="Small + status" stack>
        <Progress size="sm" value={60}/>
        <Progress size="sm" value={30} variant="warning"/>
        <Progress size="sm" value={15} variant="danger"/>
      </Example>
    </Section>
  );
}

function BreadcrumbSection() {
  return (
    <Section id="breadcrumb" kicker="Primitives" title="Breadcrumb"
      lead="Forward-slash separated path with last crumb as current.">
      <Example>
        <Breadcrumbs items={[
          { label: "Library", href: "#" },
          { label: "UX Research", href: "#" },
          { label: "Chapter 3" },
        ]}/>
      </Example>
    </Section>
  );
}

function DialogSection() {
  return (
    <Section id="dialog" kicker="Primitives" title="Dialog"
      lead="Modal with header / body / footer. Use sparingly — prefer inline edits where possible.">
      <Example pad="sm" plain>
        <div className="sl-dialog" style={{ boxShadow: "var(--shadow-xl)" }}>
          <div className="sl-dialog-header">
            <h3 className="sl-dialog-title">Delete course?</h3>
            <p className="sl-dialog-desc">"Intro to Systems Thinking" and all associated learner progress will be permanently removed. This can't be undone.</p>
          </div>
          <div className="sl-dialog-body">
            <Alert variant="warning">Last edited 2 days ago · 148 learners currently enrolled.</Alert>
          </div>
          <div className="sl-dialog-footer">
            <Button variant="secondary">Cancel</Button>
            <Button variant="destructive">Delete course</Button>
          </div>
        </div>
      </Example>
    </Section>
  );
}

export {
  ButtonSection, InputSection, SelectSection,
  CheckRadioSwitchSection, SliderSection, BadgeTagSection, AvatarSection,
  TooltipSection, TabsSection, ProgressSection, BreadcrumbSection, DialogSection,
};