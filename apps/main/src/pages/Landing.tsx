import {
  ArrowRight,
  CheckCircle2,
  Users2,
  MessageSquare,
  Clock3,
} from "lucide-react";
import BezelButton from "../components/BezelButton";
import HeroBackdrop from "../components/HeroBackdrop";
// import PhoneMock from "../components/PhoneMock";
import { AnimateIn, StaggerIn } from "../components/Animate";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import DiscordCTA from "../components/DiscordCTA";

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
  const DiscordGlyph = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.372.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1569 2.419 0 1.3332-.9461 2.4189-2.1569 2.4189z"
      />
    </svg>
  );
  return (
    <main className="bg-wit-light dark:bg-wit-dark text-zinc-900 dark:text-white pt-32 min-h-screen">
      <section
        id="hero"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center snap-start snap-always"
      >
        <HeroBackdrop />
        <div className="relative">
          <AnimateIn trigger="mount" direction="in">
            <div className="mb-6 flex justify-center">
              <IconBadge />
            </div>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
              <span className="block">F*ck waiting. Start now.</span>
              <span className="block">Dream, Act, Achieve</span>
            </h1>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left" delay={0.05}>
            <p className="mt-8 text-lg sm:text-xl text-zinc-700 dark:text-white/85">
              Wit is your AI partner built for speed, direction, and
              consistency. It turns goals into clear roadmaps, removes the drag,
              and keeps you moving every day.
            </p>
          </AnimateIn>
          <StaggerIn
            direction="left"
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BezelButton
              href="https://apps.apple.com/us/app/wit-ai/id6748923692"
              variant="dark"
            >
              Get the iOS App <ArrowRight className="w-4 h-4 ml-2" />
            </BezelButton>
            <BezelButton
              href="https://play.google.com/store/apps/details?id=ai.wit"
              variant="blue"
            >
              Get it on Android
            </BezelButton>
            <BezelButton
              href="https://discord.gg/uQcUXuQawe"
              variant="blue"
              className="p-3"
            >
              <DiscordGlyph className="w-5 h-5" />
            </BezelButton>
          </StaggerIn>
          <AnimateIn direction="in" delay={0.1}>
            <p className="mt-6 text-sm text-zinc-600 dark:text-white/70">
              We're mobile-first. The web app is functional but limited. For the
              best experience, download our iOS or Android apps.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Stats section */}
      <section
        id="stats"
        className="py-16 bg-wit-light dark:bg-wit-dark snap-start snap-always"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerIn
            direction="right"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                Icon: Users2,
                label: "Total Users",
                value: "412",
                change: "+10% Up from last month",
              },
              {
                Icon: CheckCircle2,
                label: "Goals Achieved",
                value: "4",
                change: "+100% Up from last month",
              },
              {
                Icon: MessageSquare,
                label: "Messages Sent",
                value: "7,326",
                change: "+24% Up from last month",
              },
              {
                Icon: Clock3,
                label: "Daily Streaks",
                value: "44",
                change: "+52% Up from last month",
              },
            ].map(({ Icon, label, value, change }) => (
              <AnimateIn
                key={label}
                direction={
                  label === "Goals Achieved" || label === "Daily Streaks"
                    ? "up"
                    : "left"
                }
                distance={28}
              >
                <div
                  key={label}
                  className="rounded-2xl p-5 backdrop-blur-xl border shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
                           bg-white/70 border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700
                           dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zinc-600 dark:text-white/70">
                      {label}
                    </div>
                    <Icon className="w-4 h-4 text-zinc-400 dark:text-white/50" />
                  </div>
                  <div className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                    {change} demo
                  </div>
                </div>
              </AnimateIn>
            ))}
          </StaggerIn>
        </div>
      </section>

      <section
        id="pillars"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-32 snap-start snap-always"
      >
        {[
          {
            t: "Speed",
            d: "Move fast while it still counts. Wit clears the clutter so momentum never stalls.",
          },
          {
            t: "Direction",
            d: "Keep moves aligned to mission. Goals stay visible and next steps stay obvious.",
          },
          {
            t: "Consistency",
            d: "Stack wins daily. Wit keeps you showing up until the finish line falls behind.",
          },
        ].map((c, i) => (
          <AnimateIn key={c.t} direction="left" delay={i * 0.04}>
            <div
              key={c.t}
              className="rounded-2xl p-5 backdrop-blur-xl border shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
                       bg-white/70 border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700
                       dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]"
            >
              <div className="text-sm text-zinc-600 dark:text-white/70">
                {c.t}
              </div>
              <div className="mt-2 font-semibold text-zinc-900 dark:text-white">
                {c.d}
              </div>
            </div>
          </AnimateIn>
        ))}
      </section>

      {/* How it works with screenshots */}
      <section
        id="how-it-works"
        className="bg-wit-card-light dark:bg-wit-dark text-zinc-900 dark:text-zinc-100 border-t border-zinc-100 dark:border-white/10 mt-16 snap-start snap-always"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left">
            <div>
              <h2 className="text-3xl font-bold">Plan it. Do it. Track it.</h2>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-7">
                Wit turns your big goals into projects and daily tasks. It
                connects your email and calendar, removes friction, and keeps
                you moving.
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
                    <span className="text-zinc-800 dark:text-zinc-300">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <BezelButton
                  href="https://apps.apple.com/us/app/wit-ai/id6748923692"
                  variant="dark"
                >
                  Get the iOS App <ArrowRight className="w-4 h-4 ml-2" />
                </BezelButton>
                <BezelButton
                  href="https://play.google.com/store/apps/details?id=ai.wit"
                  variant="blue"
                >
                  Get it on Android
                </BezelButton>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full place-items-center px-3 md:px-0">
              <img
                src="/homescreen_newphone.png"
                alt="App homescreen"
                className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-auto object-contain md:transition-transform md:duration-300 md:hover:scale-[1.02] md:hover:-rotate-2"
                style={{ backgroundColor: "transparent" }}
              />
              <img
                src="/classes.png"
                alt="Classes view"
                className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-auto object-contain md:transition-transform md:duration-300 md:hover:scale-[1.02] md:hover:rotate-2"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Social proof / values */}
      <section
        id="principles"
        className="bg-wit-light dark:bg-wit-dark text-zinc-900 dark:text-white mt-16 snap-start snap-always"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 grid md:grid-cols-3 gap-8">
          {[
            "Clarity over noise",
            "Action over inertia",
            "Iteration over perfection",
          ].map((h, i) => (
            <AnimateIn key={h} direction="left" delay={i * 0.05}>
              <div
                key={h}
                className="rounded-2xl p-6 backdrop-blur-xl border shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
                         bg-white/70 border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700
                         dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]"
              >
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">
                  {h}
                </h3>
                <p className="mt-2 text-zinc-700 dark:text-slate-400">
                  Every plan meets reality. Wit helps you adapt, learn, and keep
                  moving forward until the goal is done.
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-wit-light dark:bg-wit-dark text-zinc-900 dark:text-white border-t border-zinc-100 dark:border-white/10 snap-start snap-always"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Pricing />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-wit-light dark:bg-wit-dark text-zinc-900 dark:text-white border-t border-zinc-100 dark:border-white/10 snap-start snap-always"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FAQ />
        </div>
      </section>

      {/* Large animated Discord CTA */}
      <DiscordCTA />
    </main>
  );
}
