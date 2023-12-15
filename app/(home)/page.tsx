import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="flex flex-col tablet:gap-10 laptop:gap-16">
      <Hero />
      <Projects />
      <Experience />
    </div>
  )
};
