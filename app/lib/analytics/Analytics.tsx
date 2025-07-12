import { GoogleAnalytics } from "@next/third-parties/google";
import MicrosoftClarity from "@/app/lib/analytics/MicrosoftClarity";

export default function Analytics() {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      {process.env.NEXT_PUBLIC_CLARITY_ID && <MicrosoftClarity />}
    </>
  );
}
