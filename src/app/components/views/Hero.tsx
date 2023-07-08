import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import heroimg from "/public/heroimg.webp"

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6 ">
      {/* left div  */}
      <div className="flex-1">
        <Badge className="px-6 py-3 rounded-lg bg-blue-100 text-blue-700 text-lg ">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="h-12 ">
          <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
        </Button>
      </div>
      {/* right div  */}
      <div  className="flex-1">
        <Image src={heroimg} alt="heroimg"/>
      </div>
    </section>
  );
};

export default Hero;
