import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Solutions } from "@/components/solutions";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <Solutions />
        <Stats />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
