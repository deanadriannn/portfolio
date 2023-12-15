import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ['latin']
});

const routes = [
  {
    title: "Home",
    route: "#home"
  },
  {
    title: "Projects",
    route: "#projects"
  },
  {
    title: "Experience",
    route: "#experience"
  },
  {
    title: "Contact",
    route: "#contact"
  },
];

const Navbar = () => {
  return (
    <nav 
      className="bg-[#1E1E1D] justify-between items-center w-full fixed top-0 left-0 right-0 z-50 mobile:hidden 
        tablet:flex tablet:px-20 laptop:px-36 desktop:px-56
      "
    >
      <div className="relative tablet:w-12 h-12 laptop:w-16 laptop:h-16">
        <Image 
          src="/assets/hero/logo.svg"
          alt="logo"
          fill
        />
      </div>
      <div className={cn("flex justify-between items-center tablet:gap-5 laptop:gap-7", plusJakartaSans.className)}>
        {routes.map(route => (
          <div key={route.title} className="relative group">
            <Link 
              href={route.route}
              className="cursor-pointer tablet:text-xs tablet:font-extralight laptop:text-sm laptop:font-normal"
            >
              {route.title}
            </Link>
            <div className="h-0.5 absolute w-0 bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-[80%] primary-gradient transition-all duration-1000">
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;