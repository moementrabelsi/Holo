import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pionniers de l'innovation holographique en Afrique du Nord
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Holog'art</strong> est né de la vision audacieuse de
                  démocratiser les technologies holographiques en Afrique du
                  Nord. Fondée en Tunisie, notre entreprise s'est rapidement
                  imposée comme le leader régional des solutions d'affichage
                  holographique 3D.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Avec une équipe d'ingénieurs passionnés et d'experts en
                  technologies immersives, nous repoussons constamment les
                  limites de l'innovation pour offrir des expériences visuelles
                  extraordinaires à nos clients.
                </p>

                <p className="text-lg leading-relaxed">
                  Notre mission est de transformer la façon dont les
                  entreprises, les institutions et les créateurs communiquent
                  avec leur public en leur offrant des outils technologiques
                  révolutionnaires qui captivent, informent et inspirent.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#FF204E" }}
                  >
                    50+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Projets réalisés
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#FF204E" }}
                  >
                    15+
                  </div>
                  <div className="text-gray-600 font-medium">Partenaires</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Holog'art Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: "#FF204E" }}
              ></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: "#ff6b8a" }}
              ></div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nos Valeurs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#FF204E" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    Nous repoussons constamment les limites technologiques pour
                    créer l'avenir.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#FF204E" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Passion
                  </h4>
                  <p className="text-gray-600">
                    Notre passion pour la technologie guide chacune de nos
                    réalisations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#FF204E" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Excellence
                  </h4>
                  <p className="text-gray-600">
                    Nous visons l'excellence dans chaque projet et chaque
                    interaction client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
