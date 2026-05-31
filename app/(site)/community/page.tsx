import CommunityPage from "@/components/pages/CommunityPage";
import { joinCommunity } from "./actions";

export const metadata = {
  title: "EHH Wellness Community — Echoing Holistic Health",
  description:
    "Join the free EHH Wellness Community for weekly education, herbal insights, recipes, and exclusive member offers.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ joined?: string }>;
}) {
  const { joined } = await searchParams;
  return <CommunityPage action={joinCommunity} joinedStatus={joined} />;
}
