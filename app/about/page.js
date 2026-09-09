import Link from "next/link";

export const metadata = {
  title: "About Miranda",
  description:
    "A decade in commodity brokerage and international shipping, then years teaching executives and professionals.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        About Miranda
      </h1>

      <blockquote className="text-xl md:text-2xl text-[#c7cdd6] font-medium leading-relaxed text-center border-l-0 border-t border-b border-[#232830] py-8 mb-10">
        I don&apos;t teach textbook English.
        <br />
        I help professionals discuss important ideas clearly and confidently.
      </blockquote>

      <div className="text-[#c7cdd6] leading-relaxed space-y-4">
        <p>
          Before teaching, I spent a decade in commodity brokerage and
          international shipping — settling London Metal Exchange contracts
          at a brokerage, then managing supplier relationships and
          regulatory compliance for international shipments, including
          hazardous chemicals, out of Asia. Being misunderstood in that
          world wasn&apos;t an inconvenience. It was expensive.
        </p>
        <p>
          That background shapes how I teach. Executives and professionals
          don&apos;t need another grammar drill; they need to think out
          loud, in a second language, under real pressure, and come out the
          other side clearer than they went in.
        </p>
        <p>
          I&apos;ve been teaching professionals one-to-one, online, since
          2016 — currently with CERAN, alongside private clients. These
          days that interest has extended to AI, decision-making and the
          future of education — questions I write about at{" "}
          <a
            href="https://thethriveclan.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            The Thrive Clan
          </a>{" "}
          and explore practically through{" "}
          <a
            href="https://last-prompt.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Last Prompt
          </a>
          .
        </p>
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
