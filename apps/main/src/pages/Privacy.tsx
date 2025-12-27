import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-10 [&_h2[id]]:scroll-mt-16">
        <h1 className="text-3xl font-bold mb-6">Wit's Privacy Policy</h1>

        <h2 className="text-xl font-semibold mt-8 mb-2">SUMMARY</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
          We do not sell your data. Your privacy is a right.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
          Among third parties, we use OpenAI for their AI models, Google (Gemini)
          for certain AI experiences, Supabase to store data, and AWS to host our
          application. We use enterprise API configurations so OpenAI and Google
          do not use your content to train their models. Your data is encrypted
          in transit and at rest on Supabase and AWS. For more, OpenAI's
          {' '}<a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://openai.com/enterprise-privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>{' '}is here. Google's{' '}<a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>{' '}is here. Supabase's{' '}<a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://supabase.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>{' '}is here. AWS's{' '}<a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://aws.amazon.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>{' '}is here. For more, please see Section 10 below.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          We apply layered security controls: encrypted transport (TLS 1.2+),
          encryption at rest, strict access controls, audit logging, and regular
          reviews. Production credentials are secrets-managed, and only a small
          support team can access user data when you explicitly request help.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          We ask for access to your Google account, Google Calendar, Google
          Tasks, and — for partner schools — Blackbaud, Canvas, or school
          management system account.
        </p>
        <h2 id="integrations-security" className="text-xl font-semibold mt-8 mb-2">INTEGRATIONS & DATA SECURITY</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          We power app connections through Composio, our integrations provider (for example, Gmail). OAuth consent and tokens are
          handled by Composio; Wit never sees your account credentials. We request only the permissions needed to perform the
          actions you ask for, and you can disconnect access at any time from the Integrations screen or your Google Account settings.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          For details about Composio’s security posture and certifications, please see
          {' '}<a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://trust.composio.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Composio’s Trust Center
          </a>. Composio publicly documents enterprise security controls and compliance (including SOC 2 information). Wit’s systems
          continue to follow the policies in Sections 5 and 9 below.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
          When you use our service, we collect the personal information you give
          us such as your name, phone number, email address, and chat messages.
          We also automatically receive your computer’s internet protocol (IP)
          address in order to provide us with information that helps us learn
          about your browser and operating system. Message marketing (if
          applicable): With your permission, we may send you text or electronic
          messages about our service, your accounts, your requests, and other
          updates.
        </p>

        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
          We do not share mobile information with third parties or affiliates
          for marketing or promotional purposes. All of the above categories
          exclude text messaging originator opt-in data and consent; this
          information will not be shared with any third parties.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 2 - CONSENT</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
          How do you get my consent? When you provide us with personal
          information to complete a transaction or message us, we imply that you
          consent to our collecting it and using it for that specific reason
          only. If we ask for your personal information for a secondary reason,
          like marketing, we will either ask you directly for your expressed
          consent or provide you with an opportunity to say no.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          How do I withdraw my consent? If after you opt-in, you change your
          mind, you may withdraw your consent for us to contact you, for the
          continued collection, use or disclosure of your information, at any
          time, by contacting us at hi@witagent.ai.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 3 - DISCLOSURE
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          We may disclose your personal information if we are required by law to
          do so or if you violate our Terms of Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 4 - THIRD-PARTY SERVICES
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
          In general, the third-party providers used by us will only collect,
          use, and disclose your information to the extent necessary to allow
          them to perform the services they provide to us. However, certain
          third-party service providers, have their own privacy policies with
          respect to the information we are required to provide to them. For
          these providers, we recommend that you read their privacy policies so
          you can understand the manner in which your personal information will
          be handled by these providers.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          In particular, remember that certain providers may be located in or
          have facilities that are located in a different jurisdiction than
          either you or us. So if you elect to proceed with a transaction that
          involves the services of a third-party service provider, then your
          information may become subject to the laws of the jurisdiction(s) in
          which that service provider or its facilities are located. Once you
          leave our website, message chat, or are redirected to a third-party
          website or application, you are no longer governed by this Privacy
          Policy or our website’s Terms of Service.
        </p>

        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Links: When you click on links on our website or message chat, they
          may direct you away from our website or message chat. We are not
          responsible for the privacy practices of other sites and encourage you
          to read their privacy statements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 5 - SECURITY
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          To protect your personal information, we encrypt data in transit and
          at rest, enforce least-privilege access, monitor for suspicious
          activity, and maintain detailed audit logs. Administrative access is
          restricted to a vetted team under confidentiality agreements, with
          multi-factor authentication required for all production systems. We
          regularly review our security posture and update controls to align with
          modern best practices.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 6 - COOKIES</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          For a list of cookies we use, please kindly contact us at
          hi@witagent.ai.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 7 - AGE OF CONSENT
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          By using this service, you represent that you are at least the age of
          majority in your state or province of residence, or that you are the
          age of majority in your state or province of residence and you have
          given us your consent to allow any of your minor dependents to use
          this site.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 8 - CHANGES TO THIS PRIVACY POLICY
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          We reserve the right to modify this privacy policy at any time, so
          please review it frequently. Changes and clarifications will take
          effect immediately upon their posting on the website. If we make
          material changes to this policy, we will notify you here that it has
          been updated, so that you are aware of what information we collect,
          how we use it, and under what circumstances, if any, we use and/or
          disclose it. If our company is acquired or merged with another
          company, your information may be transferred to the new owners.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 9 - LIMITED USE REQUIREMENTS
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          Wit's use and transfer of information received from Google APIs to any
          other app will adhere to{' '}
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://developers.google.com/terms/api-services-user-data-policy"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          SECTION 10 - WHAT DATA IS SHARED?
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-6">
          We use your messages, calendar events, Google tasks, and personal
          school details with OpenAI’s enterprise models and Google’s Gemini
          models to provide assistance. Both providers operate under enterprise
          privacy programs that prevent training on your content. See OpenAI’s{' '}
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://openai.com/enterprise-privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          and Google’s{' '}
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          for details. We store generated results securely on Supabase or AWS so
          Web and mobile apps can serve you better. Stored data may include
          personal details, classes, assignments, and teachers depending on your
          requests. Access is tightly governed by the controls described in
          Sections 4 and 5.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          QUESTIONS AND CONTACT INFORMATION
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-2">
          If you would like to: access, correct, amend or delete any personal
          information we have about you, register a complaint, or simply want
          more information contact our Privacy Compliance Officer at
          hi@witagent.ai.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">Wit</p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">
          [Re: Privacy Compliance Officer]
        </p>

        <div className="mt-10 pt-6">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

