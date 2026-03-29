"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const metrics = [
  { value: "$1M+", label: "Customer go-live unblocked" },
  { value: "$750K", label: "ARR generated in 12 months" },
  { value: "85", label: "Tenants live with 50% growth QoQ" },
];

const projectDetails = [
  { label: "Role", value: "Lead Product Designer" },
  { label: "Timeline", value: "2024 — Present" },
  { label: "Company", value: "BuildOps" },
];

// Image groups per solution block
const solutionGroups: Record<string, string[]> = {
  block1: ["/images/crm-plus/New sales process page.png", "/images/crm-plus/new opp type page.png"],
  block2: ["/images/crm-plus/Kanban.png", "/images/crm-plus/Opportunity detail page.png"],
  block3: ["/images/crm-plus/Preferences.png", "/images/crm-plus/opp detail page activity 2.png", "/images/crm-plus/Opp detail with activity.png"],
  block4: ["/images/crm-plus/Estimation.png", "/images/crm-plus/opp detail estimate.png"],
  block5: ["/images/crm-plus/Templates.png", "/images/crm-plus/Generate proposal.png", "/images/crm-plus/Opp detail proposal.png"],
  block6: ["/images/crm-plus/Won opps.png"],
};

export default function CRMPlusCaseStudy() {
  const [lightboxGroup, setLightboxGroup] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, startIndex: lightboxIndex, duration: 15, watchDrag: false }
  );

  const currentImages = lightboxGroup ? solutionGroups[lightboxGroup] : [];

  const openLightbox = (group: string, index: number) => {
    setLightboxGroup(group);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxGroup(null);
    setLightboxIndex(0);
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Sync embla starting slide when lightbox opens
  useEffect(() => {
    if (emblaApi && lightboxGroup) {
      emblaApi.scrollTo(lightboxIndex, true);
    }
  }, [emblaApi, lightboxGroup, lightboxIndex]);

  // Track active slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setLightboxIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && emblaApi) emblaApi.scrollNext();
      if (e.key === "ArrowLeft" && emblaApi) emblaApi.scrollPrev();
    };
    if (lightboxGroup) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxGroup, emblaApi]);

  return (
    <div className="flex flex-col">
      {/* Lightbox Gallery */}
      {lightboxGroup && currentImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 left-6 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center cursor-pointer transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 right-6 z-20 bg-white/15 text-white text-base font-semibold px-4 py-2 rounded-full">
            {lightboxIndex + 1} / {currentImages.length}
          </div>

          {/* Embla Carousel with arrows */}
          <div className="relative w-full h-full p-6 md:p-16 pointer-events-none">
            <div className="relative h-full">
              <div className="overflow-hidden h-full pointer-events-auto" ref={emblaRef}>
                <div className="flex h-full">
                  {currentImages.map((src, i) => (
                    <div key={i} className="relative flex-[0_0_100%] h-full">
                      <Image
                        src={src}
                        alt={`Screen ${i + 1}`}
                        fill
                        sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Left arrow */}
              {currentImages.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
                  className="absolute left-[12%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center cursor-pointer transition-colors pointer-events-auto"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
              )}
              {/* Right arrow */}
              {currentImages.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); scrollNext(); }}
                  className="absolute right-[12%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center cursor-pointer transition-colors pointer-events-auto"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="flex items-center px-5 md:px-12 py-6 border-b border-border">
        <div className="flex items-center justify-between w-full">
          <a href="/" className="text-base font-semibold text-[#ee5a32]">
            Jeremie Premi
          </a>
          <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-end">
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "About me", href: "/about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base text-dark transition-all duration-200 hover:font-bold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Image — Full bleed */}
      <section className="w-full h-[300px] md:h-[560px] bg-light-bg px-5 md:px-12 py-8 md:py-12">
        <div className="relative w-full h-full">
          <Image
            src="/images/crm-plus/Hero image CRM+.png"
            alt="CRM+ hero"
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Hero */}
      <section className="px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-6 max-w-[1440px] mx-auto">
          <h1 className="text-[32px] md:text-[48px] leading-[1.2] text-dark max-w-[800px]">
            CRM+: Building a CRM for the Trades, 0→1
          </h1>
          <p className="text-lg md:text-xl leading-[1.5] text-muted max-w-[680px]">
            Led the design of a CRM built for the trades and integrated into our core platform, driving expansion revenue growth and enabling a critical strategic customer go-live.
          </p>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="bg-light-bg px-5 md:px-12 py-10 md:py-16">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">
              Results &amp; Impact
            </h2>
            <p className="text-lg leading-[1.6] text-muted max-w-[680px]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
              habitant et ultrices velit. Egestas sed dignissim blandit nunc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-[60px]">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-2 p-8 md:p-10 bg-white rounded-2xl"
              >
                <span className="text-[40px] md:text-[56px] font-semibold leading-none text-[#ee5a32]">
                  {metric.value}
                </span>
                <span className="text-base text-muted leading-[1.4]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="px-5 md:px-12 py-10 md:py-16">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="flex flex-col gap-4 flex-1 md:pr-12">
              <h3 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">The problem</h3>
              <p className="text-base leading-[1.75] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus. Eu est luctus dis
                felis nisl sed scelerisque mattis. Neque donec quam eu porttitor
                suspendisse amet tincidunt.
              </p>
            </div>
            <div className="hidden md:block w-[1px] bg-dark/20" />
            <div className="flex flex-col gap-4 flex-1 md:pl-12">
              <h3 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">The opportunity</h3>
              <p className="text-base leading-[1.75] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus. Eu est luctus dis
                felis nisl sed scelerisque mattis. Neque donec quam eu porttitor
                suspendisse amet tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="bg-light-bg px-5 md:px-12 py-10 md:py-16">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">
              The approach
            </h2>
            <p className="text-lg leading-[1.6] text-muted max-w-[680px]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
              habitant et ultrices velit. Egestas sed dignissim blandit nunc.
            </p>
          </div>

          {/* Approach Pillars */}
          <div className="flex flex-col gap-10 mt-16 md:mt-[60px]">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#ee5a32]">01</span>
              <h3 className="text-lg font-semibold text-dark">Built for the trades</h3>
              <p className="text-base leading-[1.75] text-muted max-w-[900px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas habitant et ultrices velit egestas.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#ee5a32]">02</span>
              <h3 className="text-lg font-semibold text-dark">Integrated with the platform</h3>
              <p className="text-base leading-[1.75] text-muted max-w-[900px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas habitant et ultrices velit egestas.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#ee5a32]">03</span>
              <h3 className="text-lg font-semibold text-dark">Familiar CRM patterns</h3>
              <p className="text-base leading-[1.75] text-muted max-w-[900px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas habitant et ultrices velit egestas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-5 md:px-12 pt-10 md:pt-16 pb-20 md:pb-32">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">
                The solution
              </h2>
              <p className="text-lg leading-[1.6] text-muted max-w-[680px]">
                Below are solutions that we launched with to the key opportunities
                identified, and how these areas have evolved.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-24 md:gap-[134px] mt-16 md:mt-[60px]">
            {/* Solution Block 1 — Double */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Sales Process &amp; Opportunity Type Setup
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  We launched with profiles with standard and custom field
                  tracking. Profiles allowed users to understand a team
                  member&apos;s project experience at a glance and make better
                  informed assignment decisions.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div
                  className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block1", 0)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/New sales process page.png"
                      alt="New sales process page"
                      fill
                      sizes="50vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
                <div
                  className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block1", 1)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/new opp type page.png"
                      alt="New opportunity type page"
                      fill
                      sizes="50vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
              </div>
            </div>


            {/* Solution Block 2 — Double */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Managing Opportunities
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                  habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                  Nec elit suspendisse massa sollicitudin lectus.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div
                  className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block2", 0)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/Kanban.png"
                      alt="Kanban view"
                      fill
                      sizes="50vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
                <div
                  className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block2", 1)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/Opportunity detail page.png"
                      alt="Opportunity detail page"
                      fill
                      sizes="50vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
              </div>
            </div>


            {/* Solution Block 3 — 2 + 1 layout */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Sales Activity and Calendar Integration
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                  habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                  Nec elit suspendisse massa sollicitudin lectus.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {/* Two images side by side */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div
                    className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                    onClick={() => openLightbox("block3", 0)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/crm-plus/Preferences.png"
                        alt="Preferences"
                        fill
                        sizes="50vw"
                        className="object-contain"
                      />
                    </div>
                    <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                  </div>
                  <div
                    className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                    onClick={() => openLightbox("block3", 1)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/crm-plus/opp detail page activity 2.png"
                        alt="Opportunity detail with activity"
                        fill
                        sizes="50vw"
                        className="object-contain"
                      />
                    </div>
                    <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                  </div>
                </div>
                {/* Full-width image */}
                <div
                  className="relative w-full h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block3", 2)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/Opp detail with activity.png"
                      alt="Opportunity detail with activity"
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
              </div>
            </div>


            {/* Solution Block 4 — Double */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Creating Estimates for Projects and Jobs
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                  habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                  Nec elit suspendisse massa sollicitudin lectus.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div
                  className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block4", 0)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/Estimation.png"
                      alt="Estimation"
                      fill
                      sizes="50vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
                <div
                  className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block4", 1)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/opp detail estimate.png"
                      alt="Opportunity detail estimation"
                      fill
                      sizes="50vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
              </div>
            </div>


            {/* Solution Block 5 — 2 + 1 layout */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Creating Templates and Sending Proposals
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                  habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                  Nec elit suspendisse massa sollicitudin lectus.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {/* Two images side by side */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div
                    className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                    onClick={() => openLightbox("block5", 0)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/crm-plus/Templates.png"
                        alt="Templates"
                        fill
                        sizes="50vw"
                        className="object-contain"
                      />
                    </div>
                    <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                  </div>
                  <div
                    className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                    onClick={() => openLightbox("block5", 1)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/crm-plus/Generate proposal.png"
                        alt="Generate proposal"
                        fill
                        sizes="50vw"
                        className="object-contain"
                      />
                    </div>
                    <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                  </div>
                </div>
                {/* Full-width image */}
                <div
                  className="relative w-full h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                  onClick={() => openLightbox("block5", 2)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/crm-plus/Opp detail proposal.png"
                      alt="Proposal opportunity detail"
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                  <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
                </div>
              </div>
            </div>


            {/* Block 6: Single image */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Converting to Operational Work
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                  habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                  Nec elit suspendisse massa sollicitudin lectus.
                </p>
              </div>
              <div
                className="relative w-full h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12 cursor-pointer group"
                onClick={() => openLightbox("block6", 0)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/crm-plus/Won opps.png"
                    alt="Won opportunities"
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
                <svg className="absolute top-3 right-3 w-5 h-5 text-[#ee5a32] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" /></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="bg-muted px-5 md:px-12 py-10 md:py-16">
        <div className="flex flex-col gap-6 max-w-[1440px] mx-auto items-center text-center">
          <span className="text-sm text-white/50 font-medium uppercase tracking-wider">
            Next project
          </span>
          <a
            href="/projects/multiple-bill-tos"
            className="text-2xl md:text-4xl font-medium text-white transition-colors duration-200 hover:text-[#ee5a32]"
          >
            Multiple Bill To&apos;s &rarr;
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark px-5 md:px-12 py-8">
        <div className="flex items-center justify-center max-w-[1440px] mx-auto">
          <span className="text-sm text-white/50">
            &copy; 2026 Jeremie Premi. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
