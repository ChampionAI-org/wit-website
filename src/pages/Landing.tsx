import { ArrowRight, CheckCircle2, Users2, MessageSquare, Clock3 } from "lucide-react";
import BezelButton from "../components/BezelButton";
import HeroBackdrop from "../components/HeroBackdrop";
// import PhoneMock from "../components/PhoneMock";
import { AnimateIn, StaggerIn } from "../components/Animate";

function IconBadge() {
  return (
    <div className="relative inline-block">
      {/* Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white to-white/60 blur-md opacity-60 dark:from-white/10 dark:to-white/0" />
      {/* Badge */}
      <div className="relative rounded-2xl p-1.5 bg-gradient-to-br from-white to-gray-100 ring-1 ring-black/10 shadow-xl dark:from-white/10 dark:to-white/5 dark:ring-white/10 dark:shadow-black/40">
        <img src="/icon.png" alt="Wit" className="h-12 w-12 rounded-xl" />
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <main className="bg-wit-light dark:bg-wit-dark text-zinc-900 dark:text-white pt-32 min-h-screen">
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeroBackdrop />
        <div className="relative">
          <AnimateIn trigger="mount" direction="in">
            <div className="mb-6 flex justify-center">
              <IconBadge />
            </div>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
              Don't be a b*tch. Dream, Act, Achieve
            </h1>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left" delay={0.05}>
            <p className="mt-8 text-lg sm:text-xl text-zinc-700 dark:text-white/85">
              Wit is your AI partner that helps you think, act, learn, iterate — and endure —
              until you win. Goals → projects → tasks, with AI removing the friction.
            </p>
          </AnimateIn>
          <StaggerIn direction="left" className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <BezelButton href="https://apps.apple.com/us/app/wit-ai/id6748923692" variant="dark">
              Get the iOS App <ArrowRight className="w-4 h-4 ml-2" />
            </BezelButton>
            <BezelButton href="https://play.google.com/store/apps/details?id=ai.wit" variant="blue">
              Get it on Android
            </BezelButton>
            {null}
          </StaggerIn>
          <AnimateIn direction="in" delay={0.1}>
            <p className="mt-6 text-sm text-zinc-600 dark:text-white/70">
              We're mobile-first. The web app is functional but limited — for the best experience, download our iOS or Android apps.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-wit-light dark:bg-wit-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerIn direction="right" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Users2, label: 'Total Users', value: '412', change: '+10% Up from last month' },
              { Icon: CheckCircle2, label: 'Goals Achieved', value: '4', change: '+10% Up from last month' },
              { Icon: MessageSquare, label: 'Messages Sent', value: '712', change: '+10% Up from last month' },
              { Icon: Clock3, label: 'Daily Streaks', value: '48', change: '+10% Up from last month' },
            ].map(({ Icon, label, value, change }) => (
              <AnimateIn key={label} direction={label === 'Goals Achieved' || label === 'Daily Streaks' ? 'up' : 'left'}
                distance={28}
              >
              <div
                key={label}
                className="rounded-2xl p-5 backdrop-blur-xl border shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
                           bg-white/70 border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700
                           dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-600 dark:text-white/70">{label}</div>
                  <Icon className="w-4 h-4 text-zinc-400 dark:text-white/50" />
                </div>
                <div className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">{value}</div>
                <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{change} demo</div>
              </div>
              </AnimateIn>
            ))}
          </StaggerIn>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-5 pb-32">
        {[
          { t: "Think", d: "Brainstorm and break it down. Clarity cuts through the noise." },
          { t: "Do", d: "Act. Tasks, email, calendar — AI removes the friction." },
          { t: "Learn", d: "Fill gaps as you go. Get just‑in‑time answers and skills." },
          { t: "Iterate", d: "Adjust, improve, and refine. Try → test → evolve." },
          { t: "Endure", d: "Resilience and consistency. Last long enough to win." },
        ].map((c, i) => (
          <AnimateIn key={c.t} direction="left" delay={i * 0.04}>
          <div
            key={c.t}
            className="rounded-2xl p-5 backdrop-blur-xl border shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
                       bg-white/70 border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700
                       dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]"
          >
            <div className="text-sm text-zinc-600 dark:text-white/70">{c.t}</div>
            <div className="mt-2 font-semibold text-zinc-900 dark:text-white">{c.d}</div>
          </div>
          </AnimateIn>
        ))}
      </section>

      {/* How it works with screenshots */}
      <section className="bg-wit-card-light dark:bg-wit-dark text-zinc-900 dark:text-zinc-100 border-t border-zinc-100 dark:border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left">
          <div>
            <h2 className="text-3xl font-bold">Plan it. Do it. Track it.</h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-7">
              Wit turns your big goals into projects and daily tasks. It connects your
              email and calendar, removes friction, and keeps you moving.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Brainstorm goals → auto-breakdown into projects and tasks",
                "One inbox for tasks, emails, and reminders",
                "Calendar-aware planning with smart suggestions",
                "Progress tracking, streaks, and momentum",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <span className="text-zinc-800 dark:text-zinc-300">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <BezelButton href="https://apps.apple.com/us/app/wit-ai/id6748923692" variant="dark">
                Get the iOS App <ArrowRight className="w-4 h-4 ml-2" />
              </BezelButton>
              <BezelButton href="https://play.google.com/store/apps/details?id=ai.wit" variant="blue">
                Get it on Android
              </BezelButton>
            </div>
          </div>
          </AnimateIn>
          <AnimateIn direction="right">
          <div className="flex items-center justify-center gap-4">
            <img
              src="/homescreen_newphone.png"
              alt="App homescreen"
              className="w-80 sm:w-96 md:w-[400px] h-auto transform -rotate-3 scale-110 sm:scale-125 transition-transform duration-300 hover:scale-130 hover:-rotate-2"
              style={{ backgroundColor: "transparent" }}
            />
            <img
              src="/classes.png"
              alt="Classes view"
              className="w-80 sm:w-96 md:w-[400px] h-auto transform rotate-3 scale-110 sm:scale-125 transition-transform duration-300 hover:scale-130 hover:rotate-2"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* Social proof / values */}
      <section className="bg-wit-light dark:bg-wit-dark text-zinc-900 dark:text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 grid md:grid-cols-3 gap-8">
          {["Clarity over noise", "Action over inertia", "Iteration over perfection"].map((h, i) => (
            <AnimateIn key={h} direction="left" delay={i * 0.05}>
            <div
              key={h}
              className="rounded-2xl p-6 backdrop-blur-xl border shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
                         bg-white/70 border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700
                         dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]"
            >
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{h}</h3>
              <p className="mt-2 text-zinc-700 dark:text-slate-400">
                Every plan meets reality. Wit helps you adapt, learn, and keep moving forward
                until the goal is done.
              </p>
            </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </main>
  );
}
