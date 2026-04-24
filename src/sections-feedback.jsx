import React from 'react';
import { Icon, Example, Section, Sub, Button, Alert } from './primitives.jsx';

function ToastSection() {
  return (
    <Section id="toast" kicker="Feedback" title="Toast"
      lead="Transient, corner-mounted confirmation. Auto-dismiss ~4s. Dismissable with X.">
      <Example pad="sm" plain>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 400 }}>
          <div className="sl-toast">
            <span style={{ color: "var(--success)" }}><Icon.CheckCircle size={18}/></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: "var(--text-sm)" }}>Course published</div>
              <div style={{ color: "var(--fg-muted)", fontSize: "var(--text-sm)" }}>Learners can now enroll in "UX Research Fundamentals".</div>
            </div>
            <button className="sl-toast-close"><Icon.X size={14}/></button>
          </div>
          <div className="sl-toast">
            <span style={{ color: "var(--danger)" }}><Icon.XCircle size={18}/></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: "var(--text-sm)" }}>Upload failed</div>
              <div style={{ color: "var(--fg-muted)", fontSize: "var(--text-sm)" }}>Check your connection and try again.</div>
            </div>
            <button className="sl-toast-close"><Icon.X size={14}/></button>
          </div>
        </div>
      </Example>
    </Section>
  );
}

function BannerSection() {
  return (
    <Section id="banner" kicker="Feedback" title="Banner"
      lead="Persistent, top-of-page announcements. Use for broad changes (maintenance, beta flags).">
      <Example stack pad="sm" plain>
        <div className="sl-banner sl-banner--brand">
          <Icon.Sparkles size={16}/>
          <span>You're previewing Sodium Learn 3.0 — share feedback in #design-system.</span>
          <span style={{ flex: 1 }}/>
          <Button variant="ghost" size="sm" style={{ color: "inherit" }}>Dismiss</Button>
        </div>
        <div className="sl-banner">
          <Icon.Info size={16}/>
          <span>Scheduled maintenance on Sat 20 Apr, 02:00–03:00 UTC.</span>
        </div>
      </Example>
    </Section>
  );
}

function AlertSection() {
  return (
    <Section id="alert" kicker="Feedback" title="Inline alert"
      lead="In-page callouts tied to form or content context. Four intents.">
      <Example stack pad="sm">
        <Alert variant="info" title="Heads up">Enrollment closes Friday — late submissions won't be graded.</Alert>
        <Alert variant="success" title="Saved">Your draft will stay here until you publish.</Alert>
        <Alert variant="warning" title="Check your answers">You have 2 unanswered questions before submitting.</Alert>
        <Alert variant="danger" title="Submission failed">We couldn't save your progress. Try again in a moment.</Alert>
      </Example>
    </Section>
  );
}

function ResultStateSection() {
  return (
    <Section id="result" kicker="Feedback" title="Result states"
      lead="Full-page success/warning/error, used after major flows (course published, quiz submitted, payment failed).">
      <div className="grid-2">
        <Example plain>
          <div className="sl-result sl-result--success">
            <div className="sl-result-ico"><Icon.CheckCircle size={28}/></div>
            <h3 className="sl-result-title">Course published</h3>
            <p className="sl-result-desc">"UX Research Fundamentals" is now live. We'll email you when learners join.</p>
            <div style={{ display:"flex", gap: 8, justifyContent:"center" }}>
              <Button variant="outline">View course</Button>
              <Button variant="brand">Share link</Button>
            </div>
          </div>
        </Example>
        <Example plain>
          <div className="sl-result sl-result--danger">
            <div className="sl-result-ico"><Icon.XCircle size={28}/></div>
            <h3 className="sl-result-title">Quiz wasn't submitted</h3>
            <p className="sl-result-desc">Your connection dropped. Your answers are saved locally — retry to submit.</p>
            <div style={{ display:"flex", gap: 8, justifyContent:"center" }}>
              <Button variant="ghost">Save &amp; exit</Button>
              <Button variant="brand">Retry submit</Button>
            </div>
          </div>
        </Example>
      </div>
    </Section>
  );
}

export { ToastSection, BannerSection, AlertSection, ResultStateSection };