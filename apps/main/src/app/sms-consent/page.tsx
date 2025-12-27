import SmsConsent, { getAgentIdParam } from '../../pages/SmsConsent'

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const agentId = getAgentIdParam(searchParams?.agent)

  return <SmsConsent agentId={agentId} />
}
