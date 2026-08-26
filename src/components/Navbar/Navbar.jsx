"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { useLenis } from "@/context/LenisContext";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const lenis = useLenis();

  const [visible, setVisible] = useState(true);
  const [isHero, setIsHero] = useState(true);

  const lastScrollY = useRef(0);

  const handleScroll = (id) => {
    lenis.current?.scrollTo(`#${id}`, {
      duration: 1.5,
      offset: -90,
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      // Transparent while Hero is visible
      setIsHero(current < window.innerHeight * 0.65);

      // Always show near the top
      if (current < 50) {
        setVisible(true);
        lastScrollY.current = current;
        return;
      }

      // Hide while scrolling down
      if (current > lastScrollY.current + 2) {
        setVisible(false);
      }

      // Show while scrolling up
      if (current < lastScrollY.current - 2) {
        setVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -140,
        opacity: visible ? 1 : 0.95,
        scale: visible ? 1 : 0.97,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="
        w-full
        max-w-5xl
        mx-auto
        px-6
        py-4
      "
    >
      {/* Desktop */}

      <div className="hidden lg:flex justify-center">
        <div
          className={`
            flex
            items-center
            gap-10

            px-8
            py-4

            rounded-full

            transition-all
            duration-500

            ${
              isHero
                ? "bg-transparent"
                : "bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            }
          `}
        >
          <Logo />

          <div className="w-px h-6 bg-white/20" />

          <NavLinks handleScroll={handleScroll} />

          <div className="w-px h-6 bg-white/20" />

        </div>
      </div>

      {/* Mobile */}

      <div className="flex lg:hidden w-full justify-between items-center">
        <Logo />

        <MobileNav handleScroll={handleScroll} />
      </div>
    </motion.nav>
  );
}