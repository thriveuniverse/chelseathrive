import Link from "next/link";

export const metadata = {
  title: "Pricing",
  description: "Discovery Session, Development Programme and Ongoing Coaching.",
};

const tiers = [
  {
    name: "Discovery Call",
    detail: "Free · 30 minutes",
    body: "A short conversation about what's not working yet and what you actually need — before you commit to anything.",
    cta: "Book Your Free Discovery Call",
    featured: false,
  },
  {
    name: "Development Programme",
    detail: "€500 for 10 sessions (or €55/hour individually)",
    body: "Includes recorded sessions, AI analysis, and personalised exercises built around your own recurring patterns.",
    cta: "Enquire About the Programme",
    featured: true,
  },
  {
    name: "Ongoing Coaching",
    detail: "€55/hour, billed monthly",
    body: "For continuous development once the initial gaps have closed.",
    cta: "Enquire About Ongoing Coaching",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Pricing
      </h1>
      <p className="text-[#8791a0] text-center mb-12">
        Kept deliberately simple.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl p-6 border flex flex-col ${
              tier.featured
                ? "bg-[#12161c] border-blue-700"
                : "bg-[#12161c] border-[#232830]"
            }`}
          >
            <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
            <p className="text-blue-400 text-sm font-semibold mb-4">
              {tier.detail}
            </p>
            <p className="text-[#c7cdd6] leading-relaxed flex-1">
              {tier.body}
            </p>
            <Link
              href="/book"
              className="mt-6 inline-block text-center bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
