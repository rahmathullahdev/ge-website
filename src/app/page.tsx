import Hero from "@/components/Hero/Hero";
import ServicesMarquee from "@/components/ServicesMarquee/ServicesMarquee";
import TransformSection from "@/components/TransformSection/TransformSection";
import Features from "@/components/Features/Features";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Testimonials from "@/components/Testimonials/Testimonials";
import Partners from "@/components/Partners/Partners";
import FAQ from "@/components/FAQ/FAQ";
import CTAFooter from "@/components/CTAFooter/CTAFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <TransformSection />
      <Features />
      <SuccessStories />
      <CaseStudies />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTAFooter />
    </>
  );
}
