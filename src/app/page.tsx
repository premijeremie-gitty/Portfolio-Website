import Image from "next/image";
import FeedbackCarousel from "@/components/FeedbackCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center px-5 md:px-12 py-6 border-b border-border">
        <div className="flex items-center justify-between w-full">
          <span className="text-base font-semibold text-[#ee5a32]">Jeremie Premi</span>
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

      {/* Hero Section */}
      <section className="flex px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-8 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <Image
                src="/images/home/profile.png"
                alt="Jeremie Premi"
                width={108}
                height={108}
                className="rounded-full w-[72px] h-[72px] md:w-[108px] md:h-[108px]"
                priority
              />
              <h1 className="text-[28px] md:text-[44px] leading-[1.37] text-dark">
                I&apos;m Jeremie, a product designer specializing in B2B
                enterprise sales products, with a track record of building
                0&rarr;1 products that drive measurable outcomes.
              </h1>
              <p className="text-base leading-[1.75] text-muted">
                With 3 years in product design, I&apos;ve had the chance to work
                on complex problems across the commercial trades and CRM space,
                using data and AI to design products that real teams depend on
                every day to run their business.
              </p>
            </div>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-9 py-3 bg-dark text-white text-base font-medium leading-[1.5] rounded-[10px] w-fit transition-colors duration-200 hover:bg-dark/90"
          >
            See my projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light-bg px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl leading-[1.37] text-dark">My projects</h2>
            <p className="text-base leading-[1.37] text-muted max-w-[700px]">
              A selection of projects I&apos;ve worked on. Head to the projects tab for the full list.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Project Card 1 */}
            <a href="/projects/crm-plus" className="flex flex-col gap-5 flex-1 group cursor-pointer">
              <div className="relative h-[250px] md:h-[442px] rounded-2xl overflow-hidden bg-[#d2d6db] p-8 md:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/crm-plus/Hero image CRM+.png"
                    alt="CRM+ project mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium leading-[1.37] text-dark">
                  CRM+: Building a CRM for the Trades, 0→1
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Led the design of a CRM built for the trades and integrated into our core platform, driving expansion revenue growth and enabling a critical strategic customer go-live.
                </p>
                <span className="flex items-center gap-2 text-base font-semibold text-dark opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  See project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>

            {/* Project Card 2 */}
            <a href="/projects/multiple-bill-tos" className="flex flex-col gap-5 flex-1 group cursor-pointer">
              <div className="relative h-[250px] md:h-[442px] rounded-2xl overflow-hidden bg-[#d2d6db] p-8 md:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/home/Customer page.png"
                    alt="Customer page project mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium leading-[1.37] text-dark">
                  Multiple Bill To&apos;s
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  A long-requested feature by our largest strategic accounts, enabling commercial shops to manage multiple billing recipients at the account, property, work, and invoice level.
                </p>
                <span className="flex items-center gap-2 text-base font-semibold text-dark opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  See project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Peer Feedback Section */}
      <section className="px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl leading-[1.37] text-dark">Peer feedback</h2>
            <p className="text-base leading-[1.37] text-muted max-w-[700px]">
              Real feedback from mentors and peers who I&apos;ve worked with over the years.
            </p>
          </div>

          <FeedbackCarousel />
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
              If you&apos;d like to reach out, send me an email or connect
              with me on LinkedIn.
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
