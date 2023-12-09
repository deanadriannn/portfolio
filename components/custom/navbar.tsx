import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1D] flex justify-between w-full md:px-5 lg:px-36 xl:px-52 2xl:px-72 mb-10">
      <Image 
        src="/assets/logo.svg"
        alt="logo"
        height={80}
        width={80}
      />
      <div className={cn("flex justify-between items-center gap-16", plusJakartaSans.className)}>
        <p>Home</p>
        <p>Projects</p>
        <p>Experience</p>
        <p>Contact</p>
      </div>
    </nav>
  )
}

export default Navbar;