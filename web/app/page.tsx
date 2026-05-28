import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { Pillars } from "@/components/landing/pillars";
import { FeatureBento } from "@/components/landing/feature-bento";
import { CompanyBrain } from "@/components/landing/company-brain";
import { DualVerdict } from "@/components/landing/dual-verdict";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Comparison } from "@/components/landing/comparison";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <TrustStrip />
        <Pillars />
        <FeatureBento />
        <CompanyBrain />
        <DualVerdict />
        <HowItWorks />
        <Comparison />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
