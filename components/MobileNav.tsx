import { SheetContent, Sheet, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import Socials from "./Socials";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";

const MobileNav = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              setSheetOpen={setSheetOpen}
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-1xl'
              underlineStyles=''
            />
          </div>
          <Socials containerStyles='flex gap-x-4 ' iconStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
