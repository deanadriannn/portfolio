import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="flex flex-col tablet:gap-7">
      <Hero />
      <Projects />
      <Experience />
    </div>
  )
};
