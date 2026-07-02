import { useState } from "react";

const INTEREST_AREAS = [
  "Graduate Employability",
  "NPO Governance & Compliance",
  "Digital Productivity (Microsoft/Google)",
  "Fundraising & Resource Mobilization",
  "Public Sector Leadership",
  "Church Administration & Governance",
  "Hospital Governance & Management",
  "AI for Productivity",
  "Content Creation & Digital Media",
  "Partnership / Funding",
  "Other",
];

const CONTACT_EMAIL = "Godfrey.Damler@gmail.com";

const initialForm = { name: "", email: "", organization: "", interest: INTEREST_AREAS[0], message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sentVia, setSentVia] = useState(null);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const buildMailto = (subjectPrefix) => {
    const subject = `${subjectPrefix} — ${form.interest}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.organization || "N/A"}`,
      `Interest Area: ${form.interest}`,
      "",
      form.message,
    ].join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e, subjectPrefix) => {
    e.preventDefault();
    window.location.href = buildMailto(subjectPrefix);
    setSentVia(subjectPrefix);
  };

  return (
    <form className="grid gap-5" onSubmit={(e) => handleSubmit(e, "AGCD@E-Academy Enquiry")}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            type="text"
            autoComplete="name"
            className="w-full rounded-lg border border-black/15 px-4 py-3 text-sm focus:border-broadcast-blue focus:ring-1 focus:ring-broadcast-blue outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email
          </label>
          <input
            id="email"
            required
            value={form.email}
            onChange={update("email")}
            type="email"
            autoComplete="email"
            className="w-full rounded-lg border border-black/15 px-4 py-3 text-sm focus:border-broadcast-blue focus:ring-1 focus:ring-broadcast-blue outline-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-navy mb-1.5">
            Organization
          </label>
          <input
            id="organization"
            value={form.organization}
            onChange={update("organization")}
            type="text"
            autoComplete="organization"
            className="w-full rounded-lg border border-black/15 px-4 py-3 text-sm focus:border-broadcast-blue focus:ring-1 focus:ring-broadcast-blue outline-none"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-navy mb-1.5">
            Interest Area
          </label>
          <select
            id="interest"
            value={form.interest}
            onChange={update("interest")}
            className="w-full rounded-lg border border-black/15 px-4 py-3 text-sm focus:border-broadcast-blue focus:ring-1 focus:ring-broadcast-blue outline-none bg-white"
          >
            {INTEREST_AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={update("message")}
          rows={5}
          className="w-full rounded-lg border border-black/15 px-4 py-3 text-sm focus:border-broadcast-blue focus:ring-1 focus:ring-broadcast-blue outline-none resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          type="submit"
          className="flex-1 rounded-full bg-broadcast-blue text-white font-semibold px-6 py-3.5 hover:bg-navy transition-colors"
        >
          Send Enquiry
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "Training Proposal Request")}
          className="flex-1 rounded-full border-2 border-gold text-navy font-semibold px-6 py-3.5 hover:bg-gold transition-colors"
        >
          Request Training Proposal
        </button>
      </div>

      {sentVia && (
        <p role="status" className="text-sm text-broadcast-blue font-medium">
          Your email application should now be open with your {sentVia.toLowerCase()} pre-filled — press
          send there to reach {CONTACT_EMAIL} directly.
        </p>
      )}
    </form>
  );
}
