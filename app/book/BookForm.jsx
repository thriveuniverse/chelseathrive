"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError(false);

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/book/thanks");
    } catch {
      setError(true);
      setSubmitting(false);
    }
  }

  return (
    <form
      name="discovery-request"
      onSubmit={handleSubmit}
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

      {error && (
        <p className="text-red-400 text-sm">
          Something went wrong sending that — please try again, or use the
          email link below.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-600 text-white font-semibold py-3 px-7 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Send My Availability"}
      </button>
    </form>
  );
}
