import { useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  features: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of the first project.",
    image: "/placeholder.svg",
    details:
      "This is a detailed description of Project 1. Here you can provide more information about the project, including its goals, challenges, and outcomes.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of the second project.",
    image: "/placeholder.svg",
    details:
      "This is a detailed description of Project 2. Here you can provide more information about the project, including its goals, challenges, and outcomes.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["Vue.js", "Nuxt.js", "SCSS"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of the third project.",
    image: "/placeholder.svg",
    details:
      "This is a detailed description of Project 3. Here you can provide more information about the project, including its goals, challenges, and outcomes.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["Angular", "TypeScript", "Material UI"],
  },
];

function Modal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-navy-900">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
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
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4">{project.details}</p>
          <h3 className="text-xl font-semibold text-navy-900 mb-2">
            Key Features
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-navy-900 mb-2">
            Technologies Used
          </h3>
          <p className="text-gray-600 mb-4">
            {project.technologies.join(", ")}
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            View Live Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-navy-900">
                Camilla Szlagor
              </h1>
              <h2 className="text-2xl font-semibold text-gray-600">
                Interaksjonsdesigner
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced full-stack developer with expertise in React,
                Node.js, and database technologies. Passionate about building
                scalable and user-friendly web applications.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                View Resume
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Camilla Szlagor"
                className="w-full max-w-[400px] aspect-square overflow-hidden rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-900">
            My Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-navy-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
