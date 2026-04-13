import { notFound } from "next/navigation";
import { getFocusArea, getAllSlugs } from "@/lib/focus-areas";
import { getProductsByFocusArea } from "@/lib/products";
import FocusAreaPage from "@/components/pages/FocusAreaPage";

// Pre-render all four focus area pages at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = getFocusArea(params.slug);
  if (!area) return {};
  return {
    title: `${area.title} — Echoing Holistic Health`,
    description: area.heroSubhead,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const area = getFocusArea(params.slug);
  if (!area) notFound();

  const relatedProducts = getProductsByFocusArea(area.slug);

  return <FocusAreaPage area={area} relatedProducts={relatedProducts} />;
}
