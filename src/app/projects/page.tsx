import Image from "next/image";

const projects = [
  {
    image: "/images/project1-mockup.png",
    title: "CRM+: Complete re-platform of an existing product",
    description:
      "Lead designer working the 0-1 design of a CRM for the trades, increasing revenue by $750K, enabling the go live of a 1 million dollar customer and 85 tenants onboarded in 12 months.",
  },
  {
    image: "/images/project2-mockup.png",
    title: "CRM+: Complete re-platform of an existing product",
    description:
      "Lead designer working the 0-1 design of a CRM for the trades, increasing revenue by $750K, enabling the go live of a 1 million dollar customer and 85 tenants onboarded in 12 months.",
  },
  {
    image: "/images/project1-mockup.png",
    title: "CRM+: Complete re-platform of an existing product",
    description:
      "Lead designer working the 0-1 design of a CRM for the trades, increasing revenue by $750K, enabling the go live of a 1 million dollar customer and 85 tenants onboarded in 12 months.",
  },
  {
    image: "/images/project2-mockup.png",
    title: "CRM+: Complete re-platform of an existing product",
    description:
      "Lead designer working the 0-1 design of a CRM for the trades, increasing revenue by $750K, enabling the go live of a 1 million dollar customer and 85 tenants onboarded in 12 months.",
  },
  {
    image: "/images/project1-mockup.png",
    title: "CRM+: Complete re-platform of an existing product",
    description:
      "Lead designer working the 0-1 design of a CRM for the trades, increasing revenue by $750K, enabling the go live of a 1 million dollar customer and 85 tenants onboarded in 12 months.",
  },
  {
    image: "/images/project2-mockup.png",
    title: "CRM+: Complete re-platform of an existing product",
    description:
      "Lead designer working the 0-1 design of a CRM for the trades, increasing revenue by $750K, enabling the go live of a 1 million dollar customer and 85 tenants onboarded in 12 months.",
  },
];

export default function Projects() {
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

      {/* Projects Section */}
      <section className="bg-light-bg px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-11 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl leading-[1.37] text-dark">
              Selected Projects
            </h2>
            <p className="text-base leading-[1.37] text-muted max-w-[510px]">
              A view of some of my proudest work I&apos;ve accomplished over the
              years.
            </p>
          </div>

          {/* Project Grid - 3 rows of 2 */}
          <div className="flex flex-col gap-12 md:gap-[82px]">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex flex-col md:flex-row gap-9">
                {projects.slice(row * 2, row * 2 + 2).map((project, i) => (
                  <a
                    href="/projects/crm-plus"
                    key={i}
                    className="flex flex-col gap-5 flex-1 group cursor-pointer"
                  >
                    <div className="relative h-[250px] md:h-[442px] rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl font-medium leading-[1.37] text-dark">
                        {project.title}
                      </h3>
                      <p className="text-base leading-[1.75] text-muted">
                        {project.description}
                      </p>
                      <span className="flex items-center gap-2 text-base font-semibold text-dark opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        See project
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
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
