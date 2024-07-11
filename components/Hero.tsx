import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

//React Icons
import {
  RiMenFill,
  RiBookmark3Fill,
  RiBodyScanFill,
  RiServiceFill,
} from "react-icons/ri";
import Socials from "./Socials";
import HeroImg from "./HeroImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className='py-6 h-[auto] bg-bottom'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* Left side content */}
          <div className='flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Photography
            </div>
            <h1 className='h1 '>Let's make magic!</h1>
            <p className='subtitle max-w-[590px] mt-4 mx-auto xl:mx-0'>
              We are fine art, nature & portrait film photographers from San
              Francisco, with a special love for natural light, medium format
              film cameras & redheads with freckles.
            </p>
            {/* subscribe button */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <div className='flex w-full gap-x-4 '>
                <label htmlFor='email-address' className='sr-only'>
                  Email Adress
                </label>
                <Input type='email' id='email' placeholder='Email' />
                <Link href='/contact'>
                  <Button className='gap-x-2 bg-black'>
                    Subscribe <RiMenFill size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            {/* Social Icons */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0 '
              iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>

          {/* banner image */}
          <div className='hidden xl:flex relative'>
            <HeroImg
              containerStyles='w-[550px] h-[475px] bg-no-repeat relative bg-bottom'
              imgScr='/about/photography.svg'
            />
          </div>
        </div>
      </div>
      {/* Badge */}
      <div className='py-24 sm:py-32 '>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 '>
            {/* Badge 1 */}
            <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-muted-foreground'>
                Years of Experience
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                <Badge
                  icon={<RiBookmark3Fill />}
                  endCountNum={12}
                  endCountText='+'
                  badgeText=''
                  containerStyles=''
                />
              </dd>
            </div>
            {/* Badge 2 */}
            <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-muted-foreground'>
                Followers
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                <Badge
                  icon={<RiBodyScanFill />}
                  endCountNum={874}
                  endCountText='k'
                  badgeText=''
                  containerStyles=''
                />
              </dd>
            </div>
            {/* Badge 3 */}
            <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-muted-foreground'>
                Projects
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                <Badge
                  icon={<RiServiceFill />}
                  endCountNum={79}
                  endCountText='+'
                  badgeText=''
                  containerStyles=''
                />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
