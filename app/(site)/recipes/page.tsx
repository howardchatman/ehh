import { cookies } from "next/headers";
import RecipesPage from "@/components/pages/RecipesPage";
import { unlockRecipes } from "./actions";

export const metadata = {
  title: "5 Gut-Healing Tea Recipes — Echoing Holistic Health™",
  description: "Unlock 5 free sea moss tea recipes crafted to heal and restore your gut naturally.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; access?: string }>;
}) {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("ehh_recipes_access")?.value === "1";
  const { error } = await searchParams;

  return (
    <RecipesPage
      hasAccess={hasAccess}
      action={unlockRecipes}
      hasError={error === "1"}
    />
  );
}
