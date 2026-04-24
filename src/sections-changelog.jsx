import React from 'react';
import { Section, Sub } from './primitives.jsx';

function ChangelogSection() {
  const rows = [
    ["Button system", "60 combos (Size×Style×Type×Appearance×State)", "6 variants × 3 sizes, pill/icon modifiers", "Removed redundant combos; state handled by CSS, not props"],
    ["Course Item", "Course-Item, Course-Item2, Course-Item-Variant2", "Single Course Item w/ `layout=grid|list` and `density=comfortable|compact`", "Merged; dropped visual tweaks that duplicated parent surface"],
    ["Tab nav", "Tab-Nav, Tab-Nav2", "Single Tabs w/ `variant=underline|pills`", "Merged"],
    ["Typography", "Geist + Inter + Noto Sans + Poppins + Grape Nuts + DM Sans", "Inter (UI) + Geist (display) + JetBrains Mono (code)", "Removed 3 families"],
    ["Colors", "8 named scales, ad-hoc", "7 scales × 11 steps + semantic tokens", "Added step 25 & 800 for darker dark-mode surfaces; unified brand ramp around #217BD6"],
    ["Icons", "Vuesax/Iconsax (3k+ uses)", "Lucide", "Requires migration; all existing icon names have Lucide equivalents"],
    ["Avatars", "AvatarDefault, AvatarDefault2, AvatarIcon, AvatarText", "Single Avatar w/ `size` + content fallback", "Merged"],
    ["Alerts", "AlertInlineBrand + AlertToastError + Success-Dialogs", "Alert (4 intents) + Toast + Dialog; all share a palette", "Reshaped as inline vs transient vs modal"],
    ["Cards", "Cards---Learn-App, Banner-Long-Card, Card---On-Hover, Content-Card", "Card primitive + Course Item + Content Card + Stat Card", "Role-based, not surface-based"],
    ["Inline Page Search", "Inline-Page-Search", "Command palette (⌘K)", "Rebuilt with shortcuts"],
    ["Iconography states", "Iconsax/linear, Iconsax/bold inconsistent", "One family, weight via `strokeWidth`", "Consistent"],
    ["Date picker", "Date-Picker (single)", "Date-Picker (single) + Date Range", "Added range mode"],
    ["Spacing", "Free-form", "4px grid with named tokens", "All paddings/gaps now token-driven"],
    ["Dark mode", "Not supported", "First-class — every token resolves in both themes", "New"],
  ];
  return (
    <Section id="changelog" kicker="Migration" title="Consolidation changelog"
      lead="What merged, what replaced what, and what to migrate in product code. Moved surgically — intentional variants kept as props, near-duplicates collapsed.">
      <div className="example" style={{ overflow: "auto" }}>
        <table className="sl-table" style={{ minWidth: 760 }}>
          <thead><tr><th>Area</th><th>v2.0</th><th>v3.0</th><th>Notes</th></tr></thead>
          <tbody>
            {rows.map((r,i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{r[0]}</td>
                <td style={{ color:"var(--fg-muted)" }}>{r[1]}</td>
                <td>{r[2]}</td>
                <td style={{ color:"var(--fg-muted)" }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sub title="Still to do (next iteration)">
        <ul style={{ color: "var(--fg-muted)", lineHeight: 1.8, fontSize: "var(--text-md)", paddingLeft: 20 }}>
          <li>Data-viz palette (charts, progress gradients) — pull from existing scales.</li>
          <li>Rich text editor toolbar (shown inside the authoring panel, not yet a standalone spec).</li>
          <li>Certificate template — depends on product direction.</li>
          <li>Email-safe component subset for notifications.</li>
        </ul>
      </Sub>
    </Section>
  );
}

export { ChangelogSection };