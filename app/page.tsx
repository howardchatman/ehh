import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import FocusAreas from "@/components/sections/FocusAreas";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Lifestyle from "@/components/sections/Lifestyle";
import Journal from "@/components/sections/Journal";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FocusAreas />
      <FeaturedProducts />
      <Lifestyle />
      <Journal />
      <Newsletter />
    </>
  );
}
