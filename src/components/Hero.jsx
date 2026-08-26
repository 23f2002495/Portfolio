"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const cards = [
  {
    title: "NIT Durgapur",
    subtitle: "Civil Engineering",
    icon: "🎓",
  },
  {
    title: "IIT Madras",
    subtitle: "B.S. Data Science & AI",
    icon: "📚",
  },
  {
    title: "MLOPs Engineer",
    subtitle: "LLMs • NLP • Deep Learning",
    icon: "🤖",
  },
  {
    title: "Web Developer",
    subtitle: "React • Next.js • Node • Flask",
    icon: "💻",
  },
  {
    title: "Actor",
    subtitle: "Stage & Performing Arts",
    icon: "🎭",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 px-6 lg:px-20 py-16"
    >
      <div className="max-w-7xl w-full">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}


          <motion.div 
            className="flex justify-center"

            whileHover={{
            scale: 1.05,
            y: -8,
            }}
            initial={{
                scale: 0.8,
                opacity: 0,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
                delay: 0.1,
            }}
            >
            <div className="relative 
                w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-3xl opacity-40"></div>

            {/* Gradient Ring */}
                <div className="relative p-1 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">

                    <div className="relative aspect-square rounded-full overflow-hidden bg-black">

                    <Image
                        src="/profile.png"
                        alt="Rwiddhi Mitra"
                        fill
                        priority
                        className="object-cover"
                    />

                    </div>

                </div>

            </div>
        </motion.div>


        {/* Right */}    
          <div>

            <TypeAnimation
                sequence={[
                    "Hello 👋 I'm",
                    1000,
                ]}
                speed={60}
                cursor={false}
                repeat={1}
                className="text-lg text-gray-200 mb-4 block"
            />

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Rwiddhi
                <br />
                Mitra
            </h1>
            

            <TypeAnimation
                sequence={[
                    "AI Engineer",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "Machine Learning Enthusiast",
                    1500,
                    "Actor",
                    1500,
                ]}
                wrapper="span"
                speed={70}
                repeat={Infinity}
                className="text-2xl font-semibold text-purple-200"
            />

            <p className="mt-8 text-lg text-gray-200 max-w-xl leading-8">
              Passionate about Artificial Intelligence, Machine Learning,
              scalable web applications and solving challenging engineering
              problems. Always curious, always building.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/Resume (2).pdf"
                className="px-7 py-3 rounded-xl bg-white text-purple-700 font-semibold hover:scale-105 transition cursor-pointer"
              >
                Resume
              </a>

              <a
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-7 py-3 rounded-xl border border-white hover:bg-white/10 transition hover:scale-105 cursor-pointer"
              >
                Contact Me
              </a>

            </div>

          </div>

        
        


        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-20">

          {cards.map((card) => (

            <div
              key={card.title}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg"
            >

              <div className="text-4xl mb-4">
                {card.icon}
              </div>

              <h3 className="font-bold text-lg">
                {card.title}
              </h3>

              <p className="text-gray-200 mt-2 text-sm">
                {card.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Hero;