import Link from "next/link";

export const metadata = {
  title: "Thanks",
  description: "Your discovery conversation request has been sent.",
};

export default function BookThanks() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        Thanks — that&apos;s been sent.
      </h1>
      <p className="text-[#c7cdd6] leading-relaxed mb-8">
        I&apos;ll check your availability against my calendar and reply by
        email to confirm a time.
      </p>
      <Link
        href="/"
        className="inline-block text-blue-400 hover:text-blue-300 text-sm transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
