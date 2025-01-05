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

const HeroSection = () => (
  <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-white opacity-70" />
    <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />

    {/* Hero Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="text-left space-y-8">
          {/* Logo/Icon */}
          <div className="flex mb-8 animate-fade-in">
            <SpectrumLogo />
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 animate-fade-in">
              SpectrumPure
            </h1>
            <p className="text-2xl lg:text-3xl font-light mb-6 text-gray-800 animate-fade-in-delayed">
              Revolutionizing Food Safety with Precision using AI
            </p>
            <p className="text-lg text-gray-600 max-w-xl animate-fade-in-delayed-2">
              Pioneering non-destructive spectral analysis for ensuring OIL 
              purity and quality to Determine Adulteration
            </p>
          </div>

          {/* Call-to-Actions */}
          <div className="flex gap-6 animate-fade-in-delayed-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:transform hover:scale-105 shadow-lg">
              GET THE KIT
              <ChevronRight size={20} />
            </button>
            <button className="border border-orange-500 hover:bg-orange-50 text-orange-500 px-8 py-4 rounded-lg font-semibold transition-all hover:transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column - Kit Image */}
        <div className="relative animate-fade-in-delayed rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[32rem] group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-transparent z-10" />
          <img
            src="oilMach.jpeg"
            alt="SpectrumPure Testing Kit"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />

          {/* Floating Specs */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/30 backdrop-blur-md p-6 rounded-xl border border-white/40 shadow-lg z-20">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Advanced Testing Kit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/50 p-2 rounded-lg hover:bg-white/60 transition-colors">
                <div className="bg-orange-500/10 p-1 rounded-full">
                  <Check size={16} className="text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">EM Sensor</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 p-2 rounded-lg hover:bg-white/60 transition-colors">
                <div className="bg-orange-500/10 p-1 rounded-full">
                  <Check size={16} className="text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">AI Module</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 p-2 rounded-lg hover:bg-white/60 transition-colors">
                <div className="bg-orange-500/10 p-1 rounded-full">
                  <Check size={16} className="text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-delayed-2">
        <div className="group bg-white p-8 rounded-xl shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-orange-50 p-4 rounded-full group-hover:bg-orange-100 transition-colors duration-300">
              <Shield className="text-orange-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Unmatched Accuracy
            </h3>
            <p className="text-gray-600">
              Advanced EM sensor technology delivers precise detection of
              adulterants in:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Edible Oils</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Water</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Ghee</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-orange-50 p-4 rounded-full group-hover:bg-orange-100 transition-colors duration-300">
              <Activity className="text-orange-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              AI Integration
            </h3>
            <p className="text-gray-600">
              Smart analysis powered by machine learning provides:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Real-time Results</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Pattern Recognition</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Predictive Analysis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-orange-50 p-4 rounded-full group-hover:bg-orange-100 transition-colors duration-300">
              <Database className="text-orange-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Industry Standard
            </h3>
            <p className="text-gray-600">
              Comprehensive solution designed for:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Food Manufacturers</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Quality Labs</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check size={16} className="text-orange-500" />
                <span>Regulatory Bodies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
);

{
  /* New CTA Section */
}
const CTASection = () => (
  <section className="py-24 bg-gradient-to-r from-orange-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-12 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Ready to Ensure Product Quality?
            </h2>
            <p className="text-lg text-gray-600">
              Get started with our comprehensive testing kit and join leading
              manufacturers in ensuring product authenticity.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="text-orange-500" size={24} />
                <span className="text-gray-700">
                  Complete testing equipment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-orange-500" size={24} />
                <span className="text-gray-700">
                  Training and support included
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-orange-500" size={24} />
                <span className="text-gray-700">Regular software updates</span>
              </div>
            </div>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:transform hover:scale-105 shadow-lg">
              Request a Demo
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="relative h-full min-h-[400px] bg-gradient-to-br from-orange-400 to-orange-600 p-12 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[url('/api/placeholder/600/400')] bg-cover bg-center" />
            <div className="relative text-white text-center space-y-4">
              <h3 className="text-3xl font-bold">Own Testing Kit</h3>
              <p className="text-lg opacity-90">
                Comprehensive solution for quality assurance
              </p>
              <div className="inline-block border-2 border-white rounded-lg px-6 py-3 mt-4">
                Pricing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ScrollReveal = ({ children, delay = 0 }: any) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

const SpectrumLogo = () => (
  <img 
      src="logoSpec.png" 
      alt="Spectrum Logo" 
      style={{ width: '150px', height: '150px' }}
  />
);


const researchTeam = [
  {
    name: "Dr. Shaik Kareem",
    role: "Founder",
    expertise: "Electromagnetic Radiation",
  },
  {
    name: "Mohd. Muzammil",
    role: "Co-founder",
    expertise: "AI and Data Science",
  },
  {
    name: "Prof. Gansham ",
    role: "Mentor and Guide",
    expertise: "Academia and Research",
  },
  {
    name: "Mohd. Mudassir",
    role: "Co-Founder",
    expertise: "Electromagnetic Radiation",
  },
];

const SpectrupureLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <div className="fixed m-2 w-40 h-40 z-50">
        <SpectrumLogo />
      </div> */}
      {/* Hero Section */}
      <HeroSection />

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6 text-gray-800">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art spectral analysis for precise oil
                authentication
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FlaskConical className="text-orange-500" size={40} />,
                  title: "Sample Collection",
                  description:
                    "Advanced hyperspectral imaging captures detailed chemical signatures",
                },
                {
                  icon: <LineChart className="text-orange-500" size={40} />,
                  title: "Spectral Analysis",
                  description:
                    "Multi-wavelength analysis across 400-1000nm spectrum",
                },
                {
                  icon: <Shield className="text-orange-500" size={40} />,
                  title: "Quality Verification",
                  description: "AI-powered authentication with 99.9% accuracy",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300"
                >
                  <div className="mb-6">{process.icon}</div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-orange-500">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Details */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-orange-500">
                  Advanced Spectral Analysis
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Our system utilizes hyperspectral imaging
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
                      <Check className="text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                  <div className="h-full w-full rounded-2xl bg-white p-8">
                    <img
                      src="oilGraph.jpeg"
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

      {/* Applications Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming quality control across the food industry
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FlaskConical className="text-orange-500" size={40} />,
                  title: "Food Manufacturing",
                  description:
                    "Quality control and authentication in large-scale production",
                },
                {
                  icon: <Shield className="text-orange-500" size={40} />,
                  title: "Regulatory Compliance",
                  description: "Meeting international food safety standards",
                },
                {
                  icon: <Activity className="text-orange-500" size={40} />,
                  title: "Research Institutions",
                  description: "Advanced analysis for food science research",
                },
                {
                  icon: <Database className="text-orange-500" size={40} />,
                  title: "Quality Testing Labs",
                  description: "Rapid and accurate sample analysis",
                },

                {
                  icon: <LineChart className="text-orange-500" size={40} />,
                  title: "Supply Chain",
                  description: "Authentication at various distribution points",
                },
                {
                  icon: <Droplets className="text-orange-500" size={40} />,
                  title: "Oil Production",
                  description: "Process monitoring and quality assurance",
                },
              ].map((app, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300"
                >
                  <div className="mb-6">{app.icon}</div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-orange-500">
                    {app.title}
                  </h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />

      {/* Research Team Section */}
      <section className="py-32 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Research Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Led by world-class experts in spectral analysis and machine
                learning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchTeam.map((member, index) => (
                <ScrollReveal key={index} delay={index * 200}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-display text-xl font-semibold mb-4 text-orange-500">
                        {member.name}
                      </h3>
                      <p className="text-gray-800 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {member.expertise}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
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
      <footer className="py-8 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <Droplets
              size={32}
              className="text-orange-500 mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            />
            <p className="hover:text-orange-500 transition-colors duration-300">
              © 2025 Spectrupure. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpectrupureLanding;
