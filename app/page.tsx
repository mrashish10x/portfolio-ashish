import { Sidebar } from "@/components/Sidebar";
import { MobileTopbar } from "@/components/MobileTopbar";
import { Tabbar } from "@/components/Tabbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <MobileTopbar />

        <main>
          <Tabbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </main>
      </div>

      <BackToTop />
    </div>
  );
}
