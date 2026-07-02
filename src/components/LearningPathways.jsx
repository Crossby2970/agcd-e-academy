import pathways from "../data/pathways";
import PathwayCard from "./PathwayCard";
import SectionTitle from "./SectionTitle";

export default function LearningPathways() {
  return (
    <section id="pathways" className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Learning Pathways"
          title="Role-based pathways that guide you from start to certificate"
          subtitle="Inspired by the structure of leading global learning platforms — each pathway bundles the right modules for a specific role or sector."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway) => (
            <PathwayCard key={pathway.title} pathway={pathway} />
          ))}
        </div>
      </div>
    </section>
  );
}
