import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", level: "Expert" },
  { name: "Express.js", level: "Advanced" },
  { name: "React.js", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "JWT & Token Auth", level: "Proficient" },
  { name: "Deployment (Cloud/Servers)", level: "Proficient" },
];

export default function Skills() {
  return (
    <section id="skills" className=" text-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-indigo-400">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-lg shadow-lg p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-indigo-300">{skill.name}</h3>
              <div className="w-full bg-gray-600 rounded-full h-3 mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "80%" : "60%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-indigo-500 h-3 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-300 mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}