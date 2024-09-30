'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Globe, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import PDFViewer from '@/components/pdf-viewer';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: { en: string; no: string };
  description: { en: string; no: string };
  detailedDescription: { en: string; no: string };
  image: string;
  details: { en: string; no: string };
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
      en: "In the IN2000 (Software Engineering with Project Work) course at the University of Oslo, I worked for most of the semester in an interdisciplinary team developing an Android application called WattCast. The app helps users predict electricity prices based on historical data and weather conditions, allowing them to optimize their electricity consumption and save money.\n\nIn this project, I was primarily responsible for the design process, from the early stages of data collection and user testing to the final visual design in Figma. I also contributed to the implementation of the user interface in Android Studio using Kotlin. Throughout the process, I worked closely with the team to ensure that the design was not only aesthetically pleasing but also functional and user-friendly.\n\nOne of the biggest challenges was presenting electricity prices and weather forecasts in a way that was easy for users to understand. After several iterations of wireframing and prototyping, we settled on a design that presented both real-time and future electricity prices in a clear and concise manner. To make this possible, we used multiple linear regression to estimate electricity prices, which became a key feature of the app.\n\nThis project gave me valuable experience in user-oriented design and teamwork, as well as a deeper understanding of agile methods such as Scrumban for project management. Throughout the process, I learned how effective communication between design and development can ensure successful implementation of complex solutions.",
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
      en: "During the IN1060 (Use-Oriented Design) course, I had a project where we developed a prototype called GelaQuiz, aimed at promoting social interaction and cognitive training for the elderly. Our target group was seniors aged 75-85 at a nursing home, and the project focused on reducing cognitive decline through engaging conversations and activities.\n\nAs the group leader, my responsibilities included coordinating the work in the team, ensuring progress, and keeping track of milestones. I established an internal work contract that helped improve group dynamics, and we set clear communication rules to ensure a smooth process. We started the project with a thorough investigation of the users through qualitative methods such as observations and semi-structured interviews to map out their needs and challenges.\n\nThrough an iterative design process, we developed several versions of the prototype based on feedback from the target group. We started with low-fidelity sketches, and the users were actively involved in all design decisions. The GelaQuiz prototype was designed to be easy to use, without time constraints, to encourage discussion and collaboration among players. It consisted of a main console and controllers with colored buttons, making it easy for users to participate in the quiz game.\n\nTechnically, the prototype was built using Arduino and Processing to implement the functionality. The game read out the questions and allowed users to answer with color-coded buttons, tailored to the elderly's need for simple and intuitive interactions.\n\nThrough user testing, the prototype proved to be an effective conversation starter, creating a high degree of social interaction. Although we faced some challenges with resources and time, especially in terms of the number of questions and the aesthetics of the product, the feedback from users was very positive. They appreciated the quiz questions and engaged in discussions around the answers.\n\nThis experience taught me the importance of user involvement, iterative design, and clear project management. The project met our goal of promoting both cognitive training and social interaction, and it was a great learning point to work so closely with users to ensure that our solutions actually addressed their needs.",
      no: "I løpet av emnet IN1060 (Bruksorientert design) hadde jeg et prosjekt hvor vi utviklet en prototype kalt GelaQuiz, med formål om å fremme sosial interaksjon og kognitiv trening for eldre. Vår målgruppe var eldre i alderen 75-85 på et eldrehjem, og prosjektet fokuserte på å redusere kognitiv svekkelse gjennom engasjerende samtaler og aktiviteter.\n\nSom gruppeleder var mitt ansvar å koordinere arbeidet i teamet, sørge for fremdrift og holde oversikt over milepæler. Jeg opprettet en intern arbeidskontrakt som hjalp med å forbedre gruppedynamikken, og vi etablerte klare kommunikasjonsregler for å sikre en jevn prosess. Vi startet prosjektet med en grundig undersøkelse av brukerne gjennom kvalitative metoder som observasjoner og semi-strukturerte intervjuer for å kartlegge deres behov og utfordringer.\n\nGjennom en iterativ designprosess, utviklet vi flere versjoner av prototypen basert på tilbakemeldinger fra målgruppen. Vi begynte med lavoppløselige skisser, og brukerne var aktivt involvert i alle designavgjørelser. Prototypen GelaQuiz ble utformet for å være enkel å bruke, uten tidsbegrensning, for å oppmuntre til diskusjon og samarbeid mellom spillerne. Den besto av en hovedkonsoll og kontrollere med fargede knapper, som gjorde det enkelt for brukerne å delta i quiz-spillet.\n\nTeknisk sett ble prototypen bygget ved hjelp av Arduino og Processing for å implementere funksjonaliteten. Spillet leste opp spørsmålene og ga brukerne mulighet til å svare med fargekodede knapper, noe som var tilpasset de eldres behov for enkle og intuitive interaksjoner.\n\nGjennom sluttbrukertesting viste prototypen seg å være en effektiv samtalestarter, og den skapte høy grad av sosialt samspill. Selv om vi møtte noen utfordringer med ressurser og tid, spesielt når det gjaldt antall spørsmål og estetikken på produktet, var tilbakemeldingene fra brukerne svært positive. De satte pris på quiz-spørsmålene og engasjerte seg i diskusjoner rundt svarene.\n\nDenne erfaringen lærte meg viktigheten av brukermedvirkning, iterativ design og tydelig prosjektledelse. Prosjektet oppfylte vårt mål om å fremme både kognitiv trening og sosial interaksjon, og det var et stort læringspunkt å jobbe så tett med brukere for å sikre at våre løsninger faktisk svarte på deres behov."
    },
    image: "/images/2.3.png",
    thumbnailImage: "/images/2.1.png", // New thumbnail image
    details: {
      en: "This project is a comprehensive web application that demonstrates proficiency in both front-end and back-end technologies.",
      no: "Dette prosjektet er en omfattende webapplikasjon som demonstrerer kompetanse i både front-end og back-end teknologier."
    },
    features: {
      en: ["Prototyping", "Observation","Interview", "Workshop", "Mind Map", "User Testing", "Thematic Analysis" ],
      no: ["Prototyping", "Observasjon","Intervju", "Workshop", "Tankekart", "Brukertesting", "Tematisk Analyse" ]
    },
    technologies: ["Emmbedded", "Arduino IDE","C++","3D Printing"],
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
  const [showFullDescription, setShowFullDescription] = useState(false);
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
    const paragraphs = project.detailedDescription[lang].split('\n\n');
    const visibleParagraphs = showFullDescription ? paragraphs : [paragraphs[0]];

    return (
      <>
        {visibleParagraphs.map((paragraph, index) => (
          <p key={index} className="text-foreground mb-4 leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
        {paragraphs.length > 1 && (
          <button
            onClick={() => {
              setShowFullDescription(!showFullDescription);
              if (!showFullDescription && contentRef.current) {
                setTimeout(() => {
                  contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 font-mono text-sm font-medium"
          >
            {showFullDescription 
              ? (lang === 'en' ? 'Show less' : 'Vis mindre') 
              : (lang === 'en' ? 'Read more' : 'Les mer')}
          </button>
        )}
      </>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card text-card-foreground rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-foreground font-mono">
              {project.title[lang]}
            </h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          {renderEmbed()}
          <div className="mb-6" ref={contentRef}>
            {renderDescription()}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 font-mono">
                {lang === 'en' ? 'Key Features' : 'Hovedfunksjoner'}
              </h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                {project.features[lang].map((feature, index) => (
                  <li key={index} className="text-lg">
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 font-mono">
                {lang === 'en' ? 'Technologies' : 'Teknologier'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}







export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lang, setLang] = useState<'en' | 'no'>('en');
  const [showPDF, setShowPDF] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'no' : 'en');
  };

const prefetchFigmaEmbeds = () => {
  projects.forEach(project => {
    if (project.embed && project.embed.type === 'figma') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = project.embed.url;
      document.head.appendChild(link);
    }
  });
};
useEffect(() => {
    prefetchFigmaEmbeds();
  }, []);

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

  const handleViewResume = () => {
    setShowPDF(true);
    setPdfError(null);
  };

  const handlePDFError = (error: Error) => {
    console.error("PDF error:", error);
    setPdfError("Failed to load PDF. Please try again later.");
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6 flex justify-between items-center sticky top-0 z-10 bg-slate-50 bg-opacity-80 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-slate-800 font-mono">
            {lang === 'en' ? 'Portfolio' : 'Portefølje'}
          </h1>
          <button
            onClick={toggleLang}
            className="flex items-center space-x-2 px-3 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300 transition-colors border border-slate-300 shadow-sm"
            aria-label={lang === 'en' ? 'Switch to Norwegian' : 'Switch to English'}
          >
            <Globe size={20} />
            <span className="font-medium font-mono">{lang === 'en' ? 'EN' : 'NO'}</span>
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
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-slate-900 font-mono"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Camilla Szlagor
              </motion.h2>
              <motion.h3 
                className="text-3xl font-semibold text-slate-700 font-mono"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {lang === 'en' ? 'Interaction Designer' : 'Interaksjonsdesigner'}
              </motion.h3>
              <motion.p 
                className="max-w-[600px] text-slate-600 text-xl leading-relaxed"
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
                  onClick={handleViewResume}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-slate-800 px-8 text-base font-medium text-white shadow transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono"
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
            <p className="text-slate-800 mb-2 text-3xl font-bold font-mono">{lang === 'en' ? 'Projects' : 'Prosjekter'}</p>
            <ChevronDown size={40} className="mx-auto text-slate-800 animate-bounce" />
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
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 font-mono">
            {lang === 'en' ? 'My Projects' : 'Mine Prosjekter'}
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
                      src={project.id === 3 ? (project.thumbnailImage || project.image) : project.image}
                      width={600}
                      height={400}
                      alt={project.title[lang]}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-mono">
                      {project.title[lang]}
                    </h3>
                    <p className="text-slate-600 text-lg">{project.description[lang]}</p>
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
          <div className="bg-white p-4 rounded-lg max-w-md">
            <p className="text-red-500">{pdfError}</p>
            <button 
              onClick={() => setPdfError(null)}
              className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
