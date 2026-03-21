import Image from "next/image";

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

export default function CRMPlusCaseStudy() {
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

      {/* Hero */}
      <section className="px-5 md:px-12 py-10 md:py-[60px]">
        <div className="flex flex-col gap-6 max-w-[1440px] mx-auto">
          <a
            href="/projects"
            className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-dark w-fit"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M3 8L7.5 3.5M3 8L7.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to projects
          </a>

          <div className="flex flex-col gap-4">
            <h1 className="text-[32px] md:text-[48px] leading-[1.2] text-dark max-w-[800px]">
              CRM+: Complete re-platform of an existing product
            </h1>
            <p className="text-lg md:text-xl leading-[1.5] text-muted max-w-[680px]">
              Redesigning and rebuilding a legacy CRM from the ground up for the
              commercial trades industry, turning a dated tool into a modern
              platform that drives real revenue.
            </p>
          </div>

          {/* Project Details */}
          <div className="flex flex-wrap gap-x-20 gap-y-4 pt-4 border-t border-border">
            {projectDetails.map((detail) => (
              <div key={detail.label} className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                  {detail.label}
                </span>
                <span className="text-base text-dark">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-5 md:px-12 pb-10 md:pb-16">
        <div className="relative w-full h-[300px] md:h-[560px] max-w-[1440px] mx-auto rounded-2xl md:rounded-2xl overflow-hidden">
          <Image
            src="/images/project1-mockup.png"
            alt="CRM+ hero"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Context */}
      <section className="bg-light-bg px-5 md:px-12 py-10 md:py-16">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">
            Context
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0 mt-16 md:mt-[60px]">
            <div className="flex flex-col gap-3 flex-1 md:pr-12">
              <h3 className="text-xl font-medium text-dark">The problem</h3>
              <p className="text-base leading-[1.75] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus. Eu est luctus dis
                felis nisl sed scelerisque mattis. Neque donec quam eu porttitor
                suspendisse amet tincidunt.
              </p>
            </div>
            <div className="hidden md:block w-[1px] bg-dark/20" />
            <div className="flex flex-col gap-3 flex-1 md:pl-12">
              <h3 className="text-xl font-medium text-dark">The opportunity</h3>
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

      {/* Results & Impact */}
      <section className="px-5 md:px-12 py-10 md:py-16">
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
                className="flex flex-col gap-2 p-8 md:p-10 bg-light-bg rounded-2xl"
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

      {/* Research */}
      <section className="bg-light-bg px-5 md:px-12 py-10 md:py-16">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">
              Research &amp; Discovery
            </h2>
            <p className="text-lg leading-[1.6] text-muted max-w-[680px]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
              habitant et ultrices velit. Egestas sed dignissim blandit nunc. Nec
              elit suspendisse massa sollicitudin lectus. Eu est luctus dis felis
              nisl sed scelerisque mattis.
            </p>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-[60px]">
            {["Insight one", "Insight two", "Insight three"].map(
              (insight, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-6 bg-white rounded-2xl"
                >
                  <span className="text-sm font-semibold text-[#ee5a32]">
                    0{i + 1}
                  </span>
                  <h4 className="text-lg font-medium text-dark">{insight}</h4>
                  <p className="text-sm leading-[1.6] text-muted">
                    Lorem ipsum dolor sit amet consectetur. Adipiscing mi
                    maecenas habitant et ultrices velit blandit nunc.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Section 03 — Solution */}
      <section className="px-5 md:px-12 py-10 md:py-16">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-dark">
                Solution
              </h2>
              <p className="text-lg leading-[1.6] text-muted max-w-[680px]">
                Below are solutions that we launched with to the key opportunities
                identified, and how these areas have evolved.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-16 md:gap-[88px] mt-16 md:mt-[60px]">
          {/* Solution Block 1 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden bg-light-bg">
              <Image
                src="/images/project1-mockup.png"
                alt="Robust profiles"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[1100px]">
              <h3 className="text-[20px] font-medium text-dark">
                Robust profiles
              </h3>
              <p className="text-base leading-[1.75] text-muted">
                We launched with profiles with standard and custom field
                tracking. Profiles allowed users to understand a team
                member&apos;s project experience at a glance and make better
                informed assignment decisions.
              </p>
            </div>
          </div>

          {/* Solution Block 2 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden bg-light-bg">
              <Image
                src="/images/project2-mockup.png"
                alt="Streamlined pipeline management"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[1100px]">
              <h3 className="text-[20px] font-medium text-dark">
                Streamlined pipeline management
              </h3>
              <p className="text-base leading-[1.75] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus.
              </p>
            </div>
          </div>

          {/* Solution Block 3 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden bg-light-bg">
              <Image
                src="/images/project1-mockup.png"
                alt="Intelligent reporting dashboard"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[1100px]">
              <h3 className="text-[20px] font-medium text-dark">
                Intelligent reporting dashboard
              </h3>
              <p className="text-base leading-[1.75] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus.
              </p>
            </div>
          </div>

          {/* Solution Block 4 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden bg-light-bg">
              <Image
                src="/images/project2-mockup.png"
                alt="Advanced search and filtering"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[1100px]">
              <h3 className="text-[20px] font-medium text-dark">
                Advanced search and filtering
              </h3>
              <p className="text-base leading-[1.75] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus.
              </p>
            </div>
          </div>

          {/* Solution Block 5 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden bg-light-bg">
              <Image
                src="/images/project1-mockup.png"
                alt="Automated workflows"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[1100px]">
              <h3 className="text-[20px] font-medium text-dark">
                Automated workflows
              </h3>
              <p className="text-base leading-[1.75] text-muted">
                Lorem ipsum dolor sit amet consectetur. Adipiscing mi maecenas
                habitant et ultrices velit. Egestas sed dignissim blandit nunc.
                Nec elit suspendisse massa sollicitudin lectus.
              </p>
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
            href="/projects"
            className="text-2xl md:text-4xl font-medium text-white transition-colors duration-200 hover:text-[#ee5a32]"
          >
            Project title goes here &rarr;
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
