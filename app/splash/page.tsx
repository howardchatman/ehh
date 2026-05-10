import SplashPage from "@/components/ui/SplashPage";
import { unlockSite, joinWaitlist } from "./actions";

export const metadata = {
  title: "Echoing Holistic Health — Coming Soon",
  description: "Personalized herbal wellness is coming. Join the waitlist.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; waitlist?: string }>;
}) {
  const { error, waitlist } = await searchParams;
  return (
    <SplashPage
      hasError={error === "1"}
      action={unlockSite}
      joinWaitlist={joinWaitlist}
      waitlistStatus={waitlist}
    />
  );
}
