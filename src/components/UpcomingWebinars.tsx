'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"

const featuredWebinars = [
  {
    title: 'Intro to Mobile App Development',
    description: 'Understand the basics of mobile development and how modern apps are built.',
    slug: 'intro-to-mobile-app-development',
    isFeatured: true,
  },
  {
    title: 'Building Apps with React Native',
    description: 'Learn how to create cross-platform apps using the popular React Native framework.',
    slug: 'react-native-app-development',
    isFeatured: true,
  },
  {
    title: 'State Management in Flutter & React Native',
    description: 'Explore essential techniques like Redux, Provider, and Bloc for scalable app state handling.',
    slug: 'state-management-in-mobile-apps',
    isFeatured: true,
  },
  {
    title: 'Firebase Integration for Mobile Apps',
    description: 'Add real-time databases, auth, and cloud functions with Firebase in your apps.',
    slug: 'firebase-integration-mobile',
    isFeatured: true,
  },
  {
    title: 'Deploying Mobile Apps to Stores',
    description: 'Step-by-step guide on publishing your apps to Google Play Store and Apple App Store.',
    slug: 'mobile-app-deployment',
    isFeatured: true,
  },
  {
    title: 'Optimizing Performance in Mobile Apps',
    description: 'Learn how to debug, test, and optimize your apps for speed and efficiency.',
    slug: 'mobile-app-performance-optimization',
    isFeatured: true,
  },
];

const TailwindConnectButton = () => (
  <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-[2px] text-sm font-semibold leading-6 text-white inline-block">
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
    </span>
    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-5 ring-1 ring-white/10 text-base">
      <span>View All Webinars</span>
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

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Launch Your Mobile Dev Career Today
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}>
            <TailwindConnectButton />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
