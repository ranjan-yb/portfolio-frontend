import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Skills from "./Skills";

export default function About() {
  return (
    <>
    
    <section id="about" className=" text-black py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">About Me</h2>
        <p className="text-lg leading-relaxed text-black">
          Hi, I’m <span className="text-indigo-300 font-semibold">Ranjan</span> —
          a resilient and resourceful technologist passionate about building elegant
          web solutions. My journey started with hands-on experimentation in Python,
          troubleshooting environments, and mastering package management. That
          persistence naturally evolved into web development, where I now thrive on
          creating efficient workflows, architecting scalable systems, and delivering
          practical, actionable solutions.
        </p>
        <p className="text-lg leading-relaxed text-black mt-4">
          I specialize in the <span className="text-indigo-300 font-semibold">MERN stack</span> 
          (MongoDB, Express, React, Node.js), combining powerful backend APIs with
          dynamic frontend interfaces. Alongside my <span className="text-indigo-300 font-semibold">Python</span>  expertise, I’m skilled in
          implementing secure authentication using <span className="text-indigo-300 font-semibold">tokens</span> 
          and <span className="text-indigo-300 font-semibold">JWT</span>, ensuring modern applications
          are both robust and safe. I also have hands-on experience with deployment,
          taking projects from local development to production environments with
          confidence and precision.
        </p>
        <p className="text-lg leading-relaxed text-black mt-4">
          I enjoy working with modern frameworks, exploring alternatives to solve
          technical challenges, and adapting quickly when faced with obstacles. My
          approach is proactive, humble, and always focused on building a toolkit
          for future success. Whether it’s a full-stack web project or a tailored
          web service, I’m ready to collaborate, iterate, and bring ideas to life.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
           to="/contact"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Let’s Work Together
          </Link>

        </motion.div>
      </motion.div>
    </section>

    <section>
        {/* <Skills/> */}
    </section>

    </>
  );
}