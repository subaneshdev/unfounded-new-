import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPostTwo() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Unfounded Manifesto: Building for the Coastal Shipping Era",
    "description": "The foundational philosophy of Unfounded venture lab, focusing on shipping experiments, local logic, and the 'Coastal Mindset' from Chennai.",
    "author": {
      "@type": "Organization",
      "name": "Unfounded Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Unfounded",
      "logo": {
        "@type": "ImageObject",
        "url": "https://unfounded.in/favicon.ico"
      }
    },
    "datePublished": "2026-04-15",
    "image": "https://unfounded.in/unfounded-team.jpg"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://unfounded.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://unfounded.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Manifesto",
        "item": "https://unfounded.in/blog/unfounded-manifesto"
      }
    ]
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-500/20">
            Philosophy
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8">
            The Unfounded Manifesto: Building for the Coastal Shipping Era
          </h1>
          <div className="flex items-center gap-4 text-zinc-400 font-medium">
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700" />
            <div>
              <p className="text-white">Unfounded Team</p>
              <p className="text-sm">April 15, 2026 • 5 min read</p>
            </div>
          </div>
        </header>

        <article className="prose prose-invert prose-zinc max-w-none text-zinc-300 text-lg leading-relaxed space-y-8">
          <p>
            We got bored of planning. We got bored of decks. We got bored of the 2-year roadmap that was obsolete by month three.
          </p>

          <p className="text-2xl text-white font-black tracking-tight uppercase">
            So we started building.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4 uppercase tracking-tight">Experiment First, Pitch Later</h2>
          <p>
            The traditional startup model is built on permission. Permission from investors, permission from "market validation," permission from complex hiring cycles. A **venture lab** is built on the opposite: The right to be wrong, and the right to find out quickly.
          </p>

          <p>
            Unfounded is an ecosystem where we ship the experiment first. If it survives the beach, we keep building. If it sinks, we've only lost a week, not a year.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4 capitalize">The Coastal Mindset</h2>
          <p>
            Building from Chennai gives us a specific vantage point. We are close to the movement of goods, the movement of people, and the raw energy of an emerging global South. We're not building for the Metaverse; we're building for the physical world augmented by intelligent logic. 
          </p>
          <p>
            Whether it's localized labor with <strong className="text-white underline decoration-blue-500 underline-offset-4">Ziggers</strong> or closing the brain-context loop with <strong className="text-white underline decoration-orange-500 underline-offset-4">LoopMemory</strong>, every product in our lab follows one rule: 
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl my-10 border-l-4 border-l-yellow-500">
            <h3 className="text-xl font-bold text-white mb-4">The Unfounded Filter</h3>
            <ol className="list-decimal pl-6 space-y-3 font-medium text-zinc-400">
              <li>Does it solve a problem that existed 10 years ago and will exist 10 years from now?</li>
              <li>Can we ship a version 0.1 in 30 days?</li>
              <li>Does it feel like magic to the user?</li>
            </ol>
          </div>

          <p>
            Welcome to the Coastal Shipping Era. We're just getting started.
          </p>
        </article>
      </div>

      <div className="relative z-10 pt-16">
          <FooterTapedDesign />
      </div>
    </div>
  );
}
