import { GoogleAnalytics } from "@next/third-parties/google";
import MicrosoftClarity from "@/app/lib/analytics/MicrosoftClarity";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {process.env.NEXT_PUBLIC_CLARITY_ID && <MicrosoftClarity />}
    </>
  );
}
