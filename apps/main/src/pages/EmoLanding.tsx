'use client';

import { useState } from "react";
import HeroBackdrop from "../components/HeroBackdrop";
import { AnimateIn } from "../components/Animate";
import BezelButton from "../components/BezelButton";
import DiscordCTA from "../components/DiscordCTA";
import UniversityBanner from "../components/UniversityBanner";

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const endpoint = "/api/emo-waitlist";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter an email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    console.info("[emo-waitlist] submitting", {
      endpoint,
      email: email.trim(),
      env: process.env.NODE_ENV,
    });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("[emo-waitlist] non-200 response", {
          status: response.status,
          statusText: response.statusText,
          body: text,
        });
        throw new Error("Failed to join waitlist.");
      }

      const data = await response.json().catch(() => ({ success: false }));
      console.info("[emo-waitlist] success", { data });

      if (!data?.success) {
        throw new Error("Unexpected response from waitlist.");
      }

      setStatus("success");
      setMessage("You're on the list. We'll let you know when Emo is ready.");
      setEmail("");
    } catch (error) {
      console.error("[emo-waitlist] submission failed", error);
      setStatus("error");

      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong. Try again in a bit.");
      }
    }
  }

  return (
    <div className="mt-10">
      <form
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="flex-1 rounded-2xl border border-zinc-300 bg-white/80 px-4 py-3 text-base text-zinc-900 shadow-[0_12px_28px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder:text-zinc-500 dark:border-zinc-700 dark:bg-black/70 dark:text-white dark:shadow-[0_20px_40px_rgba(0,0,0,0.45),_0_6px_16px_rgba(0,0,0,0.3)]"
          disabled={status === "loading"}
          required
        />
        <BezelButton
          type="submit"
          variant="dark"
          className="w-full sm:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining..." : "Join the waitlist"}
        </BezelButton>
      </form>
      {message && (
        <p
          className={`mt-4 text-center text-sm sm:text-base ${
            status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500 dark:text-rose-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default function EmoLanding() {
  return (
    <main className="bg-gradient-to-b from-zinc-50 via-zinc-100 to-white dark:from-[#090909] dark:via-[#050505] dark:to-black text-zinc-900 dark:text-zinc-100 min-h-screen pb-32">
      <section
        id="hero"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32"
      >
        <HeroBackdrop />
        <div className="relative">
          <AnimateIn trigger="mount" direction="in">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white shadow-[0_12px_24px_rgba(0,0,0,0.28)] ring-1 ring-black/30 dark:bg-white/10 dark:text-white dark:ring-white/20">
              <span>Introducing Emo · Voice Email Agent</span>
            </div>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
              <span className="block">Talk through your inbox.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-black via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
                Emo drafts, schedules, and sends your email.
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left" delay={0.05}>
            <p className="mt-8 text-lg sm:text-xl text-zinc-700 dark:text-zinc-200">
              Speak the intent. Emo triages your inbox, summarizes threads, drafts replies in your tone, schedules follow‑ups, and sends when you say “send.”
            </p>
          </AnimateIn>
        </div>
        <WaitlistForm />
        <AnimateIn trigger="mount" direction="in" delay={0.1}>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-700 dark:text-zinc-400">
            Free 30-day beta · Speak it and your inbox moves
          </p>
        </AnimateIn>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Hands‑free triage",
            description: "Say what matters. Emo prioritizes your inbox, archives noise, and surfaces what needs action.",
          },
          {
            title: "Instant replies",
            description: "Dictate your intent and tone. Emo drafts concise replies, adds context from the thread, and waits for your word to send.",
          },
          {
            title: "Follow‑ups on autopilot",
            description: "Never drop a thread. Emo sets reminders, schedules nudges, and keeps deals moving while you move.",
          },
        ].map((item, index) => (
          <AnimateIn key={item.title} direction="left" delay={index * 0.04}>
            <div className="rounded-2xl p-6 backdrop-blur-xl border border-zinc-300 bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-black/40 dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{item.description}</p>
            </div>
          </AnimateIn>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid md:grid-cols-2 gap-12 items-center">
        <AnimateIn direction="left">
          <div>
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-zinc-700 dark:text-zinc-400">
              Why voice for email
            </div>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">
              Hands-free focus for builders who never stop moving.
            </h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-7">
              Emo turns speech into finished emails. Summaries, replies, forwards, intros, and follow‑ups happen as fast as you can say them—no typing required.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-700 dark:text-zinc-200">
              {[
                "Say: ‘TL;DR this thread’ → get a crisp summary with next steps",
                "Say: ‘Draft a friendly follow‑up for Friday 9am’ → Emo schedules and queues it",
                "Say: ‘Reply yes, include the docs link, sound confident’ → ready to send",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>
        <AnimateIn direction="right">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-300 bg-white/80 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.16)] dark:border-white/10 dark:bg-black/50 dark:shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30 dark:from-white/10 dark:to-white/5" />
            <div className="relative">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-700 dark:text-zinc-300">
                Sample exchange
              </h3>
              <div className="mt-6 space-y-4 text-left">
                <div className="rounded-2xl bg-white/90 p-4 text-zinc-900 shadow-sm ring-1 ring-zinc-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
                  "Emo, summarize the Acme thread and draft a confident yes with next steps."
                </div>
                <div className="rounded-2xl bg-black text-white p-4 shadow-lg ring-1 ring-black/40 dark:bg-white/20">
                  "TL;DR: Pricing agreed. Drafted reply, attached the deck, queued a Friday follow‑up. Ready to send?"
                </div>
                <div className="rounded-2xl bg-white/90 p-4 text-zinc-900 shadow-sm ring-1 ring-zinc-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
                  "Reply: yes, send it. Also remind me if they don’t answer by Tuesday."
                </div>
                <div className="rounded-2xl bg-black text-white p-4 shadow-lg ring-1 ring-black/40 dark:bg-white/20">
                  "Sent. Follow‑up scheduled for Tuesday 9am."
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      <section className="mt-24 border-y border-zinc-200 dark:border-white/10">
        <UniversityBanner variant="founder" className="py-14" />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid md:grid-cols-3 gap-8">
        {[
          {
            label: "Connect",
            title: "Connect your inbox",
            description: "Securely link Gmail or Outlook. Emo learns your tone and common responses.",
          },
          {
            label: "Speak",
            title: "Voice to action",
            description: "Say the intent. Emo drafts, routes, schedules, and lines up follow‑ups.",
          },
          {
            label: "Ship",
            title: "Zero‑inbox momentum",
            description: "Stay moving while Emo keeps the loop tight across threads and timelines.",
          },
        ].map((step, index) => (
          <AnimateIn key={step.title} direction={index % 2 === 0 ? "left" : "up"}>
            <div className="rounded-2xl border border-zinc-300 bg-white/80 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-black/50 dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-700 dark:text-zinc-400">
                {step.label}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{step.description}</p>
            </div>
          </AnimateIn>
        ))}
      </section>

      <section className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-300 bg-gradient-to-br from-white/80 via-white to-zinc-100 p-10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.16)] dark:border-white/10 dark:bg-gradient-to-br dark:from-black/50 dark:via-black/40 dark:to-black/70 dark:shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Ready to try a voice email operator?
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Emo turns your voice into finished emails—triage, summaries, replies, and follow‑ups.
          </p>
          <WaitlistForm />
          <p className="mt-4 mb-4 text-xs text-zinc-500 dark:text-zinc-400">
            We’ll email a small batch of early access invites once Emo is ready for live pilots.
          </p>
        </div>
      </section>

      <DiscordCTA />
    </main>
  );
}
