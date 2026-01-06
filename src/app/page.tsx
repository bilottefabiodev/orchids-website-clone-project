import HeroSection from '@/components/sections/hero-section';
import ScrollingKeywords from '@/components/sections/scrolling-keywords';
import FeaturesGrid from '@/components/sections/features-grid';
import WorldChanged from '@/components/sections/world-changed';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';
import OpportunityCta from '@/components/sections/opportunity-cta';
import TargetAudienceSection from '@/components/sections/target-audience';
import ScheduleOverview from '@/components/sections/schedule-overview';
import InstructorBio from '@/components/sections/instructor-bio';
import PricingCard from '@/components/sections/pricing-card';
import WhyCheapSection from '@/components/sections/why-cheap';
import GuaranteeSection from '@/components/sections/guarantee-section';
import UrgencyBanner from '@/components/sections/urgency-banner';
import FaqSection from '@/components/sections/faq-section';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <main className="flex flex-col">
        <HeroSection />
        <ScrollingKeywords />
        <FeaturesGrid />
        <WorldChanged />
        <TestimonialsCarousel />
        <OpportunityCta />
        <TargetAudienceSection />
        <ScheduleOverview />
        <InstructorBio />
        <PricingCard />
        <WhyCheapSection />
        <GuaranteeSection />
        <UrgencyBanner />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}