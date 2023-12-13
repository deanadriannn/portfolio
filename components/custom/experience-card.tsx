import Image from "next/image";

interface ExperienceCardProps {
  icon: string;
  title: string;
  timePeriod: string;
  desciption: string;
}

const ExperienceCard = ({icon, title, timePeriod, desciption}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col mobile:gap-1 laptop:gap-2">
      <div className="flex justify-between">
        <div className="flex justify-start gap-2 items-center">
          <Image 
            src={icon}
            alt={title}
            width={15}
            height={15}
          />
          <h1 className="font-semibold mobile:text-[0.5rem] laptop:text-[0.7rem] desktop:text-[0.8rem]">{title}</h1>
        </div>
        <p className="text-secondary-text font-light mobile:text-[0.5rem] laptop:text-[0.7rem] desktop:text-[0.8rem]">{timePeriod}</p>
      </div>
      <p className="text-secondary-text font-light mobile:text-[0.5rem] laptop:text-[0.7rem] desktop:text-[0.8rem]">{desciption}</p>
    </div>
  )
};

export default ExperienceCard;