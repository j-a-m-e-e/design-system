import React from 'react';
import { Icon, Example, Section, Sub, Button, Badge, Avatar, AvatarGroup, Progress, Alert, InputWithIcon, Tabs, Breadcrumbs } from './primitives.jsx';

function PatternsSection() {
  return (
    <Section id="patterns" kicker="Patterns" title="Composed patterns"
      lead="Pre-built screen compositions built entirely from primitives. Copy these into new product surfaces.">

      <Sub id="pattern-dashboard" title="Learner dashboard" desc="Stat row + resume-learning + recommended.">
        <div className="pattern-frame" style={{ padding: 24 }}>
          <Breadcrumbs items={[{label:"Home",href:"#"},{label:"My learning"}]}/>
          <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", marginTop: 12, marginBottom: 20 }}>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing:"-0.02em", margin: 0 }}>Welcome back, Jamee</h2>
            <Button variant="outline" icon={<Icon.Calendar size={14}/>}>This week</Button>
          </div>
          <div className="grid-4" style={{ marginBottom: 24 }}>
            <div className="sl-stat"><span className="sl-stat-label">Streak</span><span className="sl-stat-value">12 <span style={{ fontSize: 16, color:"var(--fg-muted)", fontWeight: 400 }}>days</span></span><span className="sl-stat-delta up"><Icon.ArrowUp size={12}/> Personal best</span></div>
            <div className="sl-stat"><span className="sl-stat-label">Time learning</span><span className="sl-stat-value">4h 38m</span><span className="sl-stat-delta" style={{ color:"var(--fg-muted)" }}>This week</span></div>
            <div className="sl-stat"><span className="sl-stat-label">In progress</span><span className="sl-stat-value">3</span><span className="sl-stat-delta" style={{ color:"var(--fg-muted)" }}>Courses</span></div>
            <div className="sl-stat"><span className="sl-stat-label">Earned</span><span className="sl-stat-value">2</span><span className="sl-stat-delta up"><Icon.Award size={12}/> Certificates</span></div>
          </div>
          <h3 style={{ fontFamily:"var(--font-display)", fontSize: 20, fontWeight: 600, margin:"0 0 12px" }}>Pick up where you left off</h3>
          <div className="grid-3">
            {[
              { title:"UX Research Fundamentals", prog:72, cover:"" },
              { title:"Accessibility Deep Dive", prog:38, cover:"violet" },
              { title:"Design Critique Playbook", prog:100, cover:"green" },
            ].map((c,i) => (
              <div className="sl-course" key={i}>
                <div className={`sl-course-cover ${c.cover?"sl-course-cover--"+c.cover:""}`}><Badge variant="brand">Chapter 4</Badge></div>
                <div className="sl-course-body">
                  <h4 className="sl-course-title">{c.title}</h4>
                  <Progress value={c.prog} size="sm" variant={c.prog===100?"success":undefined}/>
                  <div className="sl-course-foot">
                    <span style={{ color:"var(--fg-muted)", fontSize: 12 }}>{c.prog}% complete</span>
                    <Button size="sm" variant="brand">Resume</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sub>

      <Sub id="pattern-explore" title="Explore with filters">
        <div className="pattern-frame" style={{ padding: 24 }}>
          <div style={{ display:"flex", gap: 12, alignItems:"center", marginBottom: 16 }}>
            <div style={{ width: 320 }}><InputWithIcon icon={<Icon.Search size={14}/>} placeholder="Search courses"/></div>
            <div style={{ flex: 1 }}/>
            <Tabs variant="pills" items={[{value:"all",label:"All"},{value:"new",label:"New"},{value:"trend",label:"Trending"},{value:"free",label:"Free"}]}/>
          </div>
          <div style={{ display:"flex", gap: 8, flexWrap:"wrap", marginBottom: 20 }}>
            <Button variant="outline" pill size="sm">Design <Badge variant="neutral">24</Badge></Button>
            <Button variant="outline" pill size="sm">Research <Badge variant="neutral">18</Badge></Button>
            <Button variant="outline" pill size="sm">Engineering <Badge variant="neutral">32</Badge></Button>
            <Button variant="outline" pill size="sm">Leadership <Badge variant="neutral">12</Badge></Button>
            <Button variant="ghost" pill size="sm">+ 14 more</Button>
          </div>
          <div className="grid-3">
            {[1,2,3,4,5,6].map(i => (
              <div className="sl-course" key={i}>
                <div className={`sl-course-cover ${["","sl-course-cover--violet","sl-course-cover--green","sl-course-cover--amber","",""][i-1]}`}>
                  <Badge variant="brand">{["Beginner","Intermediate","Advanced","Beginner","Intermediate","Advanced"][i-1]}</Badge>
                </div>
                <div className="sl-course-body">
                  <div className="sl-course-meta"><Icon.Clock size={12}/> {3+i}h {10*i}m<span className="dot"/>{4+i} chapters</div>
                  <h4 className="sl-course-title">{["UX Research Fundamentals","Accessibility Deep Dive","Design Critique Playbook","Intro to Systems Thinking","Writing Research Briefs","Product Storytelling"][i-1]}</h4>
                  <div className="sl-course-foot">
                    <AvatarGroup size="xs" items={[{initials:"JM"},{initials:"AR"}]}/>
                    <span style={{ fontSize: 12, color: "var(--fg-muted)" }}><Icon.Star size={11}/> 4.{i+2} · {100+i*47}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sub>

      <Sub id="pattern-quiz" title="Quiz attempt">
        <div className="pattern-frame" style={{ padding: 28, maxWidth: 720, margin: "0 auto", background: "var(--surface)" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>Question 4 of 11</span>
            <span style={{ fontSize: 12, color: "var(--fg-muted)" }}><Icon.Clock size={11}/> 3:22 remaining</span>
          </div>
          <Progress value={36} size="sm" />
          <h3 style={{ fontFamily:"var(--font-display)", fontSize: 24, fontWeight: 600, margin: "20px 0 20px" }}>
            Which habit best distinguishes researchers who consistently learn something new in an interview?
          </h3>
          <div style={{ display:"flex", flexDirection:"column", gap: 10 }}>
            <div className="sl-quiz-opt"><span className="sl-quiz-letter">A</span><span className="sl-quiz-label">Sticking rigidly to the discussion guide.</span></div>
            <div className="sl-quiz-opt" data-state="selected"><span className="sl-quiz-letter">B</span><span className="sl-quiz-label">Asking follow-ups whenever an answer surprises them.</span></div>
            <div className="sl-quiz-opt"><span className="sl-quiz-letter">C</span><span className="sl-quiz-label">Keeping interviews under 20 minutes.</span></div>
            <div className="sl-quiz-opt"><span className="sl-quiz-letter">D</span><span className="sl-quiz-label">Interviewing only power users.</span></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
            <Button variant="ghost" icon={<Icon.ChevronLeft size={14}/>}>Previous</Button>
            <Button variant="brand" iconRight={<Icon.ArrowRight size={14}/>}>Next</Button>
          </div>
        </div>
      </Sub>

      <Sub id="pattern-admin" title="Admin — course management">
        <div className="pattern-frame" style={{ padding: 24 }}>
          <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom: 4 }}>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing:"-0.02em", margin: 0 }}>Courses</h2>
            <Button variant="brand" icon={<Icon.Plus size={14}/>}>New course</Button>
          </div>
          <p style={{ color: "var(--fg-muted)", marginTop: 0, marginBottom: 20 }}>Manage everything you publish.</p>
          <Tabs items={[{value:"all",label:"All 142"},{value:"pub",label:"Published 96"},{value:"rev",label:"In review 12"},{value:"draft",label:"Drafts 34"}]}/>
          <div style={{ height: 16 }}/>
          <Alert variant="info" title="3 courses are waiting for your review">Assigned to you by Sana K. — average wait 2.4 days.</Alert>
          <div style={{ height: 16 }}/>
          <div className="sl-table-wrap">
            <table className="sl-table">
              <thead><tr><th>Course</th><th>Status</th><th style={{textAlign:"right"}}>Learners</th><th>Completion</th><th>Updated</th><th/></tr></thead>
              <tbody>
                {[
                  {n:"Intro to Systems Thinking",s:"Published",l:284,c:67,u:"2d ago"},
                  {n:"UX Research Fundamentals",s:"Review",l:12,c:14,u:"1h ago"},
                  {n:"Product Storytelling",s:"Published",l:1430,c:82,u:"1w ago"},
                  {n:"Design Critique Playbook",s:"Draft",l:0,c:0,u:"5h ago"},
                ].map((r,i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{r.n}</td>
                    <td><Badge variant={r.s==="Published"?"success":r.s==="Review"?"warning":"neutral"} dot={r.s!=="Draft"}>{r.s}</Badge></td>
                    <td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r.l.toLocaleString()}</td>
                    <td style={{ minWidth: 160 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <Progress size="sm" value={r.c}/>
                        <span style={{ fontSize: 12, color:"var(--fg-muted)" }}>{r.c}%</span>
                      </div>
                    </td>
                    <td style={{ color:"var(--fg-muted)" }}>{r.u}</td>
                    <td style={{ width: 32 }}><Button variant="ghost" size="sm" icon={<Icon.More size={16}/>}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sub>
    </Section>
  );
}

export { PatternsSection };