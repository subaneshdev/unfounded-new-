import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPostOne() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <StaggeredMenu
          isFixed={true}
          position="right"
          items={[
              { label: 'Blog', ariaLabel: 'Blog Index', link: '/blog' },
              { label: 'Home', ariaLabel: 'Home', link: '/' },
              { label: 'Ziggers', ariaLabel: 'Ziggers', link: 'https://www.ziggers.in/' },
          ]}
          socialItems={[
              { label: 'X', link: 'https://x.com/CSubanesh' },
              { label: 'LinkedIn', link: 'https://www.linkedin.com/company/unfoundedventurelab' },
              { label: 'Instagram', link: 'https://www.instagram.com/unfounded.in/' }
          ]}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          accentColor="#10B981"
      />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Lab Notes
        </Link>

        <header className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
            Ecosystem
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8">
            Why a Venture Lab in Chennai is the Perfect Breeding Ground for Micro SaaS
          </h1>
          <div className="flex items-center gap-4 text-zinc-400 font-medium">
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700" />
            <div>
              <p className="text-white">Subanesh</p>
              <p className="text-sm">April 18, 2026 • 6 min read</p>
            </div>
          </div>
        </header>

        <article className="prose prose-invert prose-zinc max-w-none text-zinc-300 text-lg leading-relaxed space-y-8">
          <p className="text-xl text-white font-medium italic border-l-4 border-blue-500 pl-6 py-2">
            "Chennai isn't just a city; it's a high-throughput factory for logic. When you combine industrial volumes of filter kaapi with the 40°C humidity that forced everyone into their home-offices a decade before it was cool, you get a unique kind of focus."
          </p>

          <p>
            For years, the global narrative has centered around Silicon Valley's blitzscaling or Bangalore's services giants. But there's a quieter transformation happening on the coasts of Tamil Nadu. A shift from "managed services" to "owned products." 
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">The Logic Paradox</h2>
          <p>
            Chennai has always been the backend of the backend. We built the banking systems for New York and the CRM flows for London. We understand systems. We understand scale. But for too long, that talent was rented. A **venture lab in Chennai** changes that math by reclaimed the logic.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Why Micro SaaS?</h2>
          <p>
            We don't want to build the next giant dinosaur. We want to build an ecosystem of nimble, profitable Micro SaaS products. Why? Because Micro SaaS allows for the speed of experimentation that a venture lab thrives on. 
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li><strong className="text-white">Velocity:</strong> From concept to checkout page in under 72 hours.</li>
            <li><strong className="text-white">Profitability:</strong> Built on lean stacks that don't require $10M in VC funding to survive.</li>
            <li><strong className="text-white">Community:</strong> Leveraging the deep, specialized talent pool of Chennai's technical districts.</li>
          </ul>

          <p>
            At Unfounded, we're not just building apps; we're building a playbook for how to ship from India to the world without losing the "Namma Chennai" soul in the process.
          </p>
        </article>
      </div>

      <div className="relative z-10 pt-16">
          <FooterTapedDesign />
      </div>
    </div>
  );
}
