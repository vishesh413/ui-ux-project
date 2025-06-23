'use client'

import Link from "next/link";
import courseData from "../data/mobile_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  price: number;
  format: string;
  language: string;
  isFeatured: boolean;
  description: string;
  slug: string;
  image: string;
}

const TailwindConnectButton = () => (
  <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-[2px] text-sm font-semibold leading-6 text-white inline-block">
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
    </span>
    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-5 ring-1 ring-white/10">
      <span className="text-base">View All Courses</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.75 8.75L14.25 12L10.75 15.25"
        />
      </svg>
    </div>
    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
  </button>
);

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white bg-zinc-900 overflow-hidden h-full max-w-sm">
                <img
                  src={course.image}
                  alt={course.title}
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-400">{course.description}</p>
                  <Link href={"/"} className="mt-2 text-teal-500 hover:underline">
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <TailwindConnectButton />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
