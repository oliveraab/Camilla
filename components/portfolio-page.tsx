'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Globe, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: { en: string; no: string };
  description: { en: string; no: string };
  image: string;
  details: { en: string; no: string };
  features: { en: string[]; no: string[] };
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "Project 1",
      no: "Prosjekt 1"
    },
    description: {
      en: "A brief description of the first project.",
      no: "En kort beskrivelse av det første prosjektet."
    },
    image: "/placeholder.svg?height=400&width=600",
    details: {
      en: "This is a detailed description of Project 1. Here you can provide more information about the project, including its goals, challenges, and outcomes.",
      no: "Dette er en detaljert beskrivelse av Prosjekt 1. Her kan du gi mer informasjon om prosjektet, inkludert mål, utfordringer og resultater."
    },
    features: {
      en: ["Feature 1", "Feature 2", "Feature 3"],
      no: ["Funksjon 1", "Funksjon 2", "Funksjon 3"]
    },
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: {
      en: "Project 2",
      no: "Prosjekt 2"
    },
    description: {
      en: "A brief description of the second project.",
      no: "En kort beskrivelse av det andre prosjektet."
    },
    image: "/placeholder.svg?height=400&width=600",
    details: {
      en: "This is a detailed description of Project 2. Here you can provide more information about the project, including its goals, challenges, and outcomes.",
      no: "Dette er en detaljert beskrivelse av Prosjekt 2. Her kan du gi mer informasjon om prosjektet, inkludert mål, utfordringer og resultater."
    },
    features: {
      en: ["Feature 1", "Feature 2", "Feature 3"],
      no: ["Funksjon 1", "Funksjon 2", "Funksjon 3"]
    },
    technologies: ["Vue.js", "Nuxt.js", "SCSS"],
  },
  {
    id: 3,
    title: {
      en: "Project 3",
      no: "Prosjekt 3"
    },
    description: {
      en: "A brief description of the third project.",
      no: "En kort beskrivelse av det tredje prosjektet."
    },
    image: "/placeholder.svg?height=400&width=600",
    details: {
      en: "This is a detailed description of Project 3. Here you can provide more information about the project, including its goals, challenges, and outcomes.",
      no: "Dette er en detaljert beskrivelse av Prosjekt 3. Her kan du gi mer informasjon om prosjektet, inkludert mål, utfordringer og resultater."
    },
    features: {
      en: ["Feature 1", "Feature 2", "Feature 3"],
      no: ["Funksjon 1", "Funksjon 2", "Funksjon 3"]
    },
    technologies: ["Angular", "TypeScript", "Material UI"],
  },
];

function Modal({
  project,
  onClose,
  lang
}: {
  project: Project;
  onClose: () => void;
  lang: 'en' | 'no';
}) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {project.title[lang]}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="aspect-video mb-6 overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title[lang]}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.details[lang]}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {lang === 'en' ? 'Key Features' : 'Hovedfunksjoner'}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {project.features[lang].map((feature, index) => (
                  <li key={index} className="text-lg">{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {lang === 'en' ? 'Technologies Used' : 'Brukte Teknologier'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-teal-500 px-8 text-base font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              {lang === 'en' ? 'View Live Project' : 'Se Live Prosjekt'}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lang, setLang] = useState<'en' | 'no'>('en');

  const toggleLang = () => {
    setLang(lang === 'en' ? 'no' : 'en');
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-teal-50 min-h-screen font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6 flex justify-between items-center sticky top-0 z-10 bg-opacity-80 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            {lang === 'en' ? 'Portfolio' : 'Portefølje'}
          </h1>
          <button
            onClick={toggleLang}
            className="flex items-center space-x-2 px-3 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
            aria-label={lang === 'en' ? 'Switch to Norwegian' : 'Switch to English'}
          >
            <Globe size={20} />
            <span className="font-medium">{lang === 'en' ? 'EN' : 'NO'}</span>
          </button>
        </header>
        
        <motion.section 
          className="min-h-[calc(100vh-80px)] flex flex-col justify-between pt-16 pb-8 relative"
          style={{ scale }}
        >
          <motion.div 
            className="grid items-start gap-12 lg:grid-cols-2"
            style={{ y: y1 }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Camilla Szlagor
              </motion.h2>
              <motion.h3 
                className="text-3xl font-semibold text-teal-600"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {lang === 'en' ? 'Interaction Designer' : 'Interaksjonsdesigner'}
              </motion.h3>
              <motion.p 
                className="max-w-[600px] text-gray-700 text-xl leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {lang === 'en' 
                  ? "Experienced full-stack developer with expertise in React, Node.js, and database technologies. Passionate about building scalable and user-friendly web applications."
                  : "Erfaren full-stack utvikler med ekspertise innen React, Node.js og databaseteknologier. Lidenskapelig opptatt av å bygge skalerbare og brukervennlige webapplikasjoner."}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-teal-500 px-8 text-base font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  {lang === 'en' ? 'View Resume' : 'Se CV'}
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              style={{ y: y2 }}
            >
              <div className="relative w-full max-w-[400px] aspect-square">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  fill
                  alt="Camilla Szlagor"
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="text-center cursor-pointer mt-12"
            onClick={scrollToProjects}
            style={{ opacity }}
          >
            <p className="text-gray-600 mb-2 text-3xl font-bold">{lang === 'en' ? 'Projects' : 'Prosjekter'}</p>
            <ChevronDown size={40} className="mx-auto text-gray-600 animate-bounce" />
          </motion.div>
        </motion.section>

        <motion.section 
          id="projects-section"
          ref={ref}
          className="py-16 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            {lang === 'en' ?  'My Projects' : 'Mine Prosjekter'}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      width={600}
                      height={400}
                      alt={project.title[lang]}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title[lang]}
                    </h3>
                    <p className="text-gray-600 text-lg">{project.description[lang]}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
