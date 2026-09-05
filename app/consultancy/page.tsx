import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import { revealProps } from '@/lib/reveal';

export const metadata: Metadata = {
  title: 'Consultancy | Eaquirs Tech',
  description:
    'Technical advisory, architecture review, AI strategy, and fractional CTO â€” honest guidance for engineering teams navigating complex decisions.',
};

function AnchorSection({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-28">{children}</section>;
}

const stats = [
  { value: '4', label: 'Production platforms reviewed and built' },
  { value: '6 wks', label: 'Fastest full system replacement' },
  { value: '95%', label: 'Performance gain documented post-rescue' },
  { value: '100%', label: 'Clients who received written scope before commit' },
];

export default function ConsultancyPage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="section-dark relative overflow-hidden min-h-[90vh] flex items-center pt-36 pb-20">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-site relative w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-micro font-bold uppercase tracking-label text-amber mb-5">Technical Consultancy</p>
            <h1 className="text-h1 font-bold leading-[1.05] text-white">
              Clarity on the decisions<br className="hidden md:block" /> that are hard to reverse
            </h1>
            <p className="mt-6 text-body-lg text-on-dark-muted max-w-2xl mx-auto">
              We advise founders, engineering teams, and investors on the technical choices that compound over time â€”
              architecture, AI adoption, acquisition targets, and systems under stress.
              Short engagements. Honest findings. Written deliverables.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                Book a discovery call
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg" className="text-white/70 hover:text-white">
                How it works
              </Button>
            </div>
            {/* Inline service pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {['Tech Strategy', 'AI Advisory', 'Architecture Review', 'Due Diligence', 'Fractional CTO', 'Security Audit'].map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-micro font-medium text-on-dark-muted backdrop-blur-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Stats bar â”€â”€ */}
      <section className="border-b border-line bg-white">
        <div className="container-site py-12">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-display font-bold text-amber-deep leading-none">{s.value}</dt>
                <dd className="mt-2 text-body-sm text-body">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* â”€â”€ Quick nav â”€â”€ */}
      <nav className="sticky top-[var(--header-h)] z-30 border-b border-line bg-white/95 backdrop-blur-sm">
        <div className="container-site">
          <ul className="flex gap-0 overflow-x-auto scrollbar-none">
            {[
              ['Tech Strategy', '#tech-strategy'],
              ['AI Consulting', '#ai'],
              ['Architecture Review', '#arch'],
              ['Digital Transformation', '#digital'],
              ['Security', '#security'],
              ['Fractional CTO', '#cto'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block whitespace-nowrap px-5 py-4 text-body-sm font-medium text-body transition-colors duration-fast hover:text-amber"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          TECH STRATEGY
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="tech-strategy">
        <div className="section-y bg-white min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
              <div className="lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">Tech Strategy</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">Architecture decisions that compound</h2>
                <p className="mt-5 text-body text-body leading-relaxed">
                  The stack you choose in month one determines your velocity in year two. We help you pick the right tools,
                  the right team structure, and the right boundaries â€” with the experience of having built on them in production.
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {[
                    'Stack selection for your traffic and team profile',
                    'Build vs buy vs integrate â€” honest analysis',
                    'Vendor evaluation and negotiation support',
                    'Technical roadmap documentation for investors or board',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-body-sm text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline" size="md" className="mt-8" arrow>
                  Book a strategy session
                </Button>
              </div>

              <div className="grid gap-5">
                {[
                  {
                    title: 'Stack selection',
                    desc: 'We evaluate your options against your team skills, scaling profile, and time-to-market requirements â€” not the trend of the quarter. You get a written recommendation with tradeoff analysis.',
                  },
                  {
                    title: 'Technical roadmap',
                    desc: 'A 12-month engineering roadmap that sequences work by risk and value, not by what is most exciting to build. Readable by non-technical stakeholders.',
                  },
                  {
                    title: 'Vendor & outsourcing advisory',
                    desc: 'Evaluating an agency, freelancer, or offshore team? We read the code, assess the proposal, and tell you exactly what you are buying before you sign.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                    <h4 className="text-[1.05rem] font-semibold text-ink">{item.title}</h4>
                    <p className="mt-2 text-body-sm text-body leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          AI CONSULTING
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="ai">
        <div className="section-y section-light min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <SectionHeading
              eyebrow="AI Consulting"
              title="Where AI adds real value in your product"
              intro="Most AI initiatives fail not because of the models, but because of the integration. We assess your workflows, identify genuine AI leverage points, and build a delivery plan that avoids the common traps."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: 'ai' as IconName,
                  title: 'AI opportunity mapping',
                  desc: 'We map your internal and customer-facing workflows to identify where AI reduces cost, speeds delivery, or meaningfully improves outcomes â€” and where it would be noise.',
                },
                {
                  icon: 'layers' as IconName,
                  title: 'LLM provider selection',
                  desc: 'OpenAI, Anthropic, Gemini, Llama â€” the right choice depends on your latency requirements, data sensitivity, cost envelope, and output quality needs. We produce a written comparison.',
                },
                {
                  icon: 'shield' as IconName,
                  title: 'AI risk & reliability',
                  desc: 'Hallucination rates, prompt injection risks, data residency, PII exposure â€” we audit your proposed AI architecture for the risks that sink production deployments.',
                },
                {
                  icon: 'chart' as IconName,
                  title: 'AI ROI assessment',
                  desc: 'We quantify the expected cost reduction or revenue impact of each AI initiative before a line of code is written. Baseline measurement included.',
                },
                {
                  icon: 'rocket' as IconName,
                  title: 'Prototype to production',
                  desc: 'Have an AI feature that works in a notebook but not at scale? We scope and execute the hardening â€” evaluation framework, latency optimization, monitoring.',
                },
                {
                  icon: 'cpu' as IconName,
                  title: 'AI governance framework',
                  desc: 'Policies for how AI is used internally, how outputs are reviewed, and how incidents are handled. Essential for regulated industries and enterprise buyers.',
                },
              ].map((svc) => (
                <div key={svc.title} className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-0.5 hover:shadow-card-hover hover:border-amber/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-tint text-amber-deep transition-colors duration-base group-hover:bg-amber group-hover:text-white">
                    <Icon name={svc.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-ink">{svc.title}</h3>
                    <p className="mt-2 text-body-sm text-body leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-amber/30 bg-amber-wash p-8 md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-caption font-bold uppercase tracking-label text-amber-deep mb-2">Live AI platform</p>
                  <h3 className="text-[1.3rem] font-semibold text-ink">OpenInterview.me â€” what good AI integration looks like</h3>
                  <p className="mt-3 text-body-sm text-body">
                    Role-specific interview questions generated by LangChain + OpenAI. Adaptive follow-ups based on candidate responses.
                    Multi-tenant SaaS with Stripe billing. Serving real hiring workflows â€” not a demo.
                  </p>
                </div>
                <Button href="/work" variant="outline" size="md" className="shrink-0" arrow>
                  View the platform
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          ARCHITECTURE REVIEW
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="arch">
        <div className="section-y bg-white min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <div className="grid items-start gap-14 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">Architecture Review</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">
                  An independent audit of your system before it becomes a crisis
                </h2>
                <p className="mt-5 text-body text-body leading-relaxed">
                  Most architecture problems are visible in the code before they cause an outage.
                  We review your codebase, data model, API design, infrastructure setup, and CI/CD pipeline â€” then deliver
                  a prioritized written report with specific findings and recommended actions.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {[
                    { title: 'What we look at', items: ['Data model & schema design', 'API boundaries & coupling', 'Authentication & authorization', 'Database query performance', 'Deployment & rollback strategy', 'Secret & config management'] },
                    { title: 'What you get', items: ['Written findings document', 'Risk severity rating', 'Prioritized action list', 'Cost-of-remediation estimates', 'Follow-up call to walk through', 'Optional implementation support'] },
                  ].map((col) => (
                    <div key={col.title}>
                      <p className="text-caption font-bold uppercase tracking-label text-muted mb-4">{col.title}</p>
                      <ul className="flex flex-col gap-2.5">
                        {col.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-body-sm text-body">
                            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:sticky lg:top-32 flex flex-col gap-5">
                <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
                  <p className="text-caption font-bold uppercase tracking-label text-amber-deep mb-4">Engagement format</p>
                  <div className="space-y-4">
                    {[
                      { step: '01', title: 'Repo & infrastructure access', desc: 'Read-only access to codebase, database schema, and deployment configs.' },
                      { step: '02', title: '3â€“5 day deep-dive', desc: 'We read the full codebase, run tests, check migrations, audit dependencies.' },
                      { step: '03', title: 'Written findings delivered', desc: 'Prioritized report with risk ratings, specific line-level references, and actions.' },
                      { step: '04', title: 'Walkthrough call', desc: 'We present the findings, answer questions, and recommend implementation order.' },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber text-white text-micro font-bold">{s.step}</span>
                        <div>
                          <p className="text-body-sm font-semibold text-ink">{s.title}</p>
                          <p className="text-micro text-body mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Button href="/contact" size="md" arrow className="bg-amber text-white hover:bg-amber-bright">
                  Request an architecture review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          DIGITAL TRANSFORMATION + OUTSOURCING
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="digital">
        <div className="section-y section-light min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <SectionHeading
              eyebrow="Digital Transformation"
              title="Modernise operations â€” without the disruption"
              intro="Digital transformation fails when it means replacing everything at once. We take a systematic approach: identify the highest-leverage change, prove it in production, then scale."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {[
                {
                  id: 'digital-ops',
                  title: 'Operations digitisation',
                  desc: 'Replacing spreadsheets, paper-based processes, and disconnected tools with a single integrated system. We have done this for hospitals, property developers, and manufacturers.',
                  points: ['Current-state process mapping', 'Gap and risk identification', 'Phased rollout plan', 'Change management support', 'Staff training documentation'],
                },
                {
                  id: 'outsourcing',
                  title: 'IT outsourcing advisory',
                  desc: 'Evaluating whether to build in-house, outsource, or use a hybrid approach â€” and choosing the right partner when you outsource. We have seen both sides of this equation.',
                  points: ['Build vs buy analysis', 'Vendor selection criteria', 'Proposal evaluation', 'Contract review guidance', 'Transition planning'],
                },
              ].map((item) => (
                <AnchorSection key={item.id} id={item.id}>
                  <div className="rounded-2xl border border-line bg-white p-8 shadow-card md:p-10">
                    <h3 className="text-[1.2rem] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-body-sm text-body leading-relaxed">{item.desc}</p>
                    <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-body-sm text-body">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnchorSection>
              ))}
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECURITY & COMPLIANCE
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="security">
        <div className="section-y section-dark relative overflow-hidden">
          <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
          <div className="container-site relative">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.5fr]">
              <div className="lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">Security & Compliance</p>
                <h2 className="text-h2 font-bold text-white leading-tight">
                  Know your exposure before your users do
                </h2>
                <p className="mt-5 text-body text-on-dark-muted leading-relaxed">
                  Security issues are not found â€” they are disclosed. We assess your application for
                  OWASP Top 10 vulnerabilities, authentication gaps, data exposure, and compliance misalignments
                  before attackers or regulators do.
                </p>
                <Button href="/contact" size="md" className="mt-8 bg-amber text-white hover:bg-amber-bright" arrow>
                  Request a security audit
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'OWASP Top 10 assessment', desc: 'Injection, broken auth, XSS, CSRF, IDOR, and seven more â€” tested against your running application, not just the code.' },
                  { title: 'Authentication & session review', desc: 'JWT handling, session expiry, refresh token rotation, MFA implementation, and OAuth integration security.' },
                  { title: 'Data exposure audit', desc: 'Sensitive data in logs, over-exposed API responses, PII in error messages, insecure file storage.' },
                  { title: 'Dependency vulnerability scan', desc: 'Known CVEs in your npm/pip/dotnet packages, with severity triage and upgrade path recommendations.' },
                  { title: 'Infrastructure security', desc: 'IAM policies, open ports, unencrypted storage, missing TLS, weak secrets management.' },
                  { title: 'Compliance gap analysis', desc: 'GDPR, HIPAA, PCI-DSS â€” we identify the gaps between your current state and the standard, with a remediation roadmap.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-dark-border bg-dark-card p-6">
                    <div aria-hidden className="mb-4 h-1 w-6 rounded-full bg-amber" />
                    <h4 className="text-[1rem] font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-body-sm text-on-dark-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          FRACTIONAL CTO + PRODUCT CONSULTING
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="cto">
        <div className="section-y bg-white min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <div className="grid items-start gap-14 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">Fractional CTO</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">
                  Senior technical leadership â€” without the full-time cost
                </h2>
                <p className="mt-5 text-body text-body leading-relaxed">
                  Early-stage companies rarely need a full-time CTO but almost always need one. We provide senior technical leadership
                  on a part-time, fractional basis â€” from hiring decisions to board presentations, from vendor selection to
                  engineering culture.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    'Technical hiring and interview process',
                    'Engineering team structure and growth plan',
                    'Code review standards and pull request culture',
                    'On-call rota and incident response process',
                    'Board and investor technical updates',
                    'Vendor and agency management',
                    'Technical due diligence for fundraising',
                    'Architecture sign-off on major decisions',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-body-sm text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:sticky lg:top-32 flex flex-col gap-5">
                <AnchorSection id="product">
                  <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
                    <p className="text-caption font-bold uppercase tracking-label text-amber-deep mb-4">Product Consulting</p>
                    <h3 className="text-[1.1rem] font-semibold text-ink">Scope Â· MVP Â· roadmap</h3>
                    <p className="mt-3 text-body-sm text-body leading-relaxed">
                      Before you hire a team to build, we help you define exactly what to build, in what order,
                      and how to measure whether it is working. No wasted sprints.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {['User story mapping', 'MVP feature prioritization', 'Technical acceptance criteria', 'Success metrics definition'].map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-body-sm text-body">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnchorSection>

                <Button href="/contact" size="md" className="bg-amber text-white hover:bg-amber-bright" arrow>
                  Discuss fractional CTO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â”€â”€ How it works â”€â”€ */}
      <section id="how-it-works" className="section-y section-light min-h-[85vh] flex flex-col justify-center">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our process"
            title="How a consultancy engagement works"
            intro="Short engagements with clear deliverables. No retainers. No vague ongoing advisory. A defined problem, a defined output, and an honest answer."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: 'Discovery call', desc: 'A 30-minute conversation â€” what you are dealing with, what you have tried, what you need answered. No charge, no obligation.' },
              { num: '02', title: 'Scoped proposal', desc: 'We send a written proposal: the engagement scope, timeline, format of deliverable, and a fixed fee. No hourly billing.' },
              { num: '03', title: 'Deep-dive work', desc: 'Codebase access, team calls, infrastructure review â€” we go hands-on. Everything stays under NDA.' },
              { num: '04', title: 'Written deliverable', desc: 'A report, assessment, or roadmap document â€” specific, prioritized, and actionable. Followed by a walkthrough call.' },
            ].map((step) => (
              <div key={step.num} className="flex flex-col gap-4 rounded-xl border border-line bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber text-white text-body font-bold shadow-amber">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-body-sm text-body leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€ */}
      <section className="section-y section-dark relative overflow-hidden">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div className="container-site relative text-center">
          <h2 className="text-h2 font-bold text-white">Start with a free 30-minute call</h2>
          <p className="mt-5 text-body text-on-dark-muted max-w-xl mx-auto">
            Tell us what you are evaluating. We will be direct about whether we can help and what it would look like.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
              Book a discovery call
            </Button>
            <Button href="/services" variant="ghost" size="lg" className="text-white/70 hover:text-white">
              See our engineering services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

