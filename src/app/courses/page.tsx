"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/mobile_courses.json";
import { motion, Variants } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background"; // ✅ Correct named import

const fadeUpStagger: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 pt-36 px-6
      before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:ring-1 
      before:ring-gray-400/20 before:shadow-[0_0_60px_20px_rgba(200,200,200,0.08)] before:pointer-events-none overflow-hidden">

      {/* ⭐ Background Stars Animation */}
      <StarsBackground className="absolute inset-0 z-0" />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-lg md:text-7xl text-center font-sans font-bold mb-20 text-white tracking-tight relative z-10"
      >
        All Courses ({courseData.courses.length})
      </motion.h1>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        {courseData.courses.map((course, index) => (
          <motion.div
            key={course.id}
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-black/60 border border-white/30 relative group/card hover:shadow-2xl hover:shadow-teal-500/30 w-[22rem] sm:w-[30rem] rounded-2xl p-6 transition-all duration-500 hover:scale-[1.03] flex flex-col justify-between h-full">

                {/* Content */}
                <div>
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {course.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm leading-relaxed mb-4"
                  >
                    {course.description}
                  </CardItem>

                  {/* ✅ Fixed Image (prevents cropping) */}
                  <CardItem translateZ="100" className="w-full mb-6">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
                      <img
                        src={course.image}
                        alt="bg"
                        className="absolute top-0 left-0 w-full h-full object-cover blur-xl scale-110 opacity-40 pointer-events-none"
                        draggable={false}
                      />
                      <img
                        src={course.image}
                        alt="main"
                        className={`relative z-10 w-full h-full ${course.image.includes("93659907") ? "object-contain" : "object-cover"}`}
                        draggable={false}
                      />
                    </div>
                  </CardItem>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    target="_blank"
                    className="text-sm font-semibold text-white hover:underline transition duration-300"
                  >
                    Try now →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
                  >
                    Sign up
                  </CardItem>
                </div>

              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Page;
