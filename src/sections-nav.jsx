import React from 'react';
import { Icon, Example, Section, Sub, Button, InputWithIcon, Badge, Avatar, Kbd } from './primitives.jsx';

function SidebarSection() {
  return (
    <Section id="sidebar" kicker="Navigation" title="Sidebar"
      lead="Primary app navigation. Groups of labeled items with optional counts.">
      <Example pad="sm" plain center>
        <div style={{ display: "flex", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
          <aside className="sl-sidenav">
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 10px 12px" }}>
              <div className="sl-topnav-logo">S</div>
              <div style={{ fontWeight: 600, fontFamily: "var(--font-display)" }}>Sodium</div>
            </div>
            <div className="sl-sidenav-group">Main</div>
            <div className="sl-sidenav-item" aria-current="page"><Icon.Home size={16}/> Home</div>
            <div className="sl-sidenav-item"><Icon.Book size={16}/> Courses <Badge variant="brand">12</Badge></div>
            <div className="sl-sidenav-item"><Icon.Layers size={16}/> Library</div>
            <div className="sl-sidenav-item"><Icon.Users size={16}/> Learners</div>
            <div className="sl-sidenav-group">Author</div>
            <div className="sl-sidenav-item"><Icon.Edit size={16}/> Drafts</div>
            <div className="sl-sidenav-item"><Icon.Trophy size={16}/> Quizzes</div>
            <div className="sl-sidenav-item"><Icon.Target size={16}/> Outcomes</div>
            <div style={{ flex: 1 }}/>
            <div className="sl-sidenav-item"><Icon.Settings size={16}/> Settings</div>
            <div className="sl-sidenav-item"><Icon.Logout size={16}/> Sign out</div>
          </aside>
          <div style={{ flex: 1, minWidth: 280, background: "var(--bg-subtle)" }}/>
        </div>
      </Example>
    </Section>
  );
}

function TopnavSection() {
  return (
    <Section id="topnav" kicker="Navigation" title="Top nav"
      lead="Thin bar above the page content. Logo, breadcrumb or title, search, quick actions.">
      <Example pad="sm" plain>
        <div style={{ width: "100%", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
          <div className="sl-topnav">
            <div className="sl-topnav-logo">S</div>
            <span className="sl-topnav-crumbs">Library <span style={{ margin: "0 6px", color: "var(--fg-subtle)" }}>/</span> UX Research</span>
            <div className="sl-topnav-spacer"/>
            <div className="sl-topnav-actions">
              <div style={{ width: 260 }}><InputWithIcon icon={<Icon.Search size={14}/>} placeholder="Search"/></div>
              <Button variant="ghost" icon={<Icon.Bell size={16}/>}/>
              <Avatar size="sm" initials="JM"/>
            </div>
          </div>
          <div style={{ height: 80, background: "var(--bg-subtle)" }}/>
        </div>
      </Example>
    </Section>
  );
}

function CommandSection() {
  return (
    <Section id="command" kicker="Navigation" title="Command palette"
      lead="Global keyboard-driven navigation. Trigger: ⌘K. Replaces the old Inline Page Search.">
      <Example pad="sm" plain center>
        <div className="sl-cmd">
          <div className="sl-cmd-search">
            <Icon.Search size={16}/>
            <input placeholder="Type a command or search…" defaultValue=""/>
            <Kbd>esc</Kbd>
          </div>
          <div className="sl-cmd-list">
            <div className="sl-menu-label">Jump to</div>
            <div className="sl-menu-item"><Icon.Home size={14}/> Dashboard<span className="sl-menu-right">G D</span></div>
            <div className="sl-menu-item"><Icon.Book size={14}/> All courses<span className="sl-menu-right">G C</span></div>
            <div className="sl-menu-item"><Icon.Users size={14}/> Learners<span className="sl-menu-right">G L</span></div>
            <div className="sl-menu-label">Actions</div>
            <div className="sl-menu-item"><Icon.Plus size={14}/> New course<span className="sl-menu-right">⌘N</span></div>
            <div className="sl-menu-item"><Icon.Upload size={14}/> Import quiz<span className="sl-menu-right">⌘I</span></div>
            <div className="sl-menu-item"><Icon.Moon size={14}/> Toggle theme<span className="sl-menu-right">⌘⇧T</span></div>
          </div>
        </div>
      </Example>
    </Section>
  );
}

export { SidebarSection, TopnavSection, CommandSection };