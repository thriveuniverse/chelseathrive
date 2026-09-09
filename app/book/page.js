import BookForm from "./BookForm";

const CONTACT_EMAIL = "miranda@thethriveclan.com";

export const metadata = {
  title: "Book",
  description: "Book a discovery conversation with Chelsea Thrive.",
};

export default function Book() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Book a Discovery Conversation
        </h1>
        <p className="text-[#c7cdd6] leading-relaxed mb-12">
          Free, 30 minutes, no commitment. Give a few options for when
          you&apos;re free and I&apos;ll confirm one that works.
        </p>
      </div>

      <BookForm />

      <p className="text-center text-[#8791a0] text-sm mt-8">
        Prefer email? Reach me directly at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Discovery%20Conversation`}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
