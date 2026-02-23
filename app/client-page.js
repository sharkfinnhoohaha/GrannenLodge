"use client";
import { useTina } from "tinacms/dist/react";
import { Leaf, Mail, Tent, Users, Sparkles, Compass } from "lucide-react";

export default function ClientPage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { page } = data;

  return (
    <div className="bg-[#F4F1EA] text-[#3E3A35] font-sans selection:bg-[#2C3E35] selection:text-white">
      
      {/* 1. Atmospheric Hero */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {page.heroImage && (
          <img 
            src={page.heroImage} 
            alt={page.heroTitle} 
            className="absolute inset-0 object-cover w-full h-full brightness-75"
          />
        )}
        <div className="absolute inset-0 bg-[#2C3E35]/20 mix-blend-multiply" />
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-white text-6xl md:text-8xl font-serif tracking-wide mb-6 drop-shadow-md">
            {page.heroTitle}
          </h1>
          <p className="text-[#F4F1EA] text-xl md:text-2xl max-w-2xl font-light tracking-wide">
            {page.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Simple, Grounded About Section */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <Leaf className="mx-auto text-[#8A9A86] mb-8" size={32} strokeWidth={1.5} />
        <h2 className="text-4xl font-serif text-[#2C3E35] mb-10">{page.aboutTitle}</h2>
        <p className="text-lg md:text-xl leading-relaxed text-[#5A554C] font-light whitespace-pre-line max-w-3xl mx-auto">
          {page.aboutText}
        </p>
      </section>

      {/* 3. The Options (Retreats) - Soft Grid */}
      <section className="bg-[#EBE7DF] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#2C3E35]">Ways to Gather</h2>
            <div className="h-px w-24 bg-[#8A9A86] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {page.retreats?.map((retreat, i) => (
              <div key={i} className="bg-[#F4F1EA] p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif text-[#2C3E35] mb-4">{retreat.title}</h3>
                <p className="text-[#5A554C] leading-relaxed font-light">{retreat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Experience Gallery */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {page.gallery?.map((imgUrl, i) => (
              <div key={i} className="overflow-hidden break-inside-avoid">
                <img 
                  src={imgUrl} 
                  alt={`Atmosphere ${i}`} 
                  className="w-full object-cover rounded-sm hover:opacity-90 transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Enthusiastic CTA Footer */}
      <footer className="bg-[#2C3E35] text-[#F4F1EA] py-32 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          <Mail className="mb-8 text-[#8A9A86]" size={40} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's plan your stay.</h2>
          <p className="text-lg text-[#A5B3A1] font-light mb-12">
            Whether you have a specific date in mind or just want to explore the possibilities, we would love to hear from you.
          </p>
          <a 
            href={`mailto:${page.contactEmail}`} 
            className="inline-block px-10 py-4 border border-[#8A9A86] text-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#2C3E35] transition-colors duration-300 uppercase tracking-widest text-sm"
          >
            Get in Touch
          </a>
        </div>
      </footer>
    </div>
  );
}