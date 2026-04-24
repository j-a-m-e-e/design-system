import React from 'react';
import { Icon } from './icons.jsx';
export { Icon };

const { useState, useEffect, useRef, useMemo } = React;

export function cn(...xs) { return xs.filter(Boolean).join(" "); }

/* ============ Button ============ */
export function Button({ variant = "default", size = "md", pill, icon, iconRight, children, className, ...rest }) {
  return (
    <button
      className={cn(
        "sl-btn",
        `sl-btn--${variant}`,
        size !== "md" && `sl-btn--${size}`,
        pill && "sl-btn--pill",
        !children && icon && "sl-btn--icon",
        className
      )}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}

/* ============ Input ============ */
export function Input({ className, error, ...rest }) {
  return <input className={cn("sl-input", error && "sl-input--error", className)} {...rest} />;
}
export function Textarea({ className, error, ...rest }) {
  return <textarea className={cn("sl-textarea", error && "sl-textarea--error", className)} {...rest} />;
}
export function Field({ label, hint, error, children, htmlFor }) {
  return (
    <div className="sl-field-group">
      {label && <label className="sl-label" htmlFor={htmlFor}>{label}</label>}
      {children}
      {error ? <span className="sl-error"><Icon.Alert size={12}/> {error}</span>
            : hint ? <span className="sl-hint">{hint}</span> : null}
    </div>
  );
}
export function InputWithIcon({ icon, ...rest }) {
  return (
    <div className="sl-input-wrap">
      <span className="sl-input-icon">{icon}</span>
      <Input {...rest} />
    </div>
  );
}

/* ============ Checkbox / Radio / Switch ============ */
export function Checkbox({ checked, onChange, label }) {
  const [on, set] = useState(!!checked);
  useEffect(() => { if (checked !== undefined) set(!!checked); }, [checked]);
  const toggle = () => { const v = !on; set(v); onChange && onChange(v); };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <span className="sl-check" data-checked={on} onClick={toggle} role="checkbox" aria-checked={on} tabIndex={0} />
      {label && <span style={{ fontSize: "var(--text-sm)" }}>{label}</span>}
    </label>
  );
}
export function Radio({ checked, onChange, label, name }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <span className="sl-radio" data-checked={!!checked} onClick={onChange} tabIndex={0} role="radio" aria-checked={!!checked} />
      {label && <span style={{ fontSize: "var(--text-sm)" }}>{label}</span>}
    </label>
  );
}
export function Switch({ checked, onChange, size = "md" }) {
  const [on, set] = useState(!!checked);
  useEffect(() => { if (checked !== undefined) set(!!checked); }, [checked]);
  return (
    <span
      className={cn("sl-switch", size === "lg" && "sl-switch--lg")}
      data-checked={on}
      onClick={() => { const v = !on; set(v); onChange && onChange(v); }}
      role="switch" aria-checked={on} tabIndex={0}
    />
  );
}

/* ============ Slider ============ */
export function Slider({ value = 50, min = 0, max = 100, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  const ref = useRef(null);
  const drag = (e) => {
    const el = ref.current; if (!el) return;
    const move = (ev) => {
      const r = el.getBoundingClientRect();
      const x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      const p = Math.max(0, Math.min(1, x / r.width));
      const v = Math.round(min + p * (max - min));
      onChange && onChange(v);
    };
    move(e);
    const up = () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };
  return (
    <div className="sl-slider" ref={ref} onMouseDown={drag} style={{ width: "100%" }}>
      <div className="sl-slider-track">
        <div className="sl-slider-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="sl-slider-thumb" style={{ left: `${pct}%` }} />
    </div>
  );
}

/* ============ Badge ============ */
export function Badge({ variant = "neutral", dot, children, className, ...rest }) {
  return (
    <span className={cn("sl-badge", `sl-badge--${variant}`, dot && "sl-badge--dot", className)} {...rest}>
      {children}
    </span>
  );
}

/* ============ Avatar ============ */
export function Avatar({ size = "md", src, alt, initials, className }) {
  return (
    <span className={cn("sl-avatar", `sl-avatar--${size}`, className)}>
      {src ? <img src={src} alt={alt || ""} /> : (initials || (alt ? alt.slice(0,2).toUpperCase() : ""))}
    </span>
  );
}
export function AvatarGroup({ items = [], max = 4, size = "md" }) {
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  return (
    <span className="sl-avatar-group">
      {shown.map((a, i) => <Avatar key={i} size={size} {...a} />)}
      {extra > 0 && <Avatar size={size} initials={`+${extra}`} />}
    </span>
  );
}

/* ============ Tooltip (demo shows always) ============ */
export function Tooltip({ label, children, alwaysOpen }) {
  const [open, set] = useState(!!alwaysOpen);
  return (
    <span className="sl-tooltip-wrap"
          onMouseEnter={() => !alwaysOpen && set(true)}
          onMouseLeave={() => !alwaysOpen && set(false)}>
      {children}
      {open && <span className="sl-tooltip" role="tooltip">{label}</span>}
    </span>
  );
}

/* ============ Tabs (underline + pills) ============ */
export function Tabs({ items = [], value, onChange, variant = "underline" }) {
  const [v, set] = useState(value ?? items[0]?.value);
  useEffect(() => { if (value !== undefined) set(value); }, [value]);
  return (
    <div className={cn("sl-tabs", variant === "pills" && "sl-tabs--pills")}>
      {items.map(it => (
        <button
          key={it.value}
          className="sl-tab"
          aria-selected={v === it.value}
          onClick={() => { set(it.value); onChange && onChange(it.value); }}
        >{it.label}</button>
      ))}
    </div>
  );
}

/* ============ Progress ============ */
export function Progress({ value = 0, variant, size }) {
  return (
    <div className={cn("sl-progress", variant && `sl-progress--${variant}`, size === "sm" && "sl-progress--sm")}>
      <div className="sl-progress-fill" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

/* ============ Breadcrumb ============ */
export function Breadcrumbs({ items = [] }) {
  return (
    <nav className="sl-crumbs" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {i === items.length - 1
            ? <span className="current">{it.label}</span>
            : <a href={it.href || "#"}>{it.label}</a>}
        </React.Fragment>
      ))}
    </nav>
  );
}

