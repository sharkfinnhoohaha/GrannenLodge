'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, ChevronDown, Camera, Users, Coffee, Heart, TreePine, ZapOff, BookOpen, Moon, Sparkles, Wind, Waves } from 'lucide-react';

// Custom hook for reveal logic
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return [domRef, isVisible];
};

const RevealSection = ({ children, className = "", id = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section 
      id={id}
      ref={ref} 
      className={`min-h-screen snap-start flex flex-col justify-center relative transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </section>
  );
};

const GrannenLodge = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const retreatOptions = [
    { title: "School Camps", icon: <TreePine className="w-5 h-5" />, desc: "An immersive outdoor classroom by the fjord where nature is the primary teacher." },
    { title: "Outdoor Education", icon: <BookOpen className="w-5 h-5" />, desc: "Practical skills and ecological understanding in a wild, preserved setting." },
    { title: "Team Retreats", icon: <Users className="w-5 h-5" />, desc: "Strengthen bonds away from the screen, surrounded by the silence of the north." },
    { title: "Creative Retreats", icon: <Camera className="w-5 h-5" />, desc: "Find your muse in the stillness of the Nordic winter landscape." },
    { title: "Therapy & Reflection", icon: <Heart className="w-5 h-5" />, desc: "A sanctuary for inner work, healing, and deep personal contemplation." },
    { title: "Community Weekends", icon: <Coffee className="w-5 h-5" />, desc: "Sharing stories around the fire and building lasting human connections." },
    { title: "Digital Detox", icon: <ZapOff className="w-5 h-5" />, desc: "Unplug from the noise and reconnect with the rhythm of the seasons." },
    { title: "Friends & Family", icon: <Users className="w-5 h-5" />, desc: "Quality time in a place that feels like home, only wilder." }
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#fafaf9] text-[#2c332c] font-sans selection:bg-[#4a5d4a] selection:text-white">
      
      {/* Dynamic Nav */}
      <nav className={`fixed w-full z-50 transition-all duration-1000 px-8 py-6 flex justify-between items-center ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'}`}>
        <div className={`text-xl font-light tracking-[0.4em] uppercase transition-colors duration-700 ${isScrolled ? 'text-[#1a2a1a]' : 'text-white'}`}>
          Grannen Lodge
        </div>
        <div className={`hidden md:flex space-x-10 uppercase text-[10px] tracking-[0.3em] transition-colors duration-700 ${isScrolled ? 'text-[#1a2a1a]' : 'text-white/80'}`}>
          <a href="#about" className="hover:text-emerald-300">About</a>
          <a href="#atmosphere" className="hover:text-emerald-300">Atmosphere</a>
          <a href="#retreats" className="hover:text-emerald-300">Retreats</a>
          <a href="#connect" className="hover:text-emerald-300">Connect</a>
        </div>
      </nav>

      {/* Hero "Room" */}
      <section className="h-screen snap-start relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531366930499-41f5383b415f?auto=format&fit=crop&w=1920&q=80" 
            alt="Grannen Lodge Bindal Fjord" 
            className="w-full h-full object-cover scale-100 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fafaf9]/20" />
        </div>
        <div className="relative text-center text-white px-4">
          <span className="inline-block text-[10px] tracking-[0.6em] uppercase mb-8 opacity-0 animate-[fadeInBlur_2s_ease-out_forwards] text-emerald-100">
            Bindal Fjord, Norway
          </span>
          <h1 className="text-5xl md:text-9xl font-extralight tracking-tighter mb-8 opacity-0 animate-[fadeInBlur_2.5s_ease-out_0.5s_forwards]">
            The Silence of <span className="italic">Grannen</span>
          </h1>
          <div className="w-16 h-[1px] bg-white/20 mx-auto opacity-0 animate-[fadeInScale_1.5s_ease-out_1.2s_forwards]" />
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-pulse">
          <ChevronDown size={24} strokeWidth={1} />
        </div>
      </section>

      {/* Philosophy Room */}
      <RevealSection id="about" className="bg-white">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-7">
            <h2 className="text-4xl font-extralight leading-tight mb-10 text-[#1a2a1a] tracking-tight">
              A modern retreat <br/>by the Bindal Fjord.
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              Grannen Lodge is a space where the mountains meet the water. We offer more than just lodging; we offer a pause from the modern pace. A place for community, education, and deep reflection.
            </p>
            <div className="flex flex-wrap gap-8 items-center text-[10px] tracking-[0.4em] uppercase text-gray-500">
              <span className="flex items-center gap-2"><Wind size={14} className="text-emerald-700"/> Alpine Air</span>
              <span className="flex items-center gap-2"><Waves size={14} className="text-emerald-700"/> Fjord Life</span>
              <span className="flex items-center gap-2"><Sparkles size={14} className="text-emerald-700"/> Night Skies</span>
            </div>
          </div>
          <div className="md:col-span-5 relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=800&q=80" 
              alt="Nature reflection" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
            />
          </div>
        </div>
      </RevealSection>

      {/* Gallery Room */}
      <RevealSection id="atmosphere" className="bg-[#fafaf9]">
        <div className="px-6 max-w-[1400px] mx-auto w-full">
          <div className="mb-16 text-center">
            <h3 className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-4">Atmosphere</h3>
            <div className="w-8 h-[1px] bg-gray-300 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="h-[400px] overflow-hidden"><img src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800" className="w-full h-full object-cover"/></div>
            <div className="h-[400px] overflow-hidden"><img src="https://images.unsplash.com/photo-1543466448-232147321689?auto=format&fit=crop&w=800" className="w-full h-full object-cover"/></div>
            <div className="h-[400px] overflow-hidden"><img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=800" className="w-full h-full object-cover"/></div>
            <div className="h-[400px] overflow-hidden"><img src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=800" className="w-full h-full object-cover"/></div>
          </div>
        </div>
      </RevealSection>

      {/* Retreat Options Room */}
      <RevealSection id="retreats" className="bg-[#1a2a1a] text-white">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 py-20">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h2 className="text-4xl font-extralight tracking-tight mb-8">What we do</h2>
              <p className="text-white/40 font-light leading-relaxed mb-12">
                Whether you're organizing a school camp or seeking a private creative haven, we provide the environment.
              </p>
              <div className="w-12 h-[1px] bg-emerald-500/50" />
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {retreatOptions.map((option, index) => (
                <div key={index} className="group">
                  <div className="mb-6 text-emerald-400">{option.icon}</div>
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4">{option.title}</h3>
                  <p className="text-xs leading-relaxed text-white/30 font-light group-hover:text-white/60 transition-colors">
                    {option.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Contact Room */}
      <RevealSection id="connect" className="bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1920&q=80" 
            alt="Fjord Moon" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
          <Sparkles className="mx-auto mb-12 text-emerald-400/30" size={40} strokeWidth={0.5} />
          <h2 className="text-5xl font-extralight mb-10 tracking-tight italic">Let's create <br/>your experience.</h2>
          <a 
            href="mailto:hello@grannenlodge.com" 
            className="inline-block px-14 py-6 border border-white/20 hover:bg-white hover:text-black transition-all duration-700 tracking-[0.5em] uppercase text-[11px] font-bold"
          >
            Get in touch
          </a>
        </div>
        <div className="absolute bottom-12 w-full px-8 flex justify-between items-center text-[9px] tracking-[0.4em] uppercase text-white/20">
          <span>&copy; {new Date().getFullYear()} Grannen Lodge</span>
          <span>Norway</span>
        </div>
      </RevealSection>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInBlur {
          0% { opacity: 0; filter: blur(10px); transform: translateY(20px); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scaleX(0); }
          100% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .h-screen::-webkit-scrollbar { display: none; }
        .h-screen { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      ` }} />
    </div>
  );
};

export default GrannenLodge;