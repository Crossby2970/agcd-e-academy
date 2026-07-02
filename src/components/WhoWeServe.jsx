import audiences from "../data/audiences";
import AudienceCard from "./AudienceCard";
import SectionTitle from "./SectionTitle";

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Who We Serve"
          title="Built for individuals and institutions across the empowerment ecosystem"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a) => (
            <AudienceCard key={a.title} audience={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
