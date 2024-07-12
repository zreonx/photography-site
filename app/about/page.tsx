import { Icon } from "lucide-react";
import React from "react";
import {
  RiRidingFill,
  RiUserHeartFill,
  RiStarHalfSLine,
  RiVidiconFill,
  RiVipCrown2Fill,
  RiSendPlaneFill,
} from "react-icons/ri";

import HeroImg from "@/components/HeroImg";

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mrs Smith",
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+98 99 892 7781",
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "photography@gmail.com",
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "Born on 23, March, 2002",
  },
  {
    icon: <RiStarHalfSLine size={20} />,
    text: "Master Degree",
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "22, Ella Statu, Texas Us",
  },
];

const About = () => {
  return (
    <section className='pb-18 xl:pb-24 min-h-screen'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* Image */}
          <div className='relative flex-1 xl:flex justify-start items-center'>
            <HeroImg
              containerStyles='w-[420px] h-[420px] bg-no-repeat relative'
              imgScr='/about/profile.png'
            />
          </div>
          <div className='flex-1'>
            {/* Content */}
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='text-center xl:text-left'>
                <h3 className='h3 mb-4 '>
                  Let's plan your perfect photoshoot.
                </h3>
                <p className='subtitle max-x-xl mx-auto xl:mx-0'>
                  Our mission is to further develop the overall excellence of
                  photography and to capture memories that will be cherished for
                  a lifetime, in the timeless photographs.
                </p>
                <p className='subtitle max-x-xl mx-auto xl:mx-0'>
                  Professional photography services combine the classic
                  knowledge of traditional photographic portraiture and
                  contemporary sytle.
                </p>
                {/* Icons */}
                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                  {infoData.map((item, index) => (
                    <div
                      className='flex items-center gap-x-4 mx-auto xl:mx-0 '
                      key={index}
                    >
                      <div className='text-primary'>{item.icon}</div>
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
