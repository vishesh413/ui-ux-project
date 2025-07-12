"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutPage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Crafting Mobile-first UI Experiences";
  const router = useRouter();

  // Tilt state for Mission image
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const floatTransition: Transition = {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "mirror",
  };

  const emojiVariants: Variants = {
    float: {
      y: [0, -20, 0],
      transition: floatTransition,
    },
  };

  // Mouse move handler for tilt effect with proper TS typing
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to div
    const y = e.clientY - rect.top; // Mouse Y relative to div
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate rotation max 15 deg
    const rotateX = ((y - centerY) / centerY) * 15 * -1; // invert rotateX
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt({ rotateX, rotateY });
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  // Array of emojis for floating effect
  const emojis = ["🎨", "🛠️", "📱", "⚙️", "🚀"];

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-black via-[#0a111f] to-black text-white font-sans">
      {/* Starry Background */}
      <div className="fixed inset-0 -z-20">
        <StarsBackground />
      </div>

      {/* Background Gradient Blur Layer */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-gradient-x opacity-70" />

      {/* Floating Emojis */}
      {emojis.map((emoji, idx) => (
        <motion.div
          key={idx}
          variants={emojiVariants}
          animate="float"
          style={{
            position: "absolute",
            top: `${15 + idx * 14}%`,
            left: `${8 + idx * 15}%`,
            fontSize: "2.5rem",
            opacity: 0.15,
            userSelect: "none",
            pointerEvents: "none",
            textShadow: "0 0 15px #22d3ee66",
            zIndex: -5,
          }}
          transition={{ delay: idx * 0.4 }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_100px_#00ffff60]">
            {typedText}
            <motion.span
              className="text-cyan-300 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              |
            </motion.span>
          </h1>

          <div className="relative mt-7 flex justify-center">
            <div className="absolute -top-12 h-52 w-[24rem] rounded-full bg-white/10 blur-[160px] opacity-80 z-0" />
            <div className="h-[4px] w-80 bg-white rounded-full shadow-[0_0_50px_white] relative z-10" />
          </div>

          <p className="text-gray-300 mt-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide">
            Learn to design and develop mobile-first experiences that feel fast, fluid, and intuitive.
          </p>
          <p className="text-gray-400 mt-5 text-base max-w-2xl mx-auto">
            Whether you&apos;re a beginner or builder, our hands-on courses help you master Android, iOS, and cross-platform UI — with tools that scale and experiences that shine.
          </p>

          <div className="mt-14">
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 0 25px #22d3ee" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 rounded-full border border-cyan-500 text-cyan-300 font-bold tracking-wide shadow-[0_0_20px_#22d3ee40] transition-all duration-300 hover:shadow-[0_0_15px_#22d3ee40] hover:brightness-110 hover:-translate-y-0.5 bg-transparent cursor-pointer"
              onClick={() => router.push("/")}
            >
              Explore Our Journey
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Mission Section with 3D Tilt Image */}
      <section className="py-28 px-6 bg-[#0a0e14]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-white/5 backdrop-blur-md w-[400px] h-[300px] mx-auto transition-transform duration-300 ease-out cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "800px",
              transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1)`,
              willChange: "transform",
            }}
          >
            <Image
              src="/images/mission.jpg"
              alt="Mission"
              className="w-full h-full object-cover transition duration-300 ease-in-out"
              style={{
                transform: `scale(${tilt.rotateX !== 0 || tilt.rotateY !== 0 ? 1.05 : 1})`,
                transition: "transform 0.3s ease",
              }}
              width={400}
              height={300}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-blue-500/10 to-transparent pointer-events-none" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed tracking-wide">
              We&rsquo;re on a mission to simplify mobile development for everyone — from curious beginners to advanced creators — through hands-on learning, intuitive design, and a relentless focus on real impact.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-6 tracking-wide">
              Our goal is to help you not only <strong>learn to code apps</strong> — but to build experiences that feel polished, fast, and built for today&rsquo;s users. Mobile-first isn&rsquo;t just a strategy; it&rsquo;s our standard.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-28 px-6 bg-black text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-20 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent"
        >
          Our Builder Journey
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-2">
          {["📱", "🧑‍💻", "🚀"].map((emoji, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md overflow-hidden transition-all duration-300 group"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

              <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-full bg-black/40 flex items-center justify-center border border-white/10 backdrop-blur-lg">
                <span className="text-3xl">{emoji}</span>
              </div>

              <h3 className="text-xl font-semibold text-cyan-300 mb-3 relative z-10">
                {i === 0
                  ? "Built for Mobile"
                  : i === 1
                  ? "Real-World Projects"
                  : "Career-Driven Skills"}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {i === 0
                  ? "Our entire learning experience is optimized for mobile-first interaction — learn anytime, anywhere with ease and clarity."
                  : i === 1
                  ? "We teach by doing. Every course includes practical mobile app projects that mimic real development environments."
                  : "From Flutter to React Native, we cover in-demand mobile technologies that help you land jobs and build products fast."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-28 px-6 bg-[#06090f] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-extrabold mb-20 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            🚀 Key Milestones in Our Journey
          </motion.h2>

          <div className="relative flex flex-col md:flex-row items-start md:items-stretch justify-between gap-10">
            {["2020", "2021", "2022", "2023", "2024"].map((year, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/5 border border-white/10 rounded-2xl px-6 py-8 shadow-[0_0_30px_#22d3ee20] w-full md:w-1/5 flex flex-col items-center text-center"
              >
                <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-full border-2 border-cyan-400 shadow-[0_0_20px_#22d3ee99] text-2xl bg-[#0f172a]">
                  {i === 0
                    ? "💡"
                    : i === 1
                    ? "📱"
                    : i === 2
                    ? "🌱"
                    : i === 3
                    ? "🌐"
                    : "🤖"}
                </div>
                <p className="text-cyan-400 text-sm font-medium mb-1">{year}</p>
                <h3 className="text-lg font-semibold mb-2">
                  {i === 0
                    ? "Vision Ignited"
                    : i === 1
                    ? "App-Centric Learning"
                    : i === 2
                    ? "Learning by Building"
                    : i === 3
                    ? "Global Builder Network"
                    : "AI + Mobile Dev"}
                </h3>
                <p className="text-gray-400 text-sm">
                  {i === 0
                    ? "Started with a mission to make mobile development simple, practical, and accessible for everyone."
                    : i === 1
                    ? "Released our first hands-on mobile dev course focused on Flutter and React Native — learners built real apps from day one."
                    : i === 2
                    ? "Project-based curriculum launched with live previews, debugging support, and real-time collaboration features."
                    : i === 3
                    ? "Expanded to 50+ countries, launched mobile-first UI bootcamps, and partnered with dev mentors worldwide."
                    : "Integrated AI coding support, custom mobile UI generators, and smart feedback systems for faster learning."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animate Gradient Keyframes */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </main>
  );
}
