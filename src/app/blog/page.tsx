import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Unfounded | Venture Lab Blog",
  description: "Insights into the Chennai venture lab ecosystem, Micro SaaS experiments, and building for the future.",
};

const blogs = [
  {
    title: "Why a Venture Lab in Chennai is the Perfect Breeding Ground for Micro SaaS",
    description: "Deep dive into the local ecosystem, degree filter kaapi culture, and technical talent fueling the next wave of shipping.",
    link: "/blog/venture-lab-in-chennai",
    date: "April 18, 2026",
    tag: "Ecosystem"
  },
  {
    title: "The Unfounded Manifesto: Building for the Coastal Shipping Era",
    description: "Explaining our 'Experiment First' philosophy and why we stopped planning and started building.",
    link: "/blog/unfounded-manifesto",
    date: "April 15, 2026",
    tag: "Philosophy"
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <StaggeredMenu
          isFixed={true}
          position="right"
          items={[
              { label: 'Home', ariaLabel: 'Home', link: '/' },
              { label: 'Ziggers', ariaLabel: 'Ziggers', link: 'https://www.ziggers.in/' },
              { label: 'LoopVerse', ariaLabel: 'LoopVerse', link: '#' },
              { label: 'Zachies', ariaLabel: 'Zachies', link: '/zachies' },
              { label: 'DrinkQ', ariaLabel: 'DrinkQ', link: '/drinkq' }
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
          colors={['#10B981', '#059669']}
          accentColor="#10B981"
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Lab Notes.
          </h1>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl">
            Raw insights from the heart of our venture lab. We build in public, we ship daily, and we document the experiments.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <Link 
              key={i} 
              href={blog.link}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2rem] hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6 border border-zinc-700">
                  {blog.tag}
                </span>
                <h2 className="text-3xl font-bold mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-zinc-400 font-medium mb-8">
                  {blog.description}
                </p>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
                  {blog.date}
                </span>
                <span className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors group-hover:scale-110 duration-300">
                  <ArrowRight className="w-6 h-6 text-white" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative z-10 pt-16">
          <FooterTapedDesign />
      </div>
    </div>
  );
}
