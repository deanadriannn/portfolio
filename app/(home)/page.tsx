import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
    </div>
  )
};
