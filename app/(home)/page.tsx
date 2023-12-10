import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

const logos = [
  {
    src: "/assets/typescript.svg",
    alt: "typescript"
  },
  {
    src: "/assets/nextjs.svg",
    alt: "nextjs"
  },
  {
    src: "/assets/html.svg",
    alt: "html"
  },
  {
    src: "/assets/css.svg",
    alt: "css"
  },
  {
    src: "/assets/reactjs.svg",
    alt: "reactjs"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-7 items-center px-64">
      <Image 
        src="/assets/profile.jpg"
        alt="profile"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className={cn("text-4xl font-extrabold text-center", font.className)}>
        It's not just<br /><span className="primary-gradient bg-clip-text text-transparent">coding!</span>
      </h1>
      <p className="text-sm text-center text-secondary-text">
        I am a full stack software engineer student, I create websites and  mobile apps by myself at my free time
      </p>
      <Button className="rounded-full font-bold bg-white">
        Get In Touch
      </Button>
      <div className="flex flex-col gap-3 justify-between items-center">
        <p className="text-sm font-semibold tracking-wider text-secondary-text">
          EXPERIENCE WITH
        </p>
        <div className="flex justify-between gap-7">
          {logos.map(logo => (
            <Image 
              src={logo.src}
              alt={logo.alt}
              width={25}
              height={25}
              key={logo.src}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
