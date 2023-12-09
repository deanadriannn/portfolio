import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

export default function Home() {
  return (
    <div className="flex flex-col gap-7 items-center px-64">
      <Image 
        src="/assets/profile.jpg"
        alt="profile"
        width={220}
        height={220}
        className="rounded-full"
      />
      <h1 className={cn("text-5xl font-extrabold text-center", font.className)}>
        It's not just<br /><span className="primary-gradient bg-clip-text text-transparent">coding!</span>
      </h1>
      <p className="text-sm text-center">
        I am a full stack software engineer student, I create websites and  mobile apps by myself at my free time
      </p>
      <Button className="rounded-full font-bold">
        Get In Touch
      </Button>
    </div>
  )
}
