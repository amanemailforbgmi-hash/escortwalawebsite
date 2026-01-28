import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProfiles } from "@/components/home/FeaturedProfiles";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProfiles />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
