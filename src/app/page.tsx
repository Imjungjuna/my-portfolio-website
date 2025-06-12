import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import About from "@/components/about";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
