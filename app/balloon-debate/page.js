import Link from "next/link";

export const metadata = {
  title: "Balloon Debate — Free Resource",
  description:
    "A free speaking pack for reasoning outside your own brief. Classroom example, workplace prompt, sample cards.",
};

const PDF_URL = "/downloads/chelsea-thrive-balloon-debate.pdf";

export default function BalloonDebate() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-[#8791a0] mb-3">Free resource</p>
        <h1 className="text-4xl font-bold text-white mb-4">Balloon Debate</h1>
        <p className="text-lg text-[#c7cdd6] leading-relaxed max-w-xl mx-auto">
          A speaking pack for reasoning outside your own brief. Classroom
          example, workplace prompt, sample cards.
        </p>
      </div>

      <div className="text-center mb-12">
        <a
          href={PDF_URL}
          download
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-7 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download the Free Pack (PDF) →
        </a>
      </div>

      <section className="mb-12">
        <p className="text-[#c7cdd6] leading-relaxed">
          This pack is for managers who want a short activity that forces
          people to argue a case they did not choose. The classroom lists
          are an example of the form — if you use this with a team, you
          write, and own, the workplace version.
        </p>
      </section>

      <section className="mb-12 bg-[#12161c] rounded-xl p-6 md:p-8 border border-[#232830]">
        <h2 className="text-xl font-bold text-white mb-4">
          What&apos;s in the pack
        </h2>
        <ul className="space-y-3 text-[#c7cdd6]">
          <li>
            <strong className="text-white">The rules</strong> — two ways to
            play, timing, voting. These travel as they are.
          </li>
          <li>
            <strong className="text-white">A classroom example</strong> — so
            you can see mixed types, short notes, and how a card is written.
            A model of structure, not a script for an office.
          </li>
          <li>
            <strong className="text-white">A generation prompt</strong> —
            paste it into a model, or write the cards yourself, to build a
            set that actually fits your team.
          </li>
          <li>
            <strong className="text-white">A worked workplace example</strong>{" "}
            — one sample group showing the move from school list to staff
            session.
          </li>
          <li>
            <strong className="text-white">Debrief questions</strong> — the
            part that turns a party game into a reasoning exercise.
          </li>
        </ul>
      </section>

      <section className="mb-12 text-center">
        <blockquote className="text-xl text-[#c7cdd6] font-medium leading-relaxed border-t border-b border-[#232830] py-8">
          The conversations that matter are exactly the ones nobody lets you
          practise. This is a lighter, shared version of the same idea.
        </blockquote>
      </section>

      <section className="text-center">
        <p className="text-[#8791a0] text-sm mb-4">
          If this is useful, and you want the longer version — rehearsing
          the conversations that actually matter, before you have to have
          them for real — that&apos;s the work at Chelsea Thrive.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/method"
            className="text-[#c7cdd6] hover:text-blue-400 text-sm transition-colors"
          >
            See how it works →
          </Link>
          <Link
            href="/book"
            className="text-[#c7cdd6] hover:text-blue-400 text-sm transition-colors"
          >
            Book a Discovery Conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
