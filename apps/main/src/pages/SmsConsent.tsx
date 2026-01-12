import Link from 'next/link'

export type SmsConsentAgent = {
  id: string
  name: string
  businessName?: string
  tollFreeNumber: string
  isInternalTest?: boolean
}

type SmsConsentProps = {
  agentId?: string | null
}

const agents: SmsConsentAgent[] = [
  {
    id: 'internal-test',
    name: 'Wit AI',
    tollFreeNumber: '(888) 450-6404',
    isInternalTest: true,
  },
  {
    id: 'wit-ai-2',
    name: 'Wit AI',
    tollFreeNumber: '(866) 347-5449',
  },
]

export function getAgentIdParam(raw: string | string[] | undefined): string | null {
  if (!raw) return null
  if (Array.isArray(raw)) return raw[0] ?? null
  return raw
}

export async function getServerSideProps({ query }: { query: any }) {
  return {
    props: {
      agentId: getAgentIdParam(query.agent),
    },
  }
}

export default function SmsConsent({ agentId }: SmsConsentProps) {
  const selectedAgentId = agentId?.trim() ? agentId.trim() : null
  const selectedAgent = selectedAgentId ? agents.find((a) => a.id === selectedAgentId) : null

  const visibleAgents = selectedAgent ? [selectedAgent] : agents

  const headerNumber = selectedAgent?.tollFreeNumber ?? '(888) 450-6404'
  const headerSender = selectedAgent ? selectedAgent.name : 'Wit AI'
  const businessName = selectedAgent?.businessName ?? 'Wit AI'

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Toll-Free Verification (Wit AI)</h1>
        
        <div id="optin" className="rounded-xl border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Call to action:</h2>
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                Text <span className="text-blue-600">"HI"</span> to <span className="whitespace-nowrap">(888) 450-6404</span>
                <span className="block text-sm font-normal text-zinc-500 mt-1">(Wit AI)</span>
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                <span className="text-xs font-bold text-zinc-400 uppercase">or</span>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                Text <span className="text-blue-600">"HI"</span> to <span className="whitespace-nowrap">(866) 347-5449</span>
                <span className="block text-sm font-normal text-zinc-500 mt-1">(Wit AI)</span>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-blue-200 dark:border-blue-800">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Disclosure:</h2>
            <p className="leading-7 text-zinc-900 dark:text-zinc-100 italic">
              “I agree to receive SMS/text messages from <span className="font-bold">Wit AI</span> about my inquiry (customer care and scheduling). Message frequency varies. Msg and data rates may apply. Reply <span className="font-bold">STOP</span> to opt out, <span className="font-bold">HELP</span> for help. Terms: <a href="https://witagent.ai/terms" className="underline">https://witagent.ai/terms</a> Privacy: <a href="https://witagent.ai/privacy" className="underline">https://witagent.ai/privacy</a>”
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why this page exists</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Mobile carriers require proof that people agreed to receive text messages from a business. This page explains how SMS
          consent works for professionals using Wit AI and is used as opt-in documentation for toll-free verification reviews.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What is happening when you text a professional number</h2>
        <ol className="list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>You see a professional’s toll-free number on a listing, website, sign, or shared contact info.</li>
          <li>You send the first text to that number (this is the opt-in).</li>
          <li>The message is delivered through Twilio to Wit AI.</li>
          <li>The professional and/or their assistant replies 1:1 to help with questions, scheduling, and next steps.</li>
          <li>You can stop messages anytime by replying STOP, or get help by replying HELP.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-2">Opt-in method</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          <span className="font-semibold">Opt-in type:</span> via text. You opt in by sending the text keyword <span className="font-bold">"HI"</span> to the
          professional’s toll-free number.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Message purpose</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-3">
          Messages are for customer care and conversational support related to your inquiry, such as:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>Questions and support</li>
          <li>Scheduling and coordination</li>
          <li>Next steps and follow-ups</li>
        </ul>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6 text-sm italic">
          Example inquiries include real estate questions, appointment setting, and professional consultations.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          We do not use these numbers for spam or bulk promotional blasts.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Opt-out and help</h2>
        <ul className="list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>Reply STOP to opt out and stop receiving messages.</li>
          <li>Reply HELP for help.</li>
        </ul>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl p-4 mb-8">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Support email:</span>{' '}
            <a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hi@witagent.ai">
              hi@witagent.ai
            </a>
          </p>
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

        <h2 id="abuse" className="text-xl font-semibold mt-10 mb-2 text-red-600 dark:text-red-400">Zero Tolerance for Abuse</h2>
        <div className="rounded-xl border-2 border-red-500 bg-red-50/60 dark:bg-red-950/20 p-6 mb-8">
          <p className="leading-7 text-red-700 dark:text-red-400 font-bold mb-3 text-lg uppercase tracking-tight">
            Strict Zero Tolerance Policy
          </p>
          <p className="leading-7 text-zinc-900 dark:text-zinc-100 font-medium mb-3">
            Wit AI maintains an absolute zero-tolerance policy for SMS abuse, spam, and harassment.
          </p>
          <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
            Every professional executive is required to pass a mandatory in-app "SMS Consent & Compliance" gate before accessing SMS features. They must explicitly certify that they have obtained express consent from all contacts and acknowledge that their assigned number will be revoked immediately for any misuse or compliance failure.
          </p>
          <Link 
            href="/sms-compliance-gate" 
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
          >
            View Mandatory Compliance Gate (Evidence)
          </Link>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-2">Professional directory</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Each section below includes the identity and the toll-free number, because you are consenting to receive
          messages from that specific business.
        </p>

        {selectedAgentId && !selectedAgent ? (
          <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/60 dark:bg-red-950/20 p-4 mb-6">
            <p className="text-sm text-red-700 dark:text-red-300">
              Unknown id: <span className="font-mono">{selectedAgentId}</span>
            </p>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
              Showing full directory instead.
            </p>
          </div>
        ) : null}

        <div className="space-y-6">
          {visibleAgents.map((agent) => {
            const permalink = `https://witagent.ai/sms-consent?agent=${encodeURIComponent(agent.id)}`
            const isSelected = !!selectedAgent && selectedAgent.id === agent.id

            return (
              <section
                key={agent.id}
                id={`agent-${agent.id}`}
                className={`rounded-xl border bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl p-5 ${
                  isSelected
                    ? 'border-blue-300 dark:border-blue-700'
                    : 'border-zinc-200 dark:border-zinc-800'
                }`}
              >
                <h3 className="text-lg font-bold">
                  Wit AI (powered by Wit AI)
                </h3>

                <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">Toll-free number:</span>{' '}
                  <span className="font-mono">{agent.tollFreeNumber}</span>
                </p>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Opt-in Keyword</p>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300 font-bold">HI</p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Disclosure (consent)</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    Texting <span className="font-bold">"HI"</span> to <span className="font-bold">{agent.tollFreeNumber}</span> constitutes your agreement to receive SMS/text messages from <span className="font-bold">Wit AI</span> about your inquiry (customer care and scheduling). Message frequency varies. Msg and data rates may apply. Reply STOP to opt out, HELP for help. Terms: https://witagent.ai/terms Privacy: https://witagent.ai/privacy
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Permalink for verification</p>
                  <p className="mt-1 text-sm">
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" href={permalink}>
                      {permalink}
                    </a>
                  </p>
                </div>
              </section>
            )
          })}
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-2">Related pages</h2>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl p-4 mb-8">
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="font-semibold">Abuse Policy:</span>{' '}
            <Link href="/sms-consent#abuse" className="text-blue-600 dark:text-blue-400 hover:underline">
              Zero Tolerance Policy
            </Link>{' '}
            — Detailed information on our strict enforcement against SMS misuse.
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="font-semibold">Compliance Evidence:</span>{' '}
            <Link href="/sms-compliance-gate" className="text-blue-600 dark:text-blue-400 hover:underline">
              /sms-compliance-gate
            </Link>{' '}
            — Visual evidence of the mandatory in-app compliance gate for professional executives.
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="font-semibold">Toll-Free Verification Link:</span>{' '}
            <Link href="/sms-consent" className="text-blue-600 dark:text-blue-400 hover:underline">
              /sms-consent
            </Link>{' '}
            — This page, used for toll-free number compliance.
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">SMS Terms (10DLC):</span>{' '}
            <Link href="/compliance" className="text-blue-600 dark:text-blue-400 hover:underline">
              /compliance
            </Link>{' '}
            — For Wit AI’s pool of local 10DLC numbers used for executive assistant support.
          </p>
        </div>

        <div className="mt-10 pt-6">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

