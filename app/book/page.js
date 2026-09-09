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

      <form
        name="discovery-request"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/book/thanks"
        className="space-y-5 bg-[#12161c] rounded-xl p-6 md:p-8 border border-[#232830]"
      >
        <input type="hidden" name="form-name" value="discovery-request" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#c7cdd6] mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg bg-[#0b0e13] border border-[#232830] px-3.5 py-2.5 text-white placeholder:text-[#8791a0] focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#c7cdd6] mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg bg-[#0b0e13] border border-[#232830] px-3.5 py-2.5 text-white placeholder:text-[#8791a0] focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div>
          <p className="block text-sm font-medium text-[#c7cdd6] mb-1.5">
            Availability — first, second and third choice
          </p>
          <div className="space-y-3">
            <div>
              <label htmlFor="choice_1" className="sr-only">
                First choice
              </label>
              <input
                id="choice_1"
                name="choice_1"
                type="text"
                required
                placeholder="e.g. Tue 23 Sept, 3pm CET"
                className="w-full rounded-lg bg-[#0b0e13] border border-[#232830] px-3.5 py-2.5 text-white placeholder:text-[#8791a0] focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label htmlFor="choice_2" className="sr-only">
                Second choice
              </label>
              <input
                id="choice_2"
                name="choice_2"
                type="text"
                placeholder="e.g. Wed 24 Sept, 5pm CET"
                className="w-full rounded-lg bg-[#0b0e13] border border-[#232830] px-3.5 py-2.5 text-white placeholder:text-[#8791a0] focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label htmlFor="choice_3" className="sr-only">
                Third choice
              </label>
              <input
                id="choice_3"
                name="choice_3"
                type="text"
                placeholder="e.g. Thu 25 Sept, 9am CET"
                className="w-full rounded-lg bg-[#0b0e13] border border-[#232830] px-3.5 py-2.5 text-white placeholder:text-[#8791a0] focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#c7cdd6] mb-1.5"
          >
            Anything else? (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full rounded-lg bg-[#0b0e13] border border-[#232830] px-3.5 py-2.5 text-white placeholder:text-[#8791a0] focus:outline-none focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 px-7 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send My Availability
        </button>
      </form>

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
