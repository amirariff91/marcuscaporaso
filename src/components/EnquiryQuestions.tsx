import Reveal from "@/components/Reveal";

const questions = [
  "Are enquiries captured consistently?",
  "Who follows up, and when?",
  "How fast is the first contact made?",
  "Did they actually book?",
  "What went cold, and why?",
  "Can the owner or manager see the full journey?",
];

export default function EnquiryQuestions() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal as="p" className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
          Most clinics cannot answer these
        </Reveal>

        <Reveal as="h2" className="mt-4 text-section font-bold text-fg">
          What happens after someone enquires?
        </Reveal>

        <Reveal as="p" className="mt-5 max-w-2xl text-muted leading-relaxed">
          If you cannot answer these six questions with confidence, that is where
          your growth is leaking.
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {questions.map((question, i) => (
            <Reveal as="li" key={question} delay={i * 70}>
              <div className="group rounded-xl bg-bg-raised p-6 border border-border hover:border-cta/30 transition-colors duration-300 flex items-start gap-4">
                <span
                  className="tabular-nums text-xs font-medium text-muted-2 pt-0.5 transition-colors duration-300 group-hover:text-cta"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg font-medium leading-snug">{question}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
