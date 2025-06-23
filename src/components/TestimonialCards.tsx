"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const mobileDevTestimonials = [
  {
    quote:
      "React Native has opened global opportunities for me. I started freelancing and built apps for startups across continents!",
    name: "Aryan Mehta",
    title: "React Native Developer",
  },
  {
    quote:
      "After learning Flutter here, I landed a job in a top-tier company. The mentorship and projects built my confidence.",
    name: "Simran Kaur",
    title: "Flutter Engineer",
  },
  {
    quote:
      "I created and deployed my first app using Firebase and Kotlin—all within 8 weeks. That felt like magic!",
    name: "Raj Verma",
    title: "App Creator",
  },
  {
    quote:
      "The hands-on projects taught me how to structure real-world mobile apps. Now I run my own app-based business.",
    name: "Nikita Roy",
    title: "Startup Founder",
  },
  {
    quote:
      "Swift was intimidating at first, but now I’ve published two iOS apps on the App Store. The step-by-step guidance was key!",
    name: "Anmol Singh",
    title: "iOS Developer",
  },
];

function MobileDevTestimonialCards() {
  return (
    <div
      className={cn(
        "absolute inset-0",
        // "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        "h-[40rem] w-full bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden"
      )}
    >
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">
        The Road from Learning to Launching 🚀
      </h2>

      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={mobileDevTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileDevTestimonialCards;
