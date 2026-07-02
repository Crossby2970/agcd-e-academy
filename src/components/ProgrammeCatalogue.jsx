import { useMemo, useState } from "react";
import courses from "../data/courses";
import CourseCard from "./CourseCard";
import SectionTitle from "./SectionTitle";

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function ProgrammeCatalogue() {
  const [level, setLevel] = useState("All Levels");

  const filtered = useMemo(
    () => (level === "All Levels" ? courses : courses.filter((c) => c.level === level)),
    [level]
  );

  return (
    <section id="programmes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Programme Catalogue"
          title="Practical courses across governance, productivity and digital skill"
          subtitle="Every programme is built to be applied at work immediately — not theory for its own sake."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter courses by level">
          {LEVELS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              aria-pressed={level === l}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                level === l
                  ? "bg-navy text-white"
                  : "bg-light-grey text-navy/70 hover:bg-navy/10"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
