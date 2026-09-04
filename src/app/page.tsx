import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <About />
      <Contact />
    </>
  );
}
