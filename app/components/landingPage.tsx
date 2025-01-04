"use client";

import React, { useEffect, useRef } from "react";
import {
  ChevronRight,
  Activity,
  Database,
  Check,
  Droplets,
  FlaskConical,
  LineChart,
  Shield,
  User,
  Mail,
  BookOpen,
} from "lucide-react";

const ScrollReveal = ({ children, delay = 0 } : any) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("animate-reveal");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-1000"
    >
      {children}
    </div>
  );
};

const SpectrumLogo = () => <img src="oilogo.png"></img>;

const researchTeam = [
  {
    name: "Dr. Shaik Kareem",
    role: "Founder",
    expertise: "Electromagnetic Radiation",
    description:
      "The professor, with expertise in physics, contributed his unique knowledge in electromagnetic radiation to the startup. Their understanding drives innovative detection techniques for impurities in edible oils. They are driven by bridging academia and industry, aiming to apply research to solve real-world issues.",
  },
  {
    name: "Mohd. Muzammil",
    role: "Co-founder",
    expertise: "AI and Data Science",
    description:
      "A final year student in B.E. (AI & DS), offered cutting-edge skills in AI and data science. They refine detection algorithms crucial for identifying impurities in edible oils. Passionate about practical applications, they see the startup as a chance to contribute to solving pressing societal issues.",
  },
  {
    name: "Prof. Gansham ",
    role: "Mentor and Guide",
    expertise: "Academia and Research",
    description:
      "With extensive experience in academia and research, the university professor supports the startup's growth. Their mentorship and connections provide crucial backing. They are passionate about fostering innovation and entrepreneurship, viewing the startup as a means to empower the next generation of innovators.",
  },
  {
    name: "Mohd. Muzammil",
    role: "Founder",
    expertise: "Electromagnetic Radiation",
    description:
      "The professor, with expertise in physics, contributed his unique knowledge in electromagnetic radiation to the startup. Their understanding drives innovative detection techniques for impurities in edible oils. They are driven by bridging academia and industry, aiming to apply research to solve real-world issues.",
  },
];

const SpectrupureLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed m-2 w-40 h-40 z-50">
        <SpectrumLogo />
      </div>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 to-black opacity-70" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />

        {/* Animated Oil Drops */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.1,
              }}
            >
              <Droplets size={48} className="text-orange-500" />
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8 animate-fade-in">
              <Droplets size={96} className="text-orange-500" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 animate-fade-in">
              Spectrupure
            </h1>
            <p className="text-3xl md:text-4xl font-light mb-8 animate-fade-in-delayed">
              Advanced Oil Authentication System
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delayed-2">
              Combining Hyperspectral Imaging with AI for Precise Oil Quality
              Analysis
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-delayed-3">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg 
                font-semibold flex items-center gap-2 transition-all hover:transform hover:scale-105"
              >
                Start Analysis
                <ChevronRight size={20} />
              </button>
              <button
                className="border border-orange-600 hover:bg-orange-600/10 text-white px-8 py-4 
                rounded-lg font-semibold transition-all hover:transform hover:scale-105"
              >
                View Research
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-black to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                State-of-the-art spectral analysis for precise oil
                authentication
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FlaskConical className="text-orange-400" size={40} />,
                  title: "Sample Collection",
                  description:
                    "Advanced hyperspectral imaging captures detailed chemical signatures",
                },
                {
                  icon: <LineChart className="text-orange-400" size={40} />,
                  title: "Spectral Analysis",
                  description:
                    "Multi-wavelength analysis across 400-1000nm spectrum",
                },
                {
                  icon: <Shield className="text-orange-400" size={40} />,
                  title: "Quality Verification",
                  description: "AI-powered authentication with 99.9% accuracy",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="bg-black/50 p-8 rounded-2xl border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="mb-6">{process.icon}</div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-orange-400">
                    {process.title}
                  </h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Details */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-orange-400">
                  Advanced Spectral Analysis
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Our system utilizes cutting-edge hyperspectral imaging
                  technology to analyze oil samples across multiple wavelengths,
                  creating detailed chemical fingerprints for authentication.
                </p>
                <div className="space-y-4">
                  {[
                    "ROI Extraction & Analysis",
                    "Multi-stage Data Preprocessing",
                    "Advanced ML Model Integration",
                    "Real-time Quality Assessment",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-600 to-orange-900 p-1">
                  <div className="h-full w-full rounded-2xl bg-black p-8">
                    <img
                      src="/api/placeholder/600/600"
                      alt="Spectral Analysis Visualization"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-32 bg-gradient-to-b from-orange-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Research & Innovation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pushing the boundaries of spectral analysis technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-black/50 p-8 rounded-2xl border border-orange-900/30">
                <h3 className="font-display text-xl font-semibold mb-4 text-orange-400">
                  Scientific Publications
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">
                      Advanced Spectral Analysis in Food Safety
                    </h4>
                    <p className="text-gray-400">
                      Journal of Food Science, 2024
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">
                      Machine Learning in Oil Authentication
                    </h4>
                    <p className="text-gray-400">
                      IEEE Transactions on Food Safety, 2024
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">
                      Hyperspectral Imaging Applications
                    </h4>
                    <p className="text-gray-400">Food Chemistry, 2023</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 p-8 rounded-2xl border border-orange-900/30">
                <h3 className="font-display text-xl font-semibold mb-4 text-orange-400">
                  Research Highlights
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        Novel Algorithm Development
                      </span>
                      <p className="text-gray-400">
                        Advanced machine learning models for spectral data
                        analysis
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        Database Enhancement
                      </span>
                      <p className="text-gray-400">
                        Extensive spectral database of pure and adulterated oils
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        Hardware Optimization
                      </span>
                      <p className="text-gray-400">
                        Improved hyperspectral imaging system design
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforming quality control across the food industry
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FlaskConical className="text-orange-400" size={40} />,
                  title: "Food Manufacturing",
                  description:
                    "Quality control and authentication in large-scale production",
                },
                {
                  icon: <Shield className="text-orange-400" size={40} />,
                  title: "Regulatory Compliance",
                  description: "Meeting international food safety standards",
                },
                {
                  icon: <Activity className="text-orange-400" size={40} />,
                  title: "Research Institutions",
                  description: "Advanced analysis for food science research",
                },
                {
                  icon: <Database className="text-orange-400" size={40} />,
                  title: "Quality Testing Labs",
                  description: "Rapid and accurate sample analysis",
                },
                {
                  icon: <LineChart className="text-orange-400" size={40} />,
                  title: "Supply Chain",
                  description: "Authentication at various distribution points",
                },
                {
                  icon: <Droplets className="text-orange-400" size={40} />,
                  title: "Oil Production",
                  description: "Process monitoring and quality assurance",
                },
              ].map((app, index) => (
                <div
                  key={index}
                  className="bg-black/50 p-8 rounded-2xl border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="mb-6">{app.icon}</div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-orange-400">
                    {app.title}
                  </h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Team Section (Replacing Partners Section) */}
      <section className="py-32 bg-gradient-to-b from-black to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Research Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Led by world-class experts in spectral analysis and machine
                learning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchTeam.map((member, index) => (
                <ScrollReveal key={index} delay={index * 200}>
                  <div
                    className="bg-black/50 p-8 rounded-2xl border border-orange-900/30 
                    hover:border-orange-500/50 transition-all duration-300 
                    hover:transform hover:scale-105 hover:bg-orange-900/10"
                  >
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-display text-xl font-semibold mb-4 text-orange-400">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        {member.expertise}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <BookOpen size={16} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-orange-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <Droplets
              size={32}
              className="text-orange-500 mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            />
            <p className="hover:text-orange-400 transition-colors duration-300">
              © 2025 Spectrupure. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpectrupureLanding;
