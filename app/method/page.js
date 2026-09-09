import Link from "next/link";

export const metadata = {
  title: "The Method",
  description: "How Chelsea Thrive's conversation, review and practice cycle works.",
};

const steps = [
  {
    number: "1",
    title: "Conversation",
    body: "Real discussions about AI, leadership, business, strategy, technology, change and decision-making — the kind of conversation you'd actually need to have well.",
  },
  {
    number: "2",
    title: "Recording",
    body: "The session is recorded, so nothing worth noticing gets lost to memory.",
  },
  {
    number: "3",
    title: "AI Review",
    body: "AI identifies recurring errors, vocabulary gaps, communication patterns and pronunciation issues — the small, repeated things that are tedious to track by ear but easy for AI to spot.",
  },
  {
    number: "4",
    title: "Personalised Practice",
    body: "Exercises are generated from the student's actual language, their mistakes, their professional context and their goals — not a generic textbook unit.",
  },
  {
    number: "5",
    title: "Next Discussion",
    body: "The cycle repeats with a new conversation and new challenges.",
  },
];

export default function Method() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        How It Works
      </h1>
      <p className="text-[#c7cdd6] leading-relaxed text-center mb-12">
        Not a script to rehearse — a conversation to explore, again and
        again, until the vocabulary and nuance feel like yours. Because the
        goal was never the English. It&apos;s what you actually came to say.
      </p>

      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#12161c] rounded-xl p-6 border border-[#232830] flex gap-5"
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-700 text-blue-400 font-semibold flex items-center justify-center">
              {step.number}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h2>
              <p className="text-[#c7cdd6] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/book"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-7 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book a Discovery Conversation →
        </Link>
      </div>
    </div>
  );
}
