import { useState } from "react";
import { contact } from "../../data/agcd";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

const ORG_TYPES = [
  "NPO", "NPC", "PBO / FBO", "CBO", "Government department", "Municipality",
  "Corporate / CSI", "Foundation / Donor", "Training institution", "Other",
];

const inputClass =
  "w-full rounded-lg border border-black/15 px-4 py-3 text-sm focus:border-broadcast-blue focus:ring-1 focus:ring-broadcast-blue outline-none bg-white";
const labelClass = "block text-sm font-semibold text-navy mb-1.5";

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

function LearnerForm() {
  const initial = {
    name: "", organization: "", role: "", email: "", cell: "", district: "",
    orgType: ORG_TYPES[0], need: "", coursePreference: "", sponsorship: "No",
    consent: false,
  };
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "AGCD@E-Academy — Learner Registration Interest";
    const body = [
      `Full name: ${form.name}`,
      `Organization name: ${form.organization}`,
      `Role: ${form.role}`,
      `Email: ${form.email}`,
      `Cell number: ${form.cell}`,
      `District / location: ${form.district}`,
      `Organization type: ${form.orgType}`,
      `Main capacity-building need: ${form.need}`,
      `Preferred course option: ${form.coursePreference}`,
      `Sponsorship required: ${form.sponsorship}`,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="l-name" label="Full name">
          <input id="l-name" required type="text" autoComplete="name" value={form.name} onChange={update("name")} className={inputClass} />
        </Field>
        <Field id="l-organization" label="Organization name">
          <input id="l-organization" required type="text" value={form.organization} onChange={update("organization")} className={inputClass} />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="l-role" label="Role">
          <input id="l-role" required type="text" placeholder="e.g. Board member, Finance officer" value={form.role} onChange={update("role")} className={inputClass} />
        </Field>
        <Field id="l-orgType" label="Organization type">
          <select id="l-orgType" value={form.orgType} onChange={update("orgType")} className={inputClass}>
            {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="l-email" label="Email">
          <input id="l-email" required type="email" autoComplete="email" value={form.email} onChange={update("email")} className={inputClass} />
        </Field>
        <Field id="l-cell" label="Cell number">
          <input id="l-cell" required type="tel" autoComplete="tel" value={form.cell} onChange={update("cell")} className={inputClass} />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="l-district" label="District / location">
          <input id="l-district" required type="text" value={form.district} onChange={update("district")} className={inputClass} />
        </Field>
        <Field id="l-coursePreference" label="Preferred course option">
          <input id="l-coursePreference" type="text" placeholder="Online, blended or sponsored cohort" value={form.coursePreference} onChange={update("coursePreference")} className={inputClass} />
        </Field>
      </div>
      <Field id="l-need" label="Main capacity-building need">
        <textarea id="l-need" required rows={3} value={form.need} onChange={update("need")} className={`${inputClass} resize-y`} />
      </Field>
      <fieldset>
        <legend className={labelClass}>Sponsorship required?</legend>
        <div className="flex gap-6">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm font-medium text-charcoal/80">
              <input
                type="radio"
                name="sponsorship"
                value={opt}
                checked={form.sponsorship === opt}
                onChange={update("sponsorship")}
                className="accent-broadcast-blue"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
      <label htmlFor="l-consent" className="flex items-start gap-3 text-sm text-charcoal/75 leading-relaxed">
        <input id="l-consent" required type="checkbox" checked={form.consent} onChange={update("consent")} className="mt-0.5 accent-broadcast-blue" />
        I consent to AGCD@E-Academy contacting me about this programme.
      </label>

      <button type="submit" className="rounded-full bg-gold text-navy font-semibold px-6 py-3.5 hover:brightness-95 transition-colors">
        Submit Learner Interest
      </button>

      {submitted && (
        <p role="status" className="text-sm text-broadcast-blue font-medium">
          Your email application should now be open with your details pre-filled — press send there to reach {contact.email} directly.
        </p>
      )}
    </form>
  );
}

function SponsorForm() {
  const initial = {
    organization: "", contactPerson: "", position: "", email: "", phone: "",
    orgType: ORG_TYPES[0], interest: "", targetGroup: "", district: "", message: "",
  };
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "AGCD@E-Academy — Sponsor / Partner Enquiry";
    const body = [
      `Organization name: ${form.organization}`,
      `Contact person: ${form.contactPerson}`,
      `Position: ${form.position}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Type of organization: ${form.orgType}`,
      `Partnership interest: ${form.interest}`,
      `Preferred target group: ${form.targetGroup}`,
      `Preferred district / area: ${form.district}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="s-organization" label="Organization name">
          <input id="s-organization" required type="text" value={form.organization} onChange={update("organization")} className={inputClass} />
        </Field>
        <Field id="s-contactPerson" label="Contact person">
          <input id="s-contactPerson" required type="text" value={form.contactPerson} onChange={update("contactPerson")} className={inputClass} />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="s-position" label="Position">
          <input id="s-position" type="text" value={form.position} onChange={update("position")} className={inputClass} />
        </Field>
        <Field id="s-orgType" label="Type of organization">
          <select id="s-orgType" value={form.orgType} onChange={update("orgType")} className={inputClass}>
            {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="s-email" label="Email">
          <input id="s-email" required type="email" autoComplete="email" value={form.email} onChange={update("email")} className={inputClass} />
        </Field>
        <Field id="s-phone" label="Phone">
          <input id="s-phone" required type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} className={inputClass} />
        </Field>
      </div>
      <Field id="s-interest" label="Partnership interest">
        <input id="s-interest" required type="text" placeholder="e.g. Sponsor a full cohort, district cohort, board masterclass" value={form.interest} onChange={update("interest")} className={inputClass} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="s-targetGroup" label="Preferred target group">
          <input id="s-targetGroup" type="text" value={form.targetGroup} onChange={update("targetGroup")} className={inputClass} />
        </Field>
        <Field id="s-district" label="Preferred district / area">
          <input id="s-district" type="text" value={form.district} onChange={update("district")} className={inputClass} />
        </Field>
      </div>
      <Field id="s-message" label="Message">
        <textarea id="s-message" rows={4} value={form.message} onChange={update("message")} className={`${inputClass} resize-y`} />
      </Field>

      <button type="submit" className="rounded-full bg-broadcast-blue text-white font-semibold px-6 py-3.5 hover:bg-navy transition-colors">
        Submit Sponsor Enquiry
      </button>

      {submitted && (
        <p role="status" className="text-sm text-broadcast-blue font-medium">
          Your email application should now be open with your details pre-filled — press send there to reach {contact.email} directly.
        </p>
      )}
    </form>
  );
}

export default function RegistrationForms() {
  const [tab, setTab] = useState("learner");

  return (
    <section id="register" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Register Your Interest"
          title="Ready to Join or Partner With the Next Cohort?"
        />

        <div className="flex rounded-full bg-light-grey p-1.5 mb-10" role="tablist" aria-label="Registration type">
          {[
            { id: "learner", label: "I'm a Learner" },
            { id: "sponsor", label: "I'm a Sponsor / Partner" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === t.id ? "bg-navy text-white" : "text-navy/70 hover:bg-navy/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-black/5 bg-light-grey/50 p-6 sm:p-8">
          {tab === "learner" ? <LearnerForm /> : <SponsorForm />}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-charcoal/60">
          <Icon name="mail" className="w-4 h-4 text-broadcast-blue" />
          Prefer email or WhatsApp directly? Reach the Academy at{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-broadcast-blue hover:underline">
            {contact.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${contact.cell.replace(/\s/g, "")}`} className="font-medium text-broadcast-blue hover:underline">
            {contact.cell}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
