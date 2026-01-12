import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen pt-16 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">SMS Compliance Gate Evidence</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            This page hosts the mandatory in-app compliance gate shown to all Wit AI professionals before they can use SMS features.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl">
          <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-medium text-zinc-500">In-App SMS Compliance Modal</span>
          </div>
          
          <div className="relative aspect-[9/19.5] w-full max-w-[400px] mx-auto my-8 border-[8px] border-zinc-950 dark:border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden">
             <Image
              src="/sms-compliance-gate.png"
              alt="Wit AI SMS Compliance Gate"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Enforcement Details</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li><strong>Mandatory Gate:</strong> Users cannot access the SMS inbox or send messages until this agreement is acknowledged.</li>
              <li><strong>Zero Tolerance Policy:</strong> Explicitly warns users that violation of SMS terms results in immediate revocation of their number.</li>
              <li><strong>Express Consent:</strong> Requires an active toggle ("Executive Acknowledgment") certifying that consent has been obtained for all recipients.</li>
              <li><strong>Linkage:</strong> Provides direct in-app links to the public <Link href="/compliance" className="text-blue-600 hover:underline">Compliance Policy</Link> and <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>.</li>
            </ul>
          </section>

          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <Link href="/compliance" className="text-blue-600 dark:text-blue-400 hover:underline">
              Back to Compliance Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
