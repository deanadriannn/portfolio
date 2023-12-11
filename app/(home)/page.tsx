import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="flex flex-col mobile:gap-12">
      <Hero />
      <Projects />
    </div>
  )
};
