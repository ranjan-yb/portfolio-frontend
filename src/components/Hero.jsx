import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const Hero = () => {
  return (
    <>
    
    <section className="min-h-[80vh] flex flex-col justify-center items-start py-20">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-slate-500 font-medium mb-4 tracking-wide"
      >
        Hello, I'm Ranjan.
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-5xl sm:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight"
      >
        I build digital <br />
        experiences that <span className="italic text-slate-500">matter</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-lg text-lg text-slate-600 mb-12 leading-relaxed"
      >
        <p>
          A full stack developer passionate about building scalable, accessible,
          and human‑centered digital experiences. Ready to craft anything from
          intuitive frontends to powerful backends.
        </p>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a
          href="#work"
          className="inline-block border-b-2 border-slate-900 pb-1 text-slate-900 font-medium hover:text-slate-600 hover:border-slate-600 transition-all"
        >
          View Selected Work
        </a>
      </motion.div>
    </section>
    <section>
      <Projects/>
      <Contact />
      <About/>
    </section>
    </>
  );
};

export default Hero;
