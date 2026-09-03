import React, { useState } from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { AboutBento } from './components/AboutBento';
import { EngineeringBento } from './components/EngineeringBento';
import { ProjectsBento } from './components/ProjectsBento';
import { RealCasesSection } from './components/RealCasesSection';
import { ConstructionVideosSection } from './components/ConstructionVideosSection';
import { CalculatorBento } from './components/CalculatorBento';
import { PackagesBento } from './components/PackagesBento';
import { RoadmapBento } from './components/RoadmapBento';
import { TeamSection } from './components/TeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { DocumentsSection } from './components/DocumentsSection';
import { FaqBento } from './components/FaqBento';
import { FooterBento } from './components/FooterBento';
import { ContactModal } from './components/ContactModal';
import { AppointmentModal } from './components/AppointmentModal';
import { DocViewerModal } from './components/DocViewerModal';
import { PrivacyModal } from './components/PrivacyModal';
import { CookieBanner } from './components/CookieBanner';
import { FloatingActions } from './components/FloatingActions';
import { NotFoundPage } from './components/NotFoundPage';

function AppContent() {
  const { currentPage } = useThemeLanguage();
  const [calcArea, setCalcArea] = useState<number>(350);
  const [calcStyle, setCalcStyle] = useState<string>('fachwerk');

  const handleSelectVillaForCalculator = (area: number, style: string) => {
    setCalcArea(area);
    setCalcStyle(style);
  };

  if (currentPage === '404') {
    return (
      <>
        <Preloader />
        <NotFoundPage />
        <ContactModal />
        <AppointmentModal />
        <PrivacyModal />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F8F6] dark:bg-[#0A0B0D] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 selection:bg-[#5B7E9F] selection:text-white">
      <Preloader />
      <Navbar />
      <main id="main-content" className="relative overflow-x-hidden">
        <HeroBento />
        <AboutBento />
        <EngineeringBento />
        <ProjectsBento onSelectVillaForCalculator={handleSelectVillaForCalculator} />
        <RealCasesSection />
        <ConstructionVideosSection />
        <CalculatorBento initialArea={calcArea} initialStyle={calcStyle} />
        <PackagesBento />
        <RoadmapBento />
        <TeamSection />
        <ReviewsSection />
        <DocumentsSection />
        <FaqBento />
      </main>
      <FooterBento />
      <FloatingActions />
      <ContactModal />
      <AppointmentModal />
      <DocViewerModal />
      <PrivacyModal />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <ThemeLanguageProvider>
      <AppContent />
    </ThemeLanguageProvider>
  );
}
