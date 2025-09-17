import React, { useState } from "react";
import vid2 from "../assets/realisation/vid2.mp4";
import vid3 from "../assets/realisation/vid3.mp4";
import vid4 from "../assets/realisation/vid4.mp4";

const Projects: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const projects = [
    {
      title: "Réalisation Holographique 1",
      description:
        "Découvrez notre première réalisation filmée, démontrant l'innovation et la qualité de nos solutions holographiques.",
      video: vid2,
      category: "Innovation",
    },
    {
      title: "Réalisation Holographique 2",
      description:
        "Installation complète d'un système holographique avec des résultats exceptionnels capturés en vidéo.",
      video: vid3,
      category: "Installation",
    },
    {
      title: "Réalisation Holographique 3",
      description:
        "Projet sur-mesure filmé montrant notre expertise technique et notre capacité d'adaptation aux besoins clients.",
      video: vid4,
      category: "Sur-mesure",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets holographiques réalisés et filmés, témoignant
            de notre expertise et de notre savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => {
                const video = document.getElementById(
                  `video-${index}`
                ) as HTMLVideoElement;
                if (video) {
                  setPlayingVideo(index);
                  video.play().catch(console.error);
                }
              }}
              onMouseLeave={() => {
                const video = document.getElementById(
                  `video-${index}`
                ) as HTMLVideoElement;
                if (video) {
                  setPlayingVideo(null);
                  video.pause();
                  video.currentTime = 0;
                }
              }}
              onClick={() => {
                const video = document.getElementById(
                  `video-${index}`
                ) as HTMLVideoElement;
                if (video) {
                  if (playingVideo === index) {
                    setPlayingVideo(null);
                    video.pause();
                    video.currentTime = 0;
                  } else {
                    setPlayingVideo(index);
                    video.play().catch(console.error);
                  }
                }
              }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                <video
                  id={`video-${index}`}
                  src={project.video}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                {/* Play button overlay when not playing */}
                {playingVideo !== index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-gray-800 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-2">
                  <span
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full text-white"
                    style={{ backgroundColor: "#FF204E" }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#FF204E" }}
          >
            Voir nos vidéos de projets
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
