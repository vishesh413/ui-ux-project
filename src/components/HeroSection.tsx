"use client";

import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of mobile development
        </h1>
        <p className="mt-6 text-center text-neutral-300 text-base md:text-lg lg:text-xl font-normal max-w-2xl mx-auto leading-7 tracking-wide">
          Kickstart your mobile development journey with expert-led courses—
          whether you re a beginner or upskilling, unlock your full potential.
        </p>

        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-black text-white border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
