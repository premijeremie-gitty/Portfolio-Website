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
          <h2 className="text-2xl md:text-4xl leading-[1.37] text-dark">
            A little about me
          </h2>

          <div className="flex flex-col md:flex-row gap-9">
            {/* Left - Image */}
            <div className="relative w-full md:w-[721px] h-[300px] md:h-[500px] shrink-0 rounded-[24px] md:rounded-[36px] overflow-hidden">
              <Image
                src="/images/about-hero.png"
                alt="Jeremie Premi"
                fill
                sizes="(max-width: 768px) 100vw, 721px"
                className="object-cover"
                priority
              />
            </div>

            {/* Right - Text */}
            <div className="flex flex-col gap-4 justify-start">
              <h3 className="text-2xl md:text-4xl font-medium leading-[1.37] text-dark">
                More than just a product designer, I&apos;m a husband, a dog
                dad, an avid traveler and a lover of all things fitness!
              </h3>
              <p className="text-base md:text-xl leading-[1.4] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus. Eu est luctus
                dis felis nisl sed scelerisque mattis. Neque donec quam eu
                porttitor.
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
                <span className="text-sm font-semibold text-[#ee5a32] tracking-wide uppercase">
                  2023
                </span>
                <h3 className="text-xl md:text-2xl font-medium leading-[1.37] text-dark">
                  Associate Product Designer
                </h3>
                <span className="text-base font-medium text-dark/70">
                  Fini
                </span>
                <p className="text-base leading-[1.75] text-muted max-w-[560px]">
                  Very early stage startup where I worked on multiple products
                  including a marketplace solution as one of the two designers
                  on the team.
                </p>
              </div>
            </div>

            {/* 2023 - Thrillx */}
            <div className="relative flex gap-5 md:gap-10 pb-16">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-[#ee5a32] z-10" />
              </div>
              <div className="flex flex-col gap-2 -mt-1">
                <span className="text-sm font-semibold text-[#ee5a32] tracking-wide uppercase">
                  2023
                </span>
                <h3 className="text-xl md:text-2xl font-medium leading-[1.37] text-dark">
                  Junior Designer
                </h3>
                <span className="text-base font-medium text-dark/70">
                  Thrillx &middot; Design Agency
                </span>
                <p className="text-base leading-[1.75] text-muted max-w-[560px]">
                  Lorem ipsum dolor sit amet consectetur. Sollicitudin massa
                  tortor consequat non nulla posuere morbi ante. Turpis feugiat
                  vivamus dui elementum augue mauris.
                </p>
              </div>
            </div>

            {/* 2024-2026 - BuildOps */}
            <div className="relative flex gap-5 md:gap-10">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-[#ee5a32] z-10" />
              </div>
              <div className="flex flex-col gap-2 -mt-1">
                <span className="text-sm font-semibold text-[#ee5a32] tracking-wide uppercase">
                  2024 &ndash; 2026
                </span>
                <h3 className="text-xl md:text-2xl font-medium leading-[1.37] text-dark">
                  Product Designer
                </h3>
                <span className="text-base font-medium text-dark/70">
                  BuildOps
                </span>
                <p className="text-base leading-[1.75] text-muted max-w-[560px]">
                  Lorem ipsum dolor sit amet consectetur. Sollicitudin massa
                  tortor consequat non nulla posuere morbi ante. Turpis feugiat
                  vivamus dui elementum augue mauris.
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
              Outside of work
            </h2>
            <p className="text-base leading-[1.37] text-muted max-w-[510px]">
              Some pictures of my wife Topaz, my insane dog Mosh and some really
              fun trips I&apos;ve been on over the last few years to France,
              Portugal and Italy and Las Vegas!
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
