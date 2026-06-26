"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { socialLinks } from "@/data/socials";
import { contactMethods } from "@/data/contact";
import Button from "@/components/common/Button";
import PageWrapper from "@/components/effects/PageWrapper";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactForm = z.infer<typeof contactSchema>;
export default function Contact() {

  const [loading, setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (data: ContactForm) => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success("Message sent successfully!");

      reset();
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <PageWrapper>
      <main className="relative bg-linear-to-b from-[#020617]/80
via-[#0f172a]/70
to-[#020617]/80 z-10 min-h-screen px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <section className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              CONTACT
            </p>

            <h1 className="mt-6 text-5xl font-bold uppercase leading-[0.9] text-white md:text-7xl">
              GET IN
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                TOUCH.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
              Questions, ideas, partnerships, or just want to build something
              interesting?
              <br />
              We'd love to hear from you.
            </p>
          </section>

          {/* Contact Cards */}
          <section className="mt-24">
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-blue-500/20 bg-[#0c0815]/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                    {method.title}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {method.heading}
                  </h3>

                  <p className="mt-4 text-sm text-zinc-400">
                    {method.description}
                  </p>

                  <div className="mt-8 text-cyan-400 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Response Section */}
          <section className="mt-28 text-center">
            <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">
              WHAT HAPPENS NEXT?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Reach out through any of the channels above. We'll get back to you
              as soon as possible.
            </p>
          </section>

          {/* Final CTA */}
          <section className="mt-28">
            <div className="rounded-3xl border border-blue-500/20 bg-[#0c0815]/60 p-10 text-center md:p-16">
              <h2 className="text-4xl font-bold uppercase text-white md:text-6xl">
                DON'T BUILD
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  ALONE.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
                Join the community, meet ambitious builders and start working on
                things that matter.
              </p>

              <Button href={socialLinks.discord} className="mt-8" external>
                JOIN DISCORD →
              </Button>
            </div>
          </section>
          <section className="mt-24 border-t border-cyan-500/10 pt-16">
            <div className="mx-auto max-w-3xl">

              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  CONTACT
                </p>

                <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                  Let's Build Something.
                </h2>

                <p className="mt-4 text-zinc-400">
                  Have an idea, a question, or want to collaborate with Bits&Bytes
                  Noida? We'd love to hear from you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-12 space-y-6"
              >

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Name
                  </label>

                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your name"
                    className="
    w-full
    rounded-2xl
    border
    border-cyan-500/20
    bg-[#081225]/40
    px-5
    py-4
    text-white
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400
    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
  "
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Email
                  </label>

                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className="
    w-full
    rounded-2xl
    border
    border-cyan-500/20
    bg-[#081225]/40
    px-5
    py-4
    text-white
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400
    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
  "
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Subject
                  </label>

                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="What's this about?"
                    className="
    w-full
    rounded-2xl
    border
    border-cyan-500/20
    bg-[#081225]/40
    px-5
    py-4
    text-white
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400
    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
  "
                  />

                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Message
                  </label>

                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Tell us about your idea..."
                    className="
    w-full
    resize-none
    rounded-2xl
    border
    border-cyan-500/20
    bg-[#081225]/40
    px-5
    py-4
    text-white
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400
    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
  "
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
    w-full
    rounded-2xl
    bg-cyan-500
    px-6
    py-4
    font-semibold
    text-black
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
    disabled:cursor-not-allowed
    disabled:opacity-60
  "
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>

              </form>
            </div>
          </section>
        </div>
      </main>
    </PageWrapper>
  );
}

