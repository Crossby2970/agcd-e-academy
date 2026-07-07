import { mentorshipOfferings } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function MentorshipAlumni() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Beyond the 12 Weeks"
          title="The Learning Journey Continues After the Course"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentorshipOfferings.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-light-grey p-4">
              <Icon name="handshake" className="w-4.5 h-4.5 mt-0.5 shrink-0 text-broadcast-blue" />
              <span className="text-sm font-medium text-charcoal/80 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
