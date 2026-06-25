import FaqItem from "../FAQItem";

export default function FAQ() {
  const faqs = [
    {
      question: "Is there a registration fee?",
      answer:
        "No. Participation in Varchasva is completely free. There are no registration charges for any eligible participant.",
    },
    {
      question: "Can I participate individually?",
      answer:
        "No. Individual participation is not allowed. Every participant must register as part of a team. Team formation guidelines and the maximum team size will be shared in the official rulebook.",
    },
    {
      question: "Do I need a prototype?",
      answer:
        "No. A working prototype is not required during registration. However, teams are encouraged to develop and present a prototype during the ideathon.",
    },
    {
      question: "Can school students participate?",
      answer:
        "Yes. Varchasva welcomes school students subject to the eligibility criteria announced by the organizers.",
    },
    {
      question: "How many members per team?",
      answer:
        "Teams can have up to 4 members.",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">

        <p className="text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
          FREQUENTLY ASKED QUESTIONS
        </p>

        <h2 className="mt-3 text-center text-4xl font-bold text-white md:text-5xl">
          Everything You Need to Know
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}