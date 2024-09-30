'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {Check, Globe, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import PDFViewer from '@/components/pdf-viewer';
import ErrorBoundary from '@/components/ErrorBoundary';

interface Project {
  id: number;
  title: { en: string; no: string };
  description: { en: string; no: string };
  detailedDescription: { en: string; no: string };
  image: string;
  details: { en: string; no: string };
  thumbnailImage?: string; 
  features: { en: string[]; no: string[] };
  technologies: string[];
  embed?: {
    type: 'figma' | 'youtube';
    url: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "WattCast",
      no: "WattCast"
    },
    description: {
      en: "Android application that forecast electricity prices.",
      no: "Android Applikasjon som predikerer strømpris."
    },
    detailedDescription: {
      en: "During the course IN2000 (Software Engineering with Project Work) course at the University of Oslo, I worked for most of the semester in an interdisciplinary team developing an Android application called WattCast. The app helps users predict electricity prices based on historical data and weather conditions, allowing them to optimize their electricity consumption and save money.\n\nIn this project, I was primarily responsible for the design process, from the early stages of data collection and user testing to the final visual design in Figma. I also contributed to the implementation of the user interface in Android Studio using Kotlin. Throughout the process, I worked closely with the team to ensure that the design was not only aesthetically pleasing but also functional and user-friendly.\n\nOne of the biggest challenges was presenting electricity prices and weather forecasts in a way that was easy for users to understand. After several iterations of wireframing and prototyping, we settled on a design that presented both real-time and future electricity prices in a clear and concise manner. To make this possible, we used multiple linear regression to estimate electricity prices, which became a key feature of the app.\n\nThis project gave me valuable experience in user-oriented design and teamwork, as well as a deeper understanding of agile methods such as Scrumban for project management. Throughout the process, I learned how effective communication between design and development can ensure successful implementation of complex solutions.",
      no: "I emnet IN2000 (Software Engineering med prosjektarbeid) ved Universitetet i Oslo jobbet jeg store deler av semesteret i et tverrfaglig team som utviklet en Android-applikasjon kalt WattCast. Appen hjelper brukere med å predikere strømpriser basert på historisk data og værforhold, slik at de kan optimalisere sitt strømforbruk og spare penger.\n\nI prosjektet hadde jeg hovedansvaret for designprosessen, fra de tidlige fasene med datainnsamling og brukertesting til den endelige visuelle utformingen i Figma. Jeg bidro også til implementeringen av brukergrensesnittet i Android Studio ved hjelp av Kotlin. Gjennom hele prosessen jobbet jeg tett med teamet for å sikre at designet ikke bare var estetisk tiltalende, men også funksjonelt og brukervennlig.\n\nEn av de største utfordringene var å presentere strømpriser og værprognoser på en måte som var enkel for brukerne å forstå. Etter flere iterasjoner med wireframing og prototyping landet vi på et design som presenterte både sanntids- og fremtidige strømpriser på en klar og oversiktlig måte. For å gjøre dette mulig brukte vi multippel lineær regresjon for å estimere strømpriser, som ble en nøkkelfunksjon i appen.\n\nDette prosjektet ga meg verdifull erfaring med brukerorientert design og teamarbeid, samt en dypere forståelse av smidige metoder som Scrumban for prosjektstyring. Gjennom hele prosessen lærte jeg hvordan effektiv kommunikasjon mellom design og utvikling kan sikre en vellykket implementering av komplekse løsninger."
    },
    image: "/images/1.4.png",
    details: {
      en: "This project demonstrates an interactive prototype created in Figma for the IN2000 course. It showcases the user interface design and flow of a mobile application.",
      no: "Dette prosjektet demonstrerer en interaktiv prototype laget i Figma for IN2000-kurset. Det viser brukergrensesnittdesignet og flyten i en mobilapplikasjon."
    },
    features: {
      en: ["Prototyping", "API Usage", "Interview", "Agile Methodology", "User Testing", "Workshop", "Use Case Diagram", "Sequence Diagram", "Class Diagram", "Multiple Linear Regression", "Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing"],
      no: ["Prototyping", "API-bruk", "Intervju", "Smidig metodikk", "Brukertesting","Workshop","Use Case Diagram","Sekvensdiagram","Klassediagram", "Multippel lineær regresjon", "Enhetstesting", "Integrasjonstesting", "Systemtesting", "Akseptansetesting"]
    },
    technologies: ["Figma","Kotlin", "Android Studio", "Miro"],
    embed: {
      type: 'figma',
      url: 'https://embed.figma.com/proto/MJjT1oMm9SgKzokqedp5LG/IN2000-prosjekt?node-id=12-3&starting-point-node-id=12%3A3&show-proto-sidebar=0&embed-host=share'
    }
  },
  {
    id: 2,
    title: {
      en: "Deep Dialogue",
      no: "Dyp Dialog"
    },
    description: {
      en: "Interactive dialogue with AI-generated politicians.",
      no: "Interaktiv dialog med AI-genererte politikere."
    },
    detailedDescription: {
      en: "In the IN3010 (Transformative Design) course, my group worked on a project where we were tasked with developing a technology that promoted political engagement. We were then to explore how this technology could lead to either a utopia or a dystopia. We developed the concept of DeepDialogue, a physical installation where the population could engage in conversations with AI-generated politicians.\n\nDeepDialogue was designed as a response to the challenge of declining voter turnout. The technology allowed users to ask questions to AI politicians and engage in realistic political discussions in real-time.Throughout the project, we used several design methods to ensure that the solution was both relevant and feasible.\n\nAs a result, my group created a video to show what such a technology could look like and how it could contribute to a future dystopia. My main responsibility in this video prototype was to create the news broadcasts.",
      no: "I IN3010 (Transformativt design) jobbet gruppen min med et prosjekt der vi skulle utvikle en teknologi som fremmet politisk engasjement. Deretter skulle vi utforske hvordan denne teknologien kunne lede til enten en utopi eller en dystopi. Vi utviklet konseptet DypDialog, en fysisk installasjon der befolkningen kunne delta i samtaler med AI-genererte politikere.\n\nDypDialog ble utformet som et svar på utfordringen med synkende valgdeltakelse. Teknologien gjorde det mulig for brukerne å stille spørsmål til AI-politikere og engasjere seg i realistiske politiske diskusjoner i sanntid. \n\nI løpet av prosjektet brukte vi flere designmetoder for å sikre at løsningen var både relevant og gjennomførbar.\n\nMin gruppe lagde av den grunn en video for å vise hvordan en slik teknologi kunne se ut og hvordan den kunne bidra til en fremtidig dystopi. Mitt hovedansvar i denne videoprototypen var å lage nyhetssendingene."
    },
    image: "/images/3.7.png",
    details: {
      en: "This video provides an in-depth look at the project, highlighting its main features and demonstrating its functionality in real-time.",
      no: "Denne videoen gir et dyptgående innblikk i prosjektet, fremhever hovedfunksjonene og demonstrerer funksjonaliteten i sanntid."
    },
    features: {
      en: ["Gigamapping", "Backcasting","Coverstory","Iceberg Model","Tarot Card Method", "Fabulation", "Prototyping" ],
      no: ["Gigamapping", "Backcasting","Coverstory","Iceberg Model","Tarot Card Method", "Fabulation", "Prototyping" ]
    },
    technologies: ["Figma", "HeyGen", "Canva","DALL·E 3", "narakeet", "Miro"
],
    embed: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/Syj3hNSmpEs?si=gS8OJ97Zv1FfarIe&amp;start=288'
    }
  },
  {
    id: 3,
    title: {
      en: "Gelaquiz",
      no: "Gelaquiz"
    },
    description: {
      en: "Social interaction & cognitive excecise for the elderly.",
      no: "Sosial interaksjon & kognitiv trening for eldre."
    },
    detailedDescription: {
      en: "In IN1060 (Use-Oriented Design), I led a project where we developed GelaQuiz, a prototype to promote social interaction and cognitive training for the elderly in a nursing home. The target group was 75–85-year-olds, and our goal was to reduce cognitive decline through fun and engaging activities.\n\nAs a group leader, I ensured that the team worked well together, met deadlines, and established clear communication rules. We identified user needs through observations and interviews and developed the prototype iteratively with ongoing user participation.\n\nGelaQuiz, built with Arduino and Processing, made it easy for users to participate using color-coded buttons. End-user testing showed that the quiz game encouraged conversations and created engagement. The feedback was very positive, although we faced some challenges with time and resources.\n\nThis experience taught me how important it is to work closely with users and ensure that the solutions truly meet their needs, while also bringing a lot of joy to see the prototype in use.",
      no: "I IN1060 (Bruksorientert design) ledet jeg et prosjekt der vi utviklet GelaQuiz, en prototype for å fremme sosial interaksjon og kognitiv trening for eldre på et eldrehjem. Målgruppen var 75–85-åringer, og målet vårt var å redusere kognitiv svekkelse gjennom engasjerende aktiviteter.Prosjektperioden lærte meg hvor viktig det er å jobbe tett med brukerne og sikre at løsningene virkelig treffer deres behov, samtidig som det ga mye glede å se prototypen i bruk.\n\nSom gruppeleder sørget jeg for at teamet jobbet godt sammen, fulgte tidsfrister, og opprettet klare kommunikasjonsregler. Vi kartla brukernes behov gjennom observasjoner og intervjuer og utviklet prototypen iterativt med løpende brukermedvirkning.\n\nGelaQuiz, bygget med Arduino og Processing, gjorde det enkelt for brukerne å delta ved hjelp av fargekodede knapper. Sluttbrukertestingen viste at quiz-spillet oppmuntret til samtaler og skapte engasjement. Til tross for utfordringer tilknyttet tid & ressurser som oppstod underveis stod gruppen samlet i arbeidet om et positivt utfall. Denne innsatsen var av stor betydning for sluttproduktet, som ble møtt med positv tilbakemelding."},
    image: "/images/2.3.png",
    thumbnailImage: "/images/2.1.png", // New thumbnail image
    details: {
      en:"",
      no: ""
    },
    features: {
      en: ["Prototyping", "Observation","Interview", "Workshop", "Mind Map", "User Testing", "Thematic Analysis" ],
      no: ["Prototyping", "Observasjon","Intervju", "Workshop", "Tankekart", "Brukertesting", "Tematisk Analyse" ]
    },
    technologies: ["Emmbedded", "Arduino IDE","C++","3D Printing"],
  },
];

