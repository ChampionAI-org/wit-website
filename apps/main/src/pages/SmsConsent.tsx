import Link from 'next/link'

type SmsConsentAgent = {
  id: string
  name: string
  businessName: string
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
    businessName: 'Champion AI',
    tollFreeNumber: '(888) 450-6404',
  },
]

function getAgentIdParam(raw: string | string[] | undefined): string | null {
  if (!raw) return null
  if (Array.isArray(raw)) return raw[0] ?? null
  return raw
}

export default function SmsConsent({ agentId }: SmsConsentProps) {
  const selectedAgentId = agentId?.trim() ? agentId.trim() : null
  const selectedAgent = selectedAgentId ? agents.find((a) => a.id === selectedAgentId) : null

  const visibleAgents = selectedAgent ? [selectedAgent] : agents

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">SMS Consent and Opt-In (Wit AI)</h1>
        
        <div className="rounded-xl border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">SMS/Text Message Consent (Opt-in)</h2>
          <p className="leading-7 text-zinc-900 dark:text-zinc-100">
            By texting <span className="font-bold">START</span> to <span className="font-bold">(888) 450-6404</span>, you <span className="font-bold">agree to receive SMS/text messages</span> from <span className="font-bold">Wit AI (Champion AI)</span> about your inquiry, including customer care and coordination (questions, scheduling, next steps). <span className="font-bold">Message frequency varies. Msg and data rates may apply.</span> Reply <span className="font-bold">STOP</span> to opt out, <span className="font-bold">HELP</span> for help.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Terms:</span>{' '}
              <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                https://witagent.ai/terms
              </Link>
            </p>
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Privacy:</span>{' '}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                https://witagent.ai/privacy
              </Link>
            </p>
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Support:</span>{' '}
              <a href="mailto:hi@witagent.ai" className="text-blue-600 dark:text-blue-400 hover:underline">
                hi@witagent.ai
              </a>
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why this page exists</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Mobile carriers require proof that people agreed to receive text messages from a business. This page explains how SMS
          consent works for agents using Wit AI and is used as opt-in documentation for toll-free verification reviews.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What is happening when you text an agent number</h2>
        <ol className="list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>You see an agent’s toll-free number on a listing, website, sign, or shared contact info.</li>
          <li>You send the first text to that number (this is the opt-in).</li>
          <li>The message is delivered through Twilio to Wit AI.</li>
          <li>The agent and/or the agent’s AI assistant replies 1:1 to help with questions, scheduling, and next steps.</li>
          <li>You can stop messages anytime by replying STOP, or get help by replying HELP.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-2">Opt-in method</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          <span className="font-semibold">Opt-in type:</span> via text. You opt in by sending the first text message to the
          agent’s toll-free number. You opt in by texting <span className="font-bold">START</span> (or any message) to the toll-free number shown above.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Message purpose</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-3">
          Messages are for customer care and conversational support related to your inquiry, such as:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>Questions about a listing</li>
          <li>Availability, tours, and scheduling</li>
          <li>Next steps and coordination with the agent</li>
        </ul>
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
            <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://witagent.ai/terms
            </Link>
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Privacy:</span>{' '}
            <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://witagent.ai/privacy
            </Link>
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-2">Agent directory</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Each agent section below includes the agent identity and the toll-free number, because you are consenting to receive
          messages from that specific business.
        </p>

        {selectedAgentId && !selectedAgent ? (
          <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/60 dark:bg-red-950/20 p-4 mb-6">
            <p className="text-sm text-red-700 dark:text-red-300">
              Unknown agent id: <span className="font-mono">{selectedAgentId}</span>
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
                  {agent.name} ({agent.businessName})
                </h3>

                <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">Toll-free number:</span>{' '}
                  <span className="font-mono">{agent.tollFreeNumber}</span>
                </p>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Disclosure (consent)</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    By texting <span className="font-bold">START</span> to <span className="font-bold">{agent.tollFreeNumber}</span>, you <span className="font-bold">agree to receive SMS/text messages</span> from <span className="font-bold">{agent.name} ({agent.businessName})</span> related to your inquiry, including customer care and coordination (questions, scheduling, next steps). <span className="font-bold">Message frequency varies. Msg and data rates may apply.</span> Reply <span className="font-bold">STOP</span> to opt out, <span className="font-bold">HELP</span> for help. Terms: https://witagent.ai/terms Privacy: https://witagent.ai/privacy
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

        <div className="mt-10 pt-6">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export { getAgentIdParam, type SmsConsentAgent }
