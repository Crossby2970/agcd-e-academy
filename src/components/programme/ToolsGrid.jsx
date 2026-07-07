import toolGroups, { capstoneTool } from "../../data/programme/tools";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function ToolsGrid() {
  return (
    <section id="tools" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Practical Tools Learners Will Develop"
          title="The Programme Produces Practical Organizational Tools"
          subtitle="More than 40 templates and registers, organised by theme so they are easy to scan."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {toolGroups.map((group) => (
            <div key={group.group} className="rounded-2xl border border-black/5 bg-light-grey p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                  <Icon name={group.icon} className="w-4.5 h-4.5" />
                </span>
                <h3 className="font-bold text-navy text-sm uppercase tracking-wide">{group.group}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white border border-black/5 text-charcoal/75 text-xs font-medium px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-navy px-7 py-6 text-center">
          <Icon name="sparkles" className="w-5 h-5 text-gold shrink-0" />
          <p className="text-white font-semibold text-sm sm:text-base">
            Plus your capstone: {capstoneTool}
          </p>
        </div>
      </div>
    </section>
  );
}
