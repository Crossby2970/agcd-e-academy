import { whoShouldEnrol } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function WhoShouldEnrol() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Who Should Enrol"
          title="This Programme Is Designed for People Who Lead, Govern, Manage or Support NPOs"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoShouldEnrol.map((role) => (
            <div key={role} className="flex items-center gap-3 rounded-xl border border-black/5 bg-light-grey p-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-broadcast-blue text-white">
                <Icon name="users" className="w-4.5 h-4.5" />
              </span>
              <span className="text-sm font-semibold text-navy">{role}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-navy px-7 py-6 sm:px-10 sm:py-7 text-center">
          <p className="text-white text-sm sm:text-base font-medium max-w-3xl mx-auto leading-relaxed">
            Organizations are encouraged to enrol more than one representative
            where possible: one governance representative, one
            management/programme representative and one finance/administration
            representative.
          </p>
        </div>
      </div>
    </section>
  );
}
