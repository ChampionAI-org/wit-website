import { Mail } from "lucide-react";
import Link from "next/link";
import { AnimateIn, StaggerIn } from "./Animate";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-white via-white/95 to-zinc-50 dark:from-zinc-950 dark:via-zinc-950/95 dark:to-zinc-900 backdrop-blur-sm border-t border-zinc-200/60 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerIn direction="left" className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-zinc-900/5 to-white/0 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Icon container */}
                <div className="relative rounded-lg p-1 bg-gradient-to-br from-white to-zinc-100 dark:from-slate-800/60 dark:to-slate-700/40 ring-1 ring-zinc-200 dark:ring-slate-600/30 shadow-md dark:shadow-black/10">
                  <img
                    src="/dark-splash-icon.png"
                    alt="Wit AI"
                    className="h-8 w-auto rounded-md transform group-hover:scale-105 transition-transform duration-300 block dark:hidden"
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  />
                  <img
                    src="/light-splash-icon.png"
                    alt="Wit AI"
                    className="h-8 w-auto rounded-md transform group-hover:scale-105 transition-transform duration-300 hidden dark:block"
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">Wit AI</span>
            </div>
            <p className="text-zinc-500 dark:text-slate-400 mb-6">
              Building the AI assistant for real estate agents.
            </p>

            <p className="text-zinc-500 dark:text-slate-400 text-sm leading-6">
              Wit AI provides an AI assistant for real estate agents. By interacting with our users via SMS, you agree to our{' '}
              <Link href="/compliance" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline">
                SMS Terms
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline">
                Privacy Policy
              </Link>. Msg &amp; data rates may apply.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white">Product</h4>
            <ul className="space-y-3 text-zinc-500 dark:text-slate-400">
              {/* <li><a href="#" className="hover:text-white transition-colors">Student Agent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parent Agent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bundle Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LMS Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white">Company</h4>
            <ul className="space-y-3 text-zinc-500 dark:text-slate-400">
              {/* <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white">Support</h4>
            <ul className="space-y-3 text-zinc-500 dark:text-slate-400">
              {/* <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li> */}
              <li>
                <Link href="/compliance" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  SMS Terms
                </Link>
              </li>
              <li>
                <Link href="/sms-consent" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Toll-Free Verification
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:hi@witagent.ai" className="flex items-center space-x-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>hi@witagent.ai</span>
                </a>
              </li>
              {/* <li><a href="#" className="hover:text-white transition-colors">School Partnerships</a></li> */}
            </ul>
          </div>
        </StaggerIn>

        <AnimateIn direction="in">
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-zinc-500 dark:text-slate-400 text-sm">
                &copy; 2025 Wit AI. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="text-zinc-500 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-zinc-500 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                >
                  Terms
                </Link>
                <a
                  href="#"
                  className="text-zinc-500 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
}
