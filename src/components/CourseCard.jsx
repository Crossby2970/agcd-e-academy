import Icon from "./Icon";

const LEVEL_STYLES = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-rose-100 text-rose-700",
};

export default function CourseCard({ course }) {
  return (
    <div className="flex flex-col rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
          <Icon name={course.icon} className="w-5 h-5" />
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${LEVEL_STYLES[course.level]}`}
        >
          {course.level}
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-navy leading-snug">{course.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/70 grow">{course.description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
        <span className="text-xs font-medium text-charcoal/60">{course.delivery}</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm font-semibold text-broadcast-blue hover:text-navy transition-colors"
        >
          View Course
          <Icon name="arrowRight" className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
