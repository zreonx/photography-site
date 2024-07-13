"use client";
import { features } from "@/lib/data";
import { Fade } from "react-awesome-reveal";

const Features = () => {
  return (
    <section className='pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <Fade
          direction='up'
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className='section-title mb-2 xl:mb-3 text-center mx-auto'>
            Key Features
          </h2>
        </Fade>
        <div className='flex flex-col '>
          <div className='mx-auto max-w-7xl text-center'>
            <Fade
              direction='up'
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className='mt-2 text-3xl font-bold tracking-tight text-black dark:text-gray-50 sm:text-4xl'>
                Everything you need to deliver faster.
              </p>
            </Fade>
            <Fade
              direction='up'
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className='mt-6 text-lg leading-8 text-black dark:text-white/90'>
                It's a wide array of extremely useful & user-friendly elements
                and features turned website creation into cakewalk. Get started
                not & see just how easy it is to make website you always wanted.
              </p>
            </Fade>
          </div>
        </div>
        {/* features lists */}

        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 '>
            <Fade
              direction='up'
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {features.map((feature, index) => (
                <div
                  className='relative hover:scale-105 transition-all'
                  key={index}
                >
                  <dt className='text-base font-semibold leading-7 text-muted-foreground justify-center'>
                    <div className='flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center'>
                      <feature.icon
                        className='h-[36px] w-[36px] text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='text-gray-950 dark:text-gray-50'>
                      {feature.name}
                    </div>
                  </dt>
                  <dd className='mt-2 text-base leading-7'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </Fade>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
