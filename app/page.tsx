import HeaderSection from './header/page';
import HeroSection from './hero/page';
import FooterSection from './footer/page';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="landing-page-root">
      <HeaderSection />
      
      {/* Scrollable layout wrapper */}
      <main id="main-content-layout">
        <HeroSection />
      </main>
      
      <FooterSection />
    </div>
  );
}