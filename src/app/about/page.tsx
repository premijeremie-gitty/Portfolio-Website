import Image from "next/image";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function About() {
  return (
    <div className="flex flex-col">
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

      {/* A little about me */}
      <section className="px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-9">
            {/* Left - Image */}
            <div className="relative w-full md:w-[721px] h-[300px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/main photo.PNG"
                alt="Jeremie Premi"
                fill
                sizes="(max-width: 768px) 100vw, 721px"
                className="object-cover object-[center_40%]"
                priority
              />
            </div>

            {/* Right - Text */}
            <div className="flex flex-col gap-4 justify-start">
              <h3 className="text-2xl md:text-4xl font-medium leading-[1.37] text-dark">
                How I got here
              </h3>
              <p className="text-base md:text-[18px] leading-[1.75] text-muted">
                I&apos;m a product designer specializing in B2B enterprise software
                with a track record of leading complex products from strategy and
                discovery through to delivery and results. Before product design I
                spent 10 years in fine dining kitchens that built grit, a deep
                obsession with the customer experience and a high bar for quality.
              </p>
              <p className="text-base md:text-[18px] leading-[1.75] text-muted">
                Over the past 3 years I&apos;ve owned initiatives end-to-end
                across sales products including CRMs, estimation and quoting tools
                in the commercial trades space. I take on PM responsibilities when
                needed, fold AI into my process, and build products that drive real
                revenue impact for both the business and its customers. I genuinely
                believe the best products are built when designers are at the table
                from the very beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-light-bg px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-12 max-w-[1440px] mx-auto">
          <h2 className="text-2xl md:text-4xl leading-[1.37] text-dark">
            My journey
          </h2>

          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border" />

            {/* 2023 - Fini */}
            <div className="relative flex gap-5 md:gap-10 pb-16">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-[#ee5a32] z-10" />
              </div>
              <div className="flex flex-col gap-2 -mt-1">
                <span className="text-sm font-semibold text-[#ee5a32]">
                  2023 (July &ndash; December)
                </span>
                <h3 className="text-xl md:text-2xl font-medium leading-[1.37] text-dark">
                  Product Design Intern
                </h3>
                <span className="text-base font-medium text-dark/70">
                  Fini
                </span>
                <p className="text-base md:text-[18px] leading-[1.75] text-muted max-w-[560px]">
                  Worked as one of two designers on a SaaS mobile app with
                  the goal of helping the company secure <span className="font-semibold text-dark">$350K in seed funding</span>.
                  Designed a payment integrated event booking flow that
                  contributed to a <span className="font-semibold text-dark">70% increase</span> in new users, and a Shopify
                  integrated in-app marketplace driving additional revenue from
                  brand partners and <span className="font-semibold text-dark">1,500 active members</span>.
                </p>
              </div>
            </div>

            {/* 2023 - Thrillx */}
            <div className="relative flex gap-5 md:gap-10 pb-16">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-[#ee5a32] z-10" />
              </div>
              <div className="flex flex-col gap-2 -mt-1">
                <span className="text-sm font-semibold text-[#ee5a32]">
                  2023 (October &ndash; December)
                </span>
                <h3 className="text-xl md:text-2xl font-medium leading-[1.37] text-dark">
                  Junior Designer
                </h3>
                <span className="text-base font-medium text-dark/70">
                  Thrillx &middot; Design Agency
                </span>
                <p className="text-base md:text-[18px] leading-[1.75] text-muted max-w-[560px]">
                  Led website redesign and rebranding projects for a B2B
                  staffing agency and a CBD e-commerce brand. The staffing
                  redesign drove a <span className="font-semibold text-dark">164% increase</span> in qualified leads, <span className="font-semibold text-dark">63%
                  increase</span> in time on page and a <span className="font-semibold text-dark">22% decrease</span> in bounce rate.
                  The CBD redesign drove a <span className="font-semibold text-dark">126% increase</span> in conversions and a {" "}
                  <span className="font-semibold text-dark">41% increase</span> in average order value.
                </p>
              </div>
            </div>

            {/* 2024-2026 - BuildOps */}
            <div className="relative flex gap-5 md:gap-10">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-[#ee5a32] z-10" />
              </div>
              <div className="flex flex-col gap-2 -mt-1">
                <span className="text-sm font-semibold text-[#ee5a32]">
                  2024 &ndash; Present
                </span>
                <h3 className="text-xl md:text-2xl font-medium leading-[1.37] text-dark">
                  Product Designer
                </h3>
                <span className="text-base font-medium text-dark/70">
                  BuildOps
                </span>
                <p className="text-base md:text-[18px] leading-[1.75] text-muted max-w-[560px]">
                  Lead complex sales products end-to-end as the primary
                  designer across the commercial trades space, including CRMs,
                  estimation and quoting tools. Regularly step into PM
                  responsibilities, writing PRDs, contributing to roadmap
                  planning and product strategy. The work has driven real
                  results, including <span className="font-semibold text-dark">$750K+ in new ARR</span> and getting a <span className="font-semibold text-dark">$1M+
                  strategic customer</span> live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside of work */}
      <section className="px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl leading-[1.37] text-dark">
              When I&apos;m not designing
            </h2>
            <p className="text-base leading-[1.37] text-muted max-w-[900px]">
              Some pictures of my wife Topaz, my crazy dog Mosh (don&apos;t let
              his cuteness fool you), and a few trips I&apos;ve been on over the
              last few years: visiting my dad in France, a family trip to
              Portugal, and a trip to Italy with my wife.
            </p>
          </div>

          {/* Photo Carousel */}
          <PhotoCarousel />
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-muted px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-6 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl leading-[1.37] text-white">
              Let&apos;s connect
            </h2>
            <p className="text-base leading-[1.37] text-white/70">
              If you&apos;d like to reach out, send me an email or connect with
              me on LinkedIn.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:premijeremie@gmail.com"
              className="inline-flex items-center justify-center px-7 md:px-9 py-3 bg-white text-dark text-base font-medium leading-[1.5] rounded-[10px] w-fit transition-colors duration-200 hover:bg-white/90"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/jeremiepremi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 md:px-9 py-3 border border-white/30 text-white text-base font-medium leading-[1.5] rounded-[10px] w-fit transition-colors duration-200 hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
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
