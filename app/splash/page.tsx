import SplashPage from "@/components/ui/SplashPage";

export const metadata = {
  title: "Echoing Holistic Health — Coming Soon",
  description: "Something intentional is being prepared.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return <SplashPage hasError={error === "1"} />;
}
