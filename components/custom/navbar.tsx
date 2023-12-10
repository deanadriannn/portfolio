import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ['latin']
});

const routes = [
  {
    title: "Home"
  },
  {
    title: "Projects"
  },
  {
    title: "Experience"
  },
  {
    title: "Contact"
  },
];

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1D] flex justify-between w-full md:px-5 lg:px-36 xl:px-52 2xl:px-72 mb-10">
      <Image 
        src="/assets/logo.svg"
        alt="logo"
        height={60}
        width={60}
      />
      <div className={cn("flex justify-between items-center gap-12", plusJakartaSans.className)}>
        {routes.map(route => (
          <p key={route.title} className="text-sm">
            {route.title}
          </p>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;