import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProfiles } from "@/components/home/FeaturedProfiles";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";
import { StickyContactBar } from "@/components/shared/StickyContactBar";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProfiles />
      <WhyChooseUs />
      <CTASection />
      <StickyContactBar phoneNumber="+91-8527420914" />
    </Layout>
  );
};

export default Index;
