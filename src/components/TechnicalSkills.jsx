import React from 'react';
import { technicalSkills } from '../data/portfolioData';

const SkillBadge = ({ name }) => (
  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-semibold tracking-wide hover:bg-[#FA2A55]/20 hover:border-[#FA2A55]/50 hover:text-rose-300 hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(250,42,85,0.3)] transition-all duration-300 cursor-default select-none">
    {name}
  </div>
);

const SkillCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-[#FA2A55]/30 hover:shadow-[0_20px_50px_rgba(250,42,85,0.08)] transition-all duration-500 relative overflow-hidden group"
  >
    {/* Decorative inner gradient glow */}
    <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#FA2A55]/10 rounded-full blur-2xl group-hover:bg-[#FA2A55]/20 transition-colors duration-500" />
    
    <h3 className="text-white text-xl font-black tracking-tight mb-6 pb-3 border-b border-white/10 uppercase">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <SkillBadge key={skill} name={skill} />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="expertise" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FA2A55]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FA2A55]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Professional Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Toolset & Expertise
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A structured look at my creative workstation software, motion suites, data utilities, and collaboration tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute top-32 right-12 text-white/5 opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default TechnicalSkills;
