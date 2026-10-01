'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import HeroOverlay from '@/components/HeroOverlay';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TechConstellation from '@/components/TechConstellation';
import SolutionsWorkflow from '@/components/SolutionsWorkflow';
import TestimonialsSection from '@/components/TestimonialsSection';
import InquiryDrawer from '@/components/InquiryDrawer';
import Footer from '@/components/Footer';

// Dynamically import InteractiveCore3D with SSR false for smooth WebGL Canvas mounting
const InteractiveCore3D = dynamic(
  () => import('@/components/InteractiveCore3D'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-[#07090e] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Initializing WebGL 3D Matrix...
          </span>
        </div>
      </div>
    ),
  }
);

export default function LandingPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Custom Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* Fixed Glassmorphic Navigation */}
      <Navigation onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Editorial Hero Section */}
      <HeroOverlay onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Signature 3D Interactive WebGL Core & GSAP Scroll Journey */}
      <InteractiveCore3D onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Specialized Services Grid */}
      <ServicesSection onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Selected Case Studies (Cloud, Chain, Flash) */}
      <CaseStudiesSection />

      {/* Technology Stack & Tooling Matrix */}
      <TechConstellation />

      {/* Workflow & Operational Automation */}
      <SolutionsWorkflow onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Social Proof & Client Testimonials */}
      <TestimonialsSection />

      {/* Interactive Project Inquiry Drawer / Estimator */}
      <InquiryDrawer
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

      {/* Editorial Agency Footer */}
      <Footer onOpenInquiry={() => setInquiryOpen(true)} />
    </main>
  );
}
