'use client';
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import Link from "next/link";

import { StarsBackground } from "@/components/ui/stars-background";

export default function AboutPage() {
  const testimonials = [
    {
      text: "This platform made mobile dev feel approachable. I built my first SaaS app and got 1000+ users.",
      name: "Kunal, Indie Developer",
      color: "text-teal-300"
    },
    {
      text: "Their roadmap and feedback loops helped me crack an internship at a top unicorn.",
      name: "Isha, Student Developer",
      color: "text-yellow-300"
    },
    {
      text: "MDA turned my passion into a profession. Now I freelance full-time.",
      name: "Ritika, Freelancer",
      color: "text-pink-300"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative min-h-screen pt-32 px-4 sm:px-6 md:px-8 pb-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      {/* Animated background layers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-purple-800 to-black blur-2xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-br from-purple-800/20 via-indigo-900/20 to-sky-800/20 blur-3xl"
      />

      <div className="max-w-6xl mx-auto text-center space-y-16 ">
        {/* Heading */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className="w-full flex flex-col items-center justify-center relative"
        >
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 animate-text-glow z-10">
            About Our Academy
          </h1>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: false }}
            className="relative mt-4 w-[40rem] h-12 "
          >
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={1500}
              className="w-full h-full"
              particleColor="#ffffff"
            />
            <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(300px_100px_at_top,transparent_20%,white)]" />
          </motion.div>
        </motion.div>

        {/* Our Mission */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="bg-gradient-to-br from-[#5b21b6]/30 via-[#1e293b]/20 to-[#0f172a]/20 rounded-2xl p-10 shadow-xl ring-1 ring-white/10 space-y-6 backdrop-blur-md"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-transparent bg-clip-text text-center bg-gradient-to-r from-indigo-400 to-purple-500"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are dedicated to empowering passionate creators and aspiring developers to build impactful, real-world applications through hands-on mentorship, immersive project-based learning, and a continuous cycle of constructive feedback that fuels both confidence and capability.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-gray-400 max-w-3xl mx-auto"
          >
            From fundamentals to deployment, our mission is to ensure every student ships meaningful projects, not just code samples.
          </motion.p>
        </motion.section>

        {/* Learn Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: false }}
          className="bg-gradient-to-br from-fuchsia-800/30 to-purple-800/20 rounded-2xl p-10 shadow-md ring-1 ring-white/10 space-y-6"
        >
          <h2 className="text-3xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-fuchsia-300 to-purple-400">
            Learn with Community, Build with Confidence
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-md text-left space-y-4"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                At <span className="text-purple-400 font-semibold">MDA</span>, we empower learners to go beyond passive tutorials and actually build, share, and grow in a vibrant, feedback-rich ecosystem.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With every course you complete, you unlock skills that aren't just theory—they're deployable, shareable, and portfolio-ready.
              </p>
              <p className="text-md text-gray-500 leading-relaxed">
                Progress with purpose, collaborate with clarity, and ship apps you're proud of.
              </p>
            </motion.div>
            <motion.img
              src="/images/about-us.jpg"
              alt="Team Learning"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false }}
              className="max-w-xs md:max-w-sm rounded-2xl shadow-xl ring-1 ring-white/10 transition duration-300"
            />
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="pt-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-16">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.figure
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                className="relative border border-white/10 rounded-2xl bg-white/10 backdrop-blur-md p-8
                          shadow-lg shadow-cyan-400/10
                          transition-all duration-500 ease-in-out
                          hover:shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-400"
              >
                <figcaption className="text-lg text-gray-300">
                  “{item.text}”
                  <span className={`block mt-4 font-semibold ${item.color}`}>
                    — {item.name}
                  </span>
                </figcaption>
                <div className="absolute -top-6 left-4 text-8xl text-white/10">“</div>
              </motion.figure>
            ))}
          </div>
        </motion.section>

       
<motion.section
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.1, ease: "easeInOut" }}
  viewport={{ once: false }}
  className="relative bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-sky-900/20 p-10 rounded-2xl shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mt-24"
>
  
<div className="absolute text-3xl animate-bounce top-3 right-8">🔥</div>
  <div className="absolute text-5xl animate-bounce bottom-6 left-10">🎯</div>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-500 text-center"
  >
    Unlock Your Dev Journey Today
  </motion.h2>

  <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto text-center">
    Whether you're starting out or scaling up, MDA is your launchpad to success.
  </p>

  <div className="mt-8 flex justify-center">
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      
    </motion.div>
  </div>
</motion.section>


      <StarsBackground />
      </div>
    </motion.div>
  );
}
