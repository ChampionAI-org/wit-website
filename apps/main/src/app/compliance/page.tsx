import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">SMS Terms and Disclosures (Wit AI)</h1>
        
        <div id="optin" className="rounded-xl border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Compliance Flow:</h2>
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                One-time parenthetical append
              </p>
              <p className="leading-7 text-zinc-900 dark:text-zinc-100 italic">
                “To ensure total carrier compliance, an automated parenthetical disclosure is appended at least once to the first message sent to a contact. This provides immediate brand identification and opt-out instructions while maintaining a professional 1:1 conversation.”
              </p>
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">Example of first message:</p>
                <p className="text-zinc-800 dark:text-zinc-200">
                  "Hi [Name], checking if you're free tomorrow at 2pm for a sync? <span className="font-bold">(Sent via Wit AI. Msg/data rates apply. STOP to opt-out. HELP for more info)</span>"
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-blue-200 dark:border-blue-800">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Global Disclosure:</h2>
            <p className="leading-7 text-zinc-900 dark:text-zinc-100 italic">
              “Wit AI provides an Executive Assistant suite. By interacting with our users via SMS, you agree to our SMS Terms and Privacy Policy. Msg & data rates may apply. Frequency varies. Reply <span className="font-bold">STOP</span> to opt-out, <span className="font-bold">HELP</span> for help. Support: hi@witagent.ai. Terms: <a href="https://witagent.ai/terms" className="underline">https://witagent.ai/terms</a> Privacy: <a href="https://witagent.ai/privacy" className="underline">https://witagent.ai/privacy</a>”
            </p>
          </div>
        </div>

        <h2 id="abuse" className="text-xl font-semibold mt-8 mb-2">Zero Tolerance for Abuse</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6 font-medium">
          Wit AI maintains a strict zero-tolerance policy for SMS abuse. Every professional executive is required to pass a mandatory in-app "SMS Consent & Compliance" gate before they can access SMS features. They must explicitly acknowledge that their assigned number will be revoked immediately if they violate our Terms of Service or SMS Consent requirements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why this page exists</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Mobile carriers require public documentation of SMS terms and opt-in disclosures for campaign verification.
          This page explains how Wit AI’s professional assistant services work and serves as legal documentation for recipients of messages.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What is happening when you receive a message</h2>
        <ol className="list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>A professional executive uses Wit AI as their primary communications assistant.</li>
          <li>To ensure total compliance, an automated parenthetical disclosure is appended at least once to messages sent to a contact. This provides immediate brand identification and opt-out instructions.</li>
          <li>The assistant helps the executive manage context, draft replies, and coordinate scheduling based on real-time availability.</li>
          <li>All communication is 1:1 and manually directed by the professional.</li>
          <li>You can stop messages anytime by replying <span className="font-bold">STOP</span>, or get help by replying <span className="font-bold">HELP</span>.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-2">Opt-in method</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Recipients of messages from a Wit AI number typically have a pre-existing professional relationship with the sender or have provided consent through verbal or business interactions. By interacting with the number, recipients agree to receive 1:1 professional communication and administrative support.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Opt-out and assistance</h2>
        <ul className="list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>Msg & data rates may apply.</li>
          <li>Frequency varies.</li>
          <li>Reply <span className="font-bold text-zinc-900 dark:text-white">STOP</span> to opt-out. (You will receive one final automated text message confirming your request).</li>
          <li>Reply <span className="font-bold text-zinc-900 dark:text-white">HELP</span> for help.</li>
          <li>Email us at <a href="mailto:hi@witagent.ai" className="text-blue-600 dark:text-blue-400 hover:underline">hi@witagent.ai</a> for assistance.</li>
        </ul>

        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Abuse (including spam, harassment, or messaging without consent) may result in your assigned number being revoked.
          Use of Wit AI is subject to our{' '}
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://witagent.ai/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          .
        </p>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl p-4 mb-8">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Support email:</span>{' '}
            <a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hi@witagent.ai">
              hi@witagent.ai
            </a>
          </p>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Msg & data rates may apply.</li>
            <li>Frequency varies.</li>
            <li>Reply <strong>STOP</strong> to opt-out.</li>
            <li>Reply <strong>HELP</strong> for help.</li>
          </ul>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Terms:</span>{' '}
            <a href="https://witagent.ai/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://witagent.ai/terms
            </a>
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Privacy:</span>{' '}
            <a href="https://witagent.ai/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://witagent.ai/privacy
            </a>
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-2">Related pages</h2>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl p-4 mb-8">
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="font-semibold">Abuse Policy:</span>{' '}
            <Link href="/compliance#abuse" className="text-blue-600 dark:text-blue-400 hover:underline">
              Zero Tolerance Policy
            </Link>{' '}
            — Our strict enforcement policy against SMS misuse.
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="font-semibold">Compliance Evidence:</span>{' '}
            <Link href="/sms-compliance-gate" className="text-blue-600 dark:text-blue-400 hover:underline">
              /sms-compliance-gate
            </Link>{' '}
            — Visual evidence of the mandatory in-app compliance gate for professional executives.
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="font-semibold">SMS Consent (Toll-Free):</span>{' '}
            <Link href="/sms-consent" className="text-blue-600 dark:text-blue-400 hover:underline">
              /sms-consent
            </Link>{' '}
            — For toll-free numbers used by individual agents.
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">SMS Terms:</span>{' '}
            <span className="text-zinc-500 dark:text-zinc-400">
              This page — For Wit AI’s professional assistant services and 10DLC communication.
            </span>
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}



