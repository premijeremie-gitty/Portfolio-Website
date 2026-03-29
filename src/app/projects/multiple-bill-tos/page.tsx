"use client";

import Image from "next/image";

const metrics = [
  { value: "TBD", label: "Metric one" },
  { value: "TBD", label: "Metric two" },
  { value: "TBD", label: "Metric three" },
];

export default function MultipleBillTosCaseStudy() {
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

      {/* Hero Image — Full bleed */}
      <section className="w-full h-[300px] md:h-[560px] bg-light-bg px-5 md:px-12 py-8 md:py-12">
        <div className="relative w-full h-full">
          <Image
            src="/images/home/Customer page.png"
            alt="Multiple Bill To's hero"
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
            Multiple Bill To&apos;s
          </h1>
          <p className="text-lg md:text-xl leading-[1.5] text-muted max-w-[680px]">
            A long-requested feature by our largest strategic accounts, enabling commercial shops to manage multiple billing recipients at the account, property, work, and invoice level.
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
              <h3 className="text-lg font-semibold text-dark">Pillar one</h3>
              <p className="text-base leading-[1.75] text-muted max-w-[900px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas habitant et ultrices velit egestas.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#ee5a32]">02</span>
              <h3 className="text-lg font-semibold text-dark">Pillar two</h3>
              <p className="text-base leading-[1.75] text-muted max-w-[900px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas habitant et ultrices velit egestas.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#ee5a32]">03</span>
              <h3 className="text-lg font-semibold text-dark">Pillar three</h3>
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
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-24 md:gap-[134px] mt-16 md:mt-[60px]">
            {/* Solution Block 1 */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Section title
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                  habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                  Nec elit suspendisse massa sollicitudin lectus.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-muted text-sm">Image placeholder</span>
                  </div>
                </div>
                <div className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-muted text-sm">Image placeholder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Block 2 */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 max-w-[1100px]">
                <h3 className="text-[24px] font-bold text-dark">
                  Section title
                </h3>
                <p className="text-base leading-[1.75] text-muted">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                  habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                  Nec elit suspendisse massa sollicitudin lectus.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-muted text-sm">Image placeholder</span>
                  </div>
                </div>
                <div className="relative w-full md:w-1/2 h-[280px] md:h-[480px] rounded-2xl overflow-hidden bg-[#d2d6db] px-6 py-8 md:px-8 md:py-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-muted text-sm">Image placeholder</span>
                  </div>
                </div>
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
            href="/projects/crm-plus"
            className="text-2xl md:text-4xl font-medium text-white transition-colors duration-200 hover:text-[#ee5a32]"
          >
            CRM+: Building a CRM for the Trades &rarr;
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
