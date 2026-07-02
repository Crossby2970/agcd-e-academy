import pillars from "../data/pillars";
import PillarCard from "./PillarCard";
import SectionTitle from "./SectionTitle";

export default function PillarsSection() {
  return (
    <section className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The Ecosystem"
          title="Ten pillars, one integrated empowerment academy"
          subtitle="AGCD@E-Academy is the training engine of the wider AGCD empowerment ecosystem — each pillar focused on a specific community, sector or skill area."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.name} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
