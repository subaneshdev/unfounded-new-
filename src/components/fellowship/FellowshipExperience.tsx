import Footer from "@/components/landing/Footer";
import FellowshipHero from "@/components/fellowship/FellowshipHero";
import FellowshipManifesto from "@/components/fellowship/FellowshipManifesto";

export default function FellowshipExperience() {
  return (
    <div className="min-h-screen bg-white text-black">
      <FellowshipHero />
      <FellowshipManifesto />
      <Footer />
    </div>
  );
}
