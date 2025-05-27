import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Portfolio />
      <Contact />
    </main>
  );
}
