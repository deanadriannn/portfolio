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
    <nav 
      className="bg-[#1E1E1D] justify-between items-center w-full mobile:hidden tablet:flex tablet:px-20 
        laptop:px-36 tablet:mb-5 desktop:px-56 laptop:mb-7
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
          <p 
            key={route.title} 
            className="hover:primary-gradient hover:bg-clip-text hover:text-transparent transition-colors 
              cursor-pointer tablet:text-xs tablet:font-extralight laptop:text-sm laptop:font-normal
            "
          >
            {route.title}
          </p>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;