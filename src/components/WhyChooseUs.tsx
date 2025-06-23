"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const mobileDevContent = [
  {
    title: "Welcome to Mobile Dev School",
    description:
      "Our school is dedicated to nurturing the next generation of mobile developers. Whether you're interested in Android, iOS, or cross-platform development — we offer world-class training and mentorship with hands-on projects and real-world tech stacks.",
    image: "/images/reactive native.jpg"
  },
  {
    title: "Why Learn Mobile Development?",
    description:
      "Mobile apps dominate the digital world. From social networks to smart home controls — skilled mobile developers are in high demand. Learn technologies like React Native, Flutter, Kotlin, Swift, and Firebase to become industry-ready.",
    image: "/images/ma.jpg"
  },
  {
    title: "Our Expert-Led Curriculum",
    description:
      "Each course is crafted by developers and designers working at top tech companies. You'll learn mobile UI/UX, animations, APIs, Firebase, and even how to publish apps to the Play Store and App Store — all in a project-based format.",
    image: "/images/ui-ux-inmyapp.jpg"
  },
  {
    title: "Technologies You’ll Master",
    description:
      "From building smooth UIs with Flutter to deploying with Firebase, from creating iOS apps in SwiftUI to managing Android projects in Kotlin — our programs ensure you stay on top of current trends.",
    image: "/images/ff.jpg"
  },
  {
    title: "Launch Your Career",
    description:
      "After completing our courses, students have landed jobs, launched their own apps, and joined tech startups. With portfolio projects, certificates, and interview prep — you’re ready for the real world.",
    image: "/images/playstore.jpg"
  }
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={mobileDevContent} />
    </div>
  );
}

export default WhyChooseUs;