/* ============ Select (as styled button demo) ============ */
export function Select({ value, options = [], onChange, placeholder = "Select..." }) {
  const [open, set] = useState(false);
  const [v, setV] = useState(value);
  const ref = useRef(null);
  useEffect(() => { if (value !== undefined) setV(value); }, [value]);
  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) set(false); };
    window.addEventListener("mousedown", onDoc);
    return () => window.removeEventListener("mousedown", onDoc);
  }, []);
  const sel = options.find(o => o.value === v);
  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button
        type="button"
        className="sl-select"
        onClick={() => set(!open)}
        style={{ justifyContent: "space-between", cursor: "pointer" }}
      >
        <span style={{ color: sel ? "var(--fg)" : "var(--fg-placeholder)" }}>
          {sel ? sel.label : placeholder}
        </span>
        <Icon.ChevronDown size={16} className="" />
      </button>
      {open && (
        <div className="sl-menu" style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 10 }}>
          {options.map(o => (
            <div key={o.value} className="sl-menu-item"
                 onClick={() => { setV(o.value); onChange && onChange(o.value); set(false); }}>
              {o.label}
              {v === o.value && <Icon.Check size={14} style={{ marginLeft: "auto" }} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============ Alert ============ */
export function Alert({ variant = "info", title, children, icon }) {
  const IcoMap = { info: Icon.Info, success: Icon.CheckCircle, warning: Icon.Alert, danger: Icon.XCircle };
  const Ico = icon || IcoMap[variant];
  return (
    <div className={cn("sl-alert", `sl-alert--${variant}`)}>
      <span className="sl-alert-ico"><Ico size={18}/></span>
      <div style={{ flex: 1 }}>
        {title && <div className="sl-alert-title">{title}</div>}
        <div className="sl-alert-body">{children}</div>
      </div>
    </div>
  );
}

/* ============ Kbd ============ */
export function Kbd({ children }) { return <span className="kbd">{children}</span>; }

/* ============ Example wrapper ============ */
export function Example({ title, children, pad, stack, center, plain }) {
  return (
    <div className="example">
      {title && <div className="example-header"><span>{title}</span></div>}
      <div className={cn("example-body", stack && "stack", pad === "sm" && "pad-sm", center && "center", plain && "plain")}>
        {children}
      </div>
    </div>
  );
}

/* ============ Section wrappers ============ */
export function Section({ id, kicker, title, lead, children }) {
  return (
    <section className="sec" id={id}>
      {kicker && <div className="sec-kicker">{kicker}</div>}
      <h2 className="sec-title">{title}</h2>
      {lead && <p className="sec-lead">{lead}</p>}
      {children}
    </section>
  );
}
export function Sub({ id, title, desc, children }) {
  return (
    <div className="sub" id={id}>
      {title && <h3 className="sub-title">{title}</h3>}
      {desc && <p className="sub-desc">{desc}</p>}
      {children}
    </div>
  );
}