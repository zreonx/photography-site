import React from "react";
import { Smile, Scan, Bird } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Smile size={48} strokeWidth={1} />,
    title: "Portraiture",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete account of the system.",
  },
  {
    icon: <Scan size={48} strokeWidth={1} />,
    title: "Landscapes",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete account of the system.",
  },
  {
    icon: <Bird size={48} strokeWidth={1} />,
    title: "Lifestyle",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete account of the system.",
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-6 xl:mb-24 text-center mx-auto'>
          Our Services
        </h2>
        {/* Category Items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gapy-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => (
            <React.Fragment key={index}>
              <Card className='relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700'>
                <CardHeader className='text-primary'>
                  <div className='w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
