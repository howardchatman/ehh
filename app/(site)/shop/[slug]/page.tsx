import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import ProductPage from "@/components/pages/ProductPage";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Echoing Holistic Health`,
    description: product.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && p.focusAreas.some((f) => product.focusAreas.includes(f)))
    .slice(0, 3);

  return <ProductPage product={product} related={related} />;
}
