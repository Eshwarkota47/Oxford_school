'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { AnnouncementTicker } from '@/components/AnnouncementTicker';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsCounter } from '@/components/StatsCounter';
import { NoticeBoard } from '@/components/NoticeBoard';
import { AboutSection } from '@/components/AboutSection';
import { AcademicsSection } from '@/components/AcademicsSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { AdmissionSection } from '@/components/AdmissionSection';
import { GallerySection } from '@/components/GallerySection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LocationSection } from '@/components/LocationSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { AdmissionModal } from '@/components/AdmissionModal';
import { ParentPortalModal } from '@/components/ParentPortalModal';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

export default function HomePage() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [parentPortalOpen, setParentPortalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col relative">
      {/* Top Contact & Language Bar */}
      <TopBar onOpenParentPortal={() => setParentPortalOpen(true)} />

      {/* Breaking Announcement Ticker */}
      <AnnouncementTicker />

      {/* Sticky Main Header */}
      <Navbar onOpenAdmission={() => setAdmissionModalOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenAdmission={() => setAdmissionModalOpen(true)} />

      {/* Stats Counter Row */}
      <StatsCounter />

      {/* Live Notice Board & Academic Calendar */}
      <NoticeBoard />

      {/* About Institution & Pillars */}
      <AboutSection />

      {/* Academic Pathways (KG, Primary, Middle, SSLC) */}
      <AcademicsSection />

      {/* World-Class Infrastructure & Labs */}
      <FacilitiesSection />

      {/* Admission Center & Fee Calculator */}
      <AdmissionSection onOpenAdmission={() => setAdmissionModalOpen(true)} />

      {/* HD Photo Gallery with Lightbox */}
      <GallerySection />

      {/* Hall of Fame & Achievements */}
      <AchievementsSection />

      {/* Parent Reviews */}
      <TestimonialsSection />

      {/* Location, Bus Routes & Directions */}
      <LocationSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Direct Inquiry & Contact Desk */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenAdmission={() => setAdmissionModalOpen(true)} />

      {/* Admission Modal */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />

      {/* Parent & Student Portal Modal */}
      <ParentPortalModal
        isOpen={parentPortalOpen}
        onClose={() => setParentPortalOpen(false)}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppWidget />
    </main>
  );
}
