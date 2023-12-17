import { Mail } from "lucide-react";
import Image from "next/image";

import { contacts } from "@/constant";

const Contact = () => {
  return (
    <div 
      id="contact"
      className="bg-[#191919] justify-between items-start w-full flex flex-col mobile:px-3 mobile:py-5 mobile:gap-4 tablet:px-36 tablet:mt-5 tablet:py-7 laptop:px-64 laptop:mt-7 laptop:py-12 desktop:px-96
      "
    >
      <h1 className="font-bold mobile:text-[0.7rem] laptop:text-[0.9rem]">
        Contact
      </h1>
      <div className="flex flex-col mobile:gap-1.5">
        <p className="text-secondary-text font-light mobile:text-[0.6rem] laptop:text-[0.8rem]">
          Junior Full Stack Software Developer with 2 years of hands-on experience in web development within an academic setting. Specializing in designing and implementing reliable, scalable, and innovative web solutions. Proficient in both front-end and back-end technologies.
        </p>
        <p className="flex items-center text-secondary-text font-light mobile:gap-2 mobile:text-[0.6rem] laptop:text-[0.8rem]">
          <Mail className="mobile:h-3 mobile:w-3 laptop:h-4 laptop:w-4" /> cocontilz@gmail.com
        </p>
      </div>
      <div className="flex items-center gap-3">
        {contacts.map(contact => (
          <div 
            key={contact.icon} 
            className="relative mobile:w-3 mobile:h-3 laptop:w-4 laptop:h-4"
          >
            <Image 
              src={contact.icon}
              alt={contact.alt}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Contact;