"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    image: string;
  }[];
  contentClassName?: string | any;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(
      linearGradients[activeCard % linearGradients.length]
    );
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center overflow-y-auto rounded-md p-15"
      ref={ref}
    >
      {/* Left Side: Text Section */}
      <div className="relative flex items-start pr-32 pl-20">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-19">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="relative text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Side: Sticky Image Section */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-14 hidden h-72 w-96 overflow-hidden rounded-md ml-32 lg:block",
          contentClassName
        )}
      >
        <Image
          src={content[activeCard].image}
          alt={content[activeCard].title}
          width={384}
          height={288}
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};
