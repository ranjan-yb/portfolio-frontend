import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'React / Tailwind',
        image: 'https://plus.unsplash.com/premium_photo-1681487827495-26b20ee57367?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxlLWNvbW1lcmNlfGVufDB8fDB8fHww',
    },
    {
        id: 2,
        title: 'Finance App UI',
        category: 'Mobile Design',
        image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 3,
        title: 'Travel Agency Web',
        category: 'Next.js / GSAP',
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

];

const Projects = () => {
    return (
        <section id="work" className="py-20">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl font-serif font-bold text-slate-900">Selected Work</h2>
                <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">View All</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group cursor-pointer"
                    >
                        <div className="bg-slate-100 overflow-hidden mb-4 rounded-sm">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-medium text-slate-900 mb-1">{project.title}</h3>
                        <p className="text-sm text-slate-500">{project.category}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
