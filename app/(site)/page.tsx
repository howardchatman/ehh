import HealingWaterHero    from "@/components/sections/HealingWaterHero";
import WhyCustomersLove   from "@/components/sections/WhyCustomersLove";
import HealingWaterProducts from "@/components/sections/HealingWaterProducts";
import PackOptions         from "@/components/sections/PackOptions";
import WhySeaMoss          from "@/components/sections/WhySeaMoss";
import HowToEnjoy          from "@/components/sections/HowToEnjoy";
import EventsPreview       from "@/components/sections/EventsPreview";
import CommunitySection    from "@/components/sections/CommunitySection";

export default function Home() {
  return (
    <>
      <HealingWaterHero />
      <WhyCustomersLove />
      <HealingWaterProducts />
      <PackOptions />
      <WhySeaMoss />
      <HowToEnjoy />
      <EventsPreview />
      <CommunitySection />
    </>
  );
}