export function Modal({ project, onClose, lang }: { project: Project; onClose: () => void; lang: 'en' | 'no' }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'technologies'>('features');
  const contentRef = useRef<HTMLDivElement>(null);

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

  const renderEmbed = () => {
    if (project.embed) {
      if (project.embed.type === 'figma') {
        return (
          <div className="aspect-video mb-6 overflow-hidden rounded-lg">
            <iframe 
              style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} 
              width="100%" 
              height="100%" 
              src={project.embed.url}
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        );
      } else if (project.embed.type === 'youtube') {
        return (
          <div className="aspect-video mb-6 overflow-hidden rounded-lg">
            <iframe 
              width="100%" 
              height="100%" 
              src={project.embed.url}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        );
      }
    }
    return (
      <div className="aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title[lang]}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  };


const renderDescription = () => {
    const paragraphs = project.detailedDescription[lang].split('\n\n')
    const visibleParagraphs = showFullDescription ? paragraphs : [paragraphs[0]]

    return (
      <div className="space-y-4">
        {visibleParagraphs.map((paragraph, index) => (
          <motion.p 
            key={index} 
            className="text-[#4A5D4F] leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
        {paragraphs.length > 1 && !showFullDescription && (
          <motion.button
            onClick={() => {
              setShowFullDescription(true)
              if (contentRef.current) {
                setTimeout(() => {
                  contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
              }
            }}
            className="flex items-center px-4 py-2 bg-[#E8E4DB] text-[#4A5D4F] rounded-md hover:bg-[#D9D4C9] transition-colors duration-200 font-mono text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: visibleParagraphs.length * 0.1 }}
          >
            {lang === 'en' ? 'Read more' : 'Les mer'}
            <ChevronDown className="ml-2" size={16} />
          </motion.button>
        )}
      </div>
    )
  }


const renderFeatures = () => (
    <ul className="grid gap-4 sm:grid-cols-2">
      {project.features[lang].map((feature, index) => (
        <motion.li 
          key={index} 
          className="flex items-start space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Check className="text-[#7C9A82] mt-1 flex-shrink-0" size={20} />
          <span className="text-[#4A5D4F] text-lg">{feature}</span>
        </motion.li>
      ))}
    </ul>
  )

  const renderTechnologies = () => (
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <motion.span 
          key={index} 
          className="px-3 py-1 bg-[#E8E4DB] text-[#4A5D4F] rounded-full text-sm font-medium font-mono"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  )
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#F5F3EE] rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-[#4A5D4F] font-mono">
              {project.title[lang]}
            </h2>
            <button
              onClick={onClose}
              className="text-[#4A5D4F] hover:text-[#2C3A2F] transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          {renderEmbed()}
          <div className="mb-6" ref={contentRef}>
            {renderDescription()}
          </div>
          <div className="mb-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 rounded-md font-mono text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'features' ? 'bg-[#7C9A82] text-white' : 'bg-[#E8E4DB] text-[#4A5D4F]'
                }`}
              >
                {lang === 'en' ? 'Key Features' : 'Stikkord'}
              </button>
              <button
                onClick={() => setActiveTab('technologies')}
                className={`px-4 py-2 rounded-md font-mono text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'technologies' ? 'bg-[#7C9A82] text-white' : 'bg-[#E8E4DB] text-[#4A5D4F]'
                }`}
              >
                {lang === 'en' ? 'Technologies' : 'Teknologier'}
              </button>
            </div>
          </div>
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#E8E4DB] p-6 rounded-lg"
          >
            {activeTab === 'features' ? renderFeatures() : renderTechnologies()}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [lang, setLang] = useState<'en' | 'no'>('en')
  const [showPDF, setShowPDF] = useState(false)
  const [pdfError, setPdfError] = useState<string | null>(null)

  const toggleLang = () => {
    setLang(lang === 'en' ? 'no' : 'en')
  }

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePDFError = (error: Error) => {
    console.error("PDF error:", error)
    setPdfError("Failed to load PDF. Please try again later.")
  }

  return (
    <div className="bg-[#F5F3EE] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6 flex justify-between items-center sticky top-0 z-10 bg-[#F5F3EE] bg-opacity-90 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-[#4A5D4F] font-mono">
            {lang === 'en' ? 'Portfolio' : 'Portefølje'}
          </h1>
          <button
            onClick={toggleLang}
            className="flex items-center space-x-2 px-3 py-2 bg-[#E8E4DB] text-[#4A5D4F] rounded-md hover:bg-[#D9D4C9] transition-colors border border-[#C5BFB3] shadow-sm"
            aria-label={lang === 'en' ? 'Bytt til norsk' : 'Switch to English'}
          >
            <Globe size={20} />
            <span className="font-medium font-mono">{lang === 'en' ? 'EN' : 'NO'}</span>
          </button>
        </header>
        
        <motion.section 
          className="min-h-[calc(100vh-80px)] flex flex-col justify-between pt-16 pb-8 relative"
        >
          <motion.div 
            className="grid items-start gap-12 lg:grid-cols-2"
            style={{ y: y1 }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-[#4A5D4F] font-mono"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Camilla Szlagor
              </motion.h2>
              <motion.h3 
                className="text-3xl font-semibold text-[#6B7F70] font-mono"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {lang === 'en' ? 'Interaction Designer' : 'Interaksjonsdesigner'}
              </motion.h3>
              <motion.p 
                className="max-w-[600px] text-[#4A5D4F] text-xl leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {lang === 'en' 
                  ? "First-year master's student in Informatics: Design, Use, Interaction at the University of Oslo."
                  : "Første årsstudent på master i informatikk: design, bruk, interaksjon ved Universitetet i Oslo."}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={() => setShowPDF(true)}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#7C9A82] px-8 text-base font-medium text-white shadow transition-colors hover:bg-[#6B8A71] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4F] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono"
                >
                  {lang === 'en' ? 'View Resume' : 'Se CV'}
                </button>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              style={{ y: y2 }}
            >
              <div className="relative w-full max-w-[400px] aspect-square">
                <Image
                  src="/images/camilla.jpg"
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
            <p className="text-[#4A5D4F] mb-2 text-3xl font-bold font-mono">{lang === 'en' ? 'Projects' : 'Prosjekter'}</p>
            <ChevronDown size={40} className="mx-auto text-[#4A5D4F] animate-bounce" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-xl"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.thumbnailImage || project.image}
                      width={1200}
                      height={900}
                      alt={project.title[lang]}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-[#4A5D4F] mb-4 font-mono">
                      {project.title[lang]}
                    </h3>
                    <p className="text-[#6B7F70] text-xl">{project.description[lang]}</p>
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
      {showPDF && (
        <PDFViewer 
          file="/cv_camilla_szlagor.pdf" 
          onClose={() => setShowPDF(false)}
          onError={handlePDFError}
        />
      )}
      {pdfError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#F5F3EE] p-4 rounded-lg max-w-md">
            <p className="text-[#D35E5E]">{pdfError}</p>
            <button 
              onClick={() => setPdfError(null)}
              className="mt-4 px-4 py-2 bg-[#7C9A82] text-white rounded-md hover:bg-[#6B8A71] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
