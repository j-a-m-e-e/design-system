import React from 'react';
import { Icon, cn, Example, Section, Sub, Button, Input, InputWithIcon, Badge, Avatar, AvatarGroup, Checkbox } from './primitives.jsx';

const { useState: dsState } = React;

function TableSection() {
  const rows = [
    { id: 1, name: "Intro to Systems Thinking", owner: "Jamee M.", status: "Published", learners: 284, updated: "2d ago" },
    { id: 2, name: "UX Research Fundamentals",  owner: "Aarav R.",  status: "Draft",     learners: 0,   updated: "5h ago" },
    { id: 3, name: "Accessibility Deep Dive",   owner: "Sana K.",   status: "Review",    learners: 12,  updated: "1h ago" },
    { id: 4, name: "Product Storytelling",      owner: "Liam T.",   status: "Published", learners: 1430,updated: "1w ago" },
    { id: 5, name: "Design Critique Playbook",  owner: "Dana P.",   status: "Archived",  learners: 86,  updated: "3w ago" },
  ];
  const pill = (s) => {
    const v = s === "Published" ? "success" : s === "Draft" ? "neutral" : s === "Review" ? "warning" : "outline";
    return <Badge variant={v} dot={s==="Published"||s==="Review"}>{s}</Badge>;
  };
  return (
    <Section id="table" kicker="Data" title="Table"
      lead="Dense list UI — the most-used surface in Sodium. Hover rows, filter bar, and pagination below. Compact density available.">
      <Example title="Standard">
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center" }}>
            <div style={{ width: 280 }}><InputWithIcon icon={<Icon.Search size={14}/>} placeholder="Search courses" /></div>
            <Button variant="outline" icon={<Icon.Filter size={14}/>}>Filter</Button>
            <Button variant="outline" icon={<Icon.Download size={14}/>}>Export</Button>
            <span style={{ flex: 1 }}/>
            <Button variant="brand" icon={<Icon.Plus size={14}/>}>New course</Button>
          </div>
          <div className="sl-table-wrap">
            <table className="sl-table">
              <thead>
                <tr>
                  <th style={{ width: 36 }}><Checkbox/></th>
                  <th>Course</th><th>Owner</th><th>Status</th>
                  <th style={{ textAlign:"right" }}>Learners</th>
                  <th>Updated</th><th style={{ width: 36 }}></th>
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.id}>
                    <td><Checkbox/></td>
                    <td style={{ fontWeight: 500 }}>{r.name}</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Avatar size="xs" initials={r.owner.split(" ").map(x=>x[0]).join("")}/> {r.owner}</span></td>
                    <td>{pill(r.status)}</td>
                    <td style={{ textAlign:"right", fontVariantNumeric: "tabular-nums" }}>{r.learners.toLocaleString()}</td>
                    <td style={{ color: "var(--fg-muted)" }}>{r.updated}</td>
                    <td><Button variant="ghost" size="sm" icon={<Icon.More size={16}/>}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display:"flex", alignItems:"center", justifyContent: "space-between", marginTop: 12, fontSize: 13, color: "var(--fg-muted)" }}>
            <span>Showing 1–5 of 142</span>
            <div className="sl-pag">
              <button className="sl-pag-item"><Icon.ChevronLeft size={14}/></button>
              <button className="sl-pag-item" aria-current="page">1</button>
              <button className="sl-pag-item">2</button>
              <button className="sl-pag-item">3</button>
              <button className="sl-pag-item">…</button>
              <button className="sl-pag-item">29</button>
              <button className="sl-pag-item"><Icon.ChevronRight size={14}/></button>
            </div>
          </div>
        </div>
      </Example>
    </Section>
  );
}

function StatCardSection() {
  return (
    <Section id="stat" kicker="Data" title="Stat card"
      lead="Dashboard KPI tile with label, big value, and delta chip.">
      <div className="grid-4">
        <div className="sl-stat">
          <span className="sl-stat-label">Active learners</span>
          <span className="sl-stat-value">1,284</span>
          <span className="sl-stat-delta up"><Icon.ArrowUp size={12}/> 12.4% vs last week</span>
        </div>
        <div className="sl-stat">
          <span className="sl-stat-label">Completion rate</span>
          <span className="sl-stat-value">67%</span>
          <span className="sl-stat-delta up"><Icon.ArrowUp size={12}/> 2.1 pts</span>
        </div>
        <div className="sl-stat">
          <span className="sl-stat-label">Avg. quiz score</span>
          <span className="sl-stat-value">82.4</span>
          <span className="sl-stat-delta down"><Icon.ArrowDown size={12}/> 1.8 pts</span>
        </div>
        <div className="sl-stat">
          <span className="sl-stat-label">Courses in review</span>
          <span className="sl-stat-value">14</span>
          <span className="sl-stat-delta" style={{ color: "var(--fg-muted)" }}>Stable</span>
        </div>
      </div>
    </Section>
  );
}

function EmptyStateSection() {
  return (
    <Section id="empty" kicker="Data" title="Empty states"
      lead="Same structure across the app: iconographic slot, clear title, one supportive sentence, one primary action.">
      <Example pad="sm" plain>
        <div className="sl-empty" style={{ width: "100%" }}>
          <div className="sl-empty-ico"><Icon.Folder size={20}/></div>
          <h4 className="sl-empty-title">No courses yet</h4>
          <p className="sl-empty-desc">Create your first course to invite learners and start tracking completion.</p>
          <Button variant="brand" icon={<Icon.Plus size={14}/>}>New course</Button>
        </div>
      </Example>
      <Example title="Search / filter" pad="sm" plain>
        <div className="sl-empty" style={{ width: "100%" }}>
          <div className="sl-empty-ico"><Icon.Search size={20}/></div>
          <h4 className="sl-empty-title">No matches</h4>
          <p className="sl-empty-desc">Try removing a filter or broadening your search.</p>
          <Button variant="outline">Clear filters</Button>
        </div>
      </Example>
    </Section>
  );
}

function SkeletonSection() {
  return (
    <Section id="skeleton" kicker="Data" title="Skeleton"
      lead="Animated placeholders while data loads. Match the shape of the final content.">
      <Example title="Row" stack>
        <div style={{ display:"flex", alignItems:"center", gap: 12 }}>
          <span className="sl-skel" style={{ width: 40, height: 40, borderRadius: "50%" }}/>
          <div style={{ display:"flex", flexDirection:"column", gap: 6, flex: 1 }}>
            <span className="sl-skel" style={{ width: "40%", height: 12 }}/>
            <span className="sl-skel" style={{ width: "70%", height: 10 }}/>
          </div>
        </div>
      </Example>
      <Example title="Card">
        <div style={{ width: 260, border: "1px solid var(--border)", borderRadius: "var(--r-lg)", overflow: "hidden", background: "var(--surface)" }}>
          <span className="sl-skel" style={{ width: "100%", height: 120, display: "block", borderRadius: 0 }}/>
          <div style={{ padding: 14, display:"flex", flexDirection:"column", gap: 8 }}>
            <span className="sl-skel" style={{ width: "75%", height: 14 }}/>
            <span className="sl-skel" style={{ width: "50%", height: 12 }}/>
          </div>
        </div>
      </Example>
    </Section>
  );
}

export { TableSection, StatCardSection, EmptyStateSection, SkeletonSection };