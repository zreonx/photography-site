"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Jenifer",
    job: "Chief",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Lopez Chriz",
    job: "CEO",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Hamilton",
    job: "CEO",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Lucy",
    job: "App Developer",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Stoic John",
    job: "CEO",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>
          They say about our work
        </h2>
        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className='  h-[420px] md:h-[600px] lg:h-[400px]'
        >
          {reviewsData.map((person, index) => (
            <React.Fragment key={index}>
              <SwiperSlide>
                <Card className='p-8 min-h-[300px] hover:bg-tertiary transition-all cursor-pointer'>
                  <CardHeader className='p-0 mb-3'>
                    <div className='flex flex-col items-start  gap-x-4'>
                      {/* Avatar */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                        className='mb-2'
                      />
                      {/* Name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
