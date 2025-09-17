import React from "react";
import pres1 from "../assets/Prestations/pres1.jpg";
import pres2 from "../assets/Prestations/pres2.jpg";
import pres3 from "../assets/Prestations/pres3.jpg";

const Prestations: React.FC = () => {
  const prestations = [
    {
      image: pres1,
      devices: [
        { count: 1, dimensions: "65 CM de diamètre" },
        { count: 3, dimensions: "65CM / 1M60" },
        { count: 4, dimensions: "1M / 1M" },
      ],
    },
    {
      image: pres2,
      devices: [
        { count: 6, dimensions: "1M / 1M60" },
        { count: 8, dimensions: "1M / 2M" },
        { count: 9, dimensions: "1M60 / 1M60" },
      ],
    },
    {
      image: pres3,
      devices: [{ count: 12, dimensions: "2M / 1M60" }],
    },
  ];

  return (
    <section id="prestations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prestations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos différentes gammes d'appareils holographiques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {prestations.map((prestation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12 h-[400px]">
                <img
                  src={prestation.image}
                  alt={`Prestation ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                {prestation.devices.map((device, deviceIndex) => (
                  <div key={deviceIndex} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-900">
                        Nombre d'appareils: {device.count}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Dimensions: {device.dimensions}
                    </p>
                    {deviceIndex < prestation.devices.length - 1 && (
                      <hr className="mt-3 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div
          className="rounded-2xl p-12 text-white"
          style={{ background: "linear-gradient(to right, #FF204E, #ff6b8a)" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Notre Processus</h3>
            <p className="text-xl text-red-100">
              De l'idée à la réalisation, nous vous accompagnons à chaque étape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Analyse de vos besoins et définition du projet",
              },
              {
                step: "02",
                title: "Conception",
                desc: "Développement de la solution personnalisée",
              },
              {
                step: "03",
                title: "Installation",
                desc: "Mise en place et configuration sur site",
              },
              {
                step: "04",
                title: "Maintenance",
                desc: "Support continu et évolutions",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-red-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à révolutionner votre communication ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment
            nos solutions holographiques peuvent transformer votre activité.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#FF204E" }}
          >
            Demander un devis
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prestations;
