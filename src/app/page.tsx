import Image from "next/image";
import FeedbackCarousel from "@/components/FeedbackCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center px-12 py-6 border-b border-border">
        <div className="flex items-center justify-between w-full">
          <span className="text-base text-dark">Jeremie Premi</span>
          <div className="flex items-center gap-6">
            {["Home", "Projects", "About me", "Resume"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base text-dark transition-all duration-200 hover:font-bold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex px-12 py-12">
        <div className="flex flex-col gap-8 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <Image
                src="/images/profile.png"
                alt="Jeremie Premi"
                width={108}
                height={108}
                className="rounded-full"
                priority
              />
              <h1 className="text-[44px] leading-[1.37] text-dark">
                I&apos;m Jeremie, a product designer specializing in B2B
                enterprise sales products, with a track record of shaping
                strategy, building 0-1 product and driving measurable
                outcomes.
              </h1>
              <p className="text-base leading-[1.37] text-muted">
                With deep experience across the commercial trades, the
                restaurant industry and CRM&apos;s, I design products that
                actually work and build and ship them in code, with AI
                embedded in every step of my workflow
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-9 py-3 bg-dark text-white text-base font-medium leading-[1.5] rounded-[10px] w-fit transition-colors duration-200 hover:bg-dark/90"
          >
            See my projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light-bg px-12 py-12">
        <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl leading-[1.37] text-dark">My projects</h2>
            <p className="text-base leading-[1.37] text-muted max-w-[476px]">
              A small selection of the projects I&apos;ve worked on over my
              career. You can view a full display of my work on the
              &quot;Projects&quot; tab.
            </p>
          </div>

          <div className="flex gap-10">
            {/* Project Card 1 */}
            <div className="flex flex-col gap-5 flex-1">
              <div className="relative h-[442px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/project1-mockup.png"
                  alt="CRM+ project mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium leading-[1.37] text-dark">
                  CRM+: Complete re-platform of an existing product
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lead designer working the 0-1 design of a CRM for the
                  trades, increasing revenue by $750K, enabling the go live
                  of a 1 million dollar customer and 85 tenants onboarded in
                  12 months.
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="flex flex-col gap-5 flex-1">
              <div className="relative h-[442px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/project2-mockup.png"
                  alt="CRM+ project mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium leading-[1.37] text-dark">
                  CRM+: Complete re-platform of an existing product
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lead designer working the 0-1 design of a CRM for the
                  trades, increasing revenue by $750K, enabling the go live
                  of a 1 million dollar customer and 85 tenants onboarded in
                  12 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Feedback Section */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl leading-[1.37] text-dark">Peer feedback</h2>
            <p className="text-base leading-[1.37] text-muted max-w-[476px]">
              Real feedback from mentors and peers who I&apos;ve worked with
              over the years.
            </p>
          </div>

          <FeedbackCarousel />
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-muted px-12 py-12">
        <div className="flex flex-col gap-6 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl leading-[1.37] text-white">
              Let&apos;s connect
            </h2>
            <p className="text-base leading-[1.37] text-white max-w-[476px]">
              If you would like to reach out, please send me an email, or
              reach our via LinkedIn.
            </p>
          </div>
          <a
            href="mailto:hello@jeremiepremi.com"
            className="inline-flex items-center justify-center px-9 py-3 bg-white text-dark text-base font-medium leading-[1.5] rounded-[10px] w-fit transition-colors duration-200 hover:bg-white/90"
          >
            Email me
          </a>
        </div>
      </section>
    </div>
  );
}
