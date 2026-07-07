import Icon from "../Icon";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-broadcast-blue py-20 sm:py-24">
      <div
        className="absolute inset-0 bg-pattern-dots text-white/[0.06] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
          Ready to Strengthen Your NPO?
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
          Join the AGCD@E-Academy Comprehensive NPO Capacity Building Programme
          and begin building the systems your organization needs to govern
          better, comply better, account better, report better, raise funds
          better and sustain its community impact.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy font-semibold px-7 py-3.5 hover:brightness-95 transition shadow-lg w-full sm:w-auto"
          >
            Register for the Next Cohort
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
          <a
            href="#sponsors"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white text-white font-semibold px-7 py-3.5 hover:bg-white hover:text-navy transition w-full sm:w-auto"
          >
            Sponsor a Cohort
          </a>
          <a
            href="mailto:Godfrey.Damler@gmail.com?subject=Request%20-%20NPO%20Capacity%20Building%20Programme%20Prospectus"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 text-white/90 font-semibold px-7 py-3.5 hover:bg-white/10 transition w-full sm:w-auto"
          >
            Download Prospectus
          </a>
        </div>

        <p className="mt-10 font-accent italic text-lg sm:text-xl text-gold">
          &ldquo;Do not only attend training. Build the systems your NPO needs
          to govern, account, serve and sustain.&rdquo;
        </p>
      </div>
    </section>
  );
}
