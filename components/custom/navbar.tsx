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
          src="/assets/logo.svg"
          alt="logo"
          fill
        />
      </div>
      <div className={cn("flex justify-between items-center tablet:gap-5 laptop:gap-7", plusJakartaSans.className)}>
        {routes.map(route => (
          <Link 
            href={route.route}
            key={route.title} 
            className="hover:primary-gradient hover:bg-clip-text hover:text-transparent transition-colors 
              cursor-pointer tablet:text-xs tablet:font-extralight laptop:text-sm laptop:font-normal
            "
          >
            {route.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;