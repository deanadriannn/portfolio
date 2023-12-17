import Contact from "@/components/custom/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto flex flex-col">
      <div className="h-screen snap-center">
        <Hero />
      </div>
      <div className="h-screen snap-center">
        <Projects />
      </div>
      <div className="h-screen snap-center">
        <Experience />
      </div>
    </div>
  )
};
