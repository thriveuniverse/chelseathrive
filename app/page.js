import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Miranda – Where English Language Meets Intelligence. With a rare blend of professional teaching expertise and a remarkably high IQ, she makes learning both effective and inspiring. Her lessons go beyond grammar, helping students think in English and express themselves with clarity. With Miranda, you don't just learn English — you learn to think sharper and speak smarter.",
    name: "A.K.",
  },
  {
    quote:
      "The best thing I learned from the course is becoming more confident with presentations. Now I don't fear writing MBA assignments. I will recommend this course and Miranda. She is very patient with different level students, and the key points of the course are clear and helpful.",
    name: "Wayne",
    context: "Presentation Speaking",
  },
  {
    quote:
      "She's great! You can understand your mistakes very well and work with her notes. She guides the lesson very well. At the end, she gives you a lesson summary and a basic homework. This is a great way to learn.",
    name: "Ece",
  },
  {
    quote:
      "Miranda is a wonderful teacher. She is great at talking and listening and always gives me precise advice. I really enjoy her lesson.",
    name: "Yuri",
    context: "Conversation Class",
  },
];

export default function Home() {
  return (
    <div>
      {/* TEST hero image — placeholder photo, not final */}
      <section className="relative w-full h-[70vh] min-h-130 overflow-hidden">
        <Image
          src="/nearly-ready.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0b0e13] via-[#0b0e13]/65 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0b0e13_0%,rgba(11,14,19,0)_20%)]" />

        <div className="relative h-full flex items-center">
          <div className="max-w-md md:max-w-lg px-6 md:px-16 text-left">
            <h1 className="text-2xl md:text-4xl font-normal text-white mb-12 leading-tight">
              A space to rehearse the conversations that matter — before you
              have to have them for real.
            </h1>

            <div>
              <Link
                href="/book"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-7 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book a Discovery Conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pt-12 pb-12 text-center border-b border-[#232830]">
        <p className="text-lg text-[#c7cdd6] leading-relaxed max-w-2xl mx-auto">
          It&apos;s hard enough sharing a difficult idea in your own
          language — harder still when you&apos;re also chasing the right
          words in someone else&apos;s. The conversations that matter most
          are exactly the ones nobody lets you practice: telling someone
          their role is being made redundant, pushing back on a plan you
          don&apos;t believe in, negotiating a deal you can&apos;t afford to
          lose. Here, you can have that conversation first — as many times
          as it takes — until it&apos;s not just correct, but sounds like
          you. So when it&apos;s real, you&apos;ve already had it.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 border-t border-[#232830]">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          What Actually Happens
        </h2>
        <p className="text-[#c7cdd6] leading-relaxed text-center max-w-2xl mx-auto">
          You talk. About something real — a negotiation you&apos;re
          dreading, a pitch you haven&apos;t nailed, a difficult conversation
          you keep putting off. It&apos;s recorded, so nothing worth noticing
          gets lost, and next time picks up exactly where this one left off.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 border-t border-[#232830]">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          If You Want to Tighten Something
        </h2>
        <p className="text-[#c7cdd6] leading-relaxed text-center max-w-2xl mx-auto">
          Some people just want the conversation, and that&apos;s enough. If
          you&apos;d rather also drill a specific habit — a repeated tense
          slip, a word you always reach for — a short AI-generated note and a
          few minutes of targeted practice are there, in your own time.
          Entirely optional.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 border-t border-[#232830]">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          You&apos;ll Know It&apos;s Working
        </h2>
        <p className="text-[#c7cdd6] leading-relaxed text-center max-w-2xl mx-auto">
          After each session, a short note — what went well, and the one
          thing worth tightening next time. Not a report card. A note from
          someone who was listening.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-[#232830]">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          What Students Say
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#12161c] rounded-xl p-6 border border-[#232830] flex flex-col"
            >
              <p className="text-[#c7cdd6] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm text-[#8791a0] mt-4">
                — {t.name}
                {t.context ? `, ${t.context}` : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 border-t border-[#232830] text-center">
        <p className="text-[#8791a0] text-sm mb-4">
          Part of the same thinking as{" "}
          <a
            href="https://thethriveclan.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            The Thrive Clan
          </a>{" "}
          and{" "}
          <a
            href="https://last-prompt.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Last Prompt
          </a>
          .
        </p>
        <Link
          href="/method"
          className="text-[#c7cdd6] hover:text-blue-400 text-sm transition-colors"
        >
          See how it works →
        </Link>
      </section>
    </div>
  );
}
