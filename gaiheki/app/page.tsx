import HeroSection from "./components/HeroSection";
import AboutServiceSection from "./components/AboutServiceSection";
import FeaturesSection from "./components/FeaturesSection";
import DiagnosisForm from "./components/DiagnosisForm";
import ServiceAreasSection from "./components/ServiceAreasSection";
import CaseStudySection from "./components/CaseStudySection";
import HowToUseSection from "./components/HowToUseSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DiagnosisForm />
      <AboutServiceSection />
      <FeaturesSection />
      <ServiceAreasSection />
      <CaseStudySection />
      <HowToUseSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
