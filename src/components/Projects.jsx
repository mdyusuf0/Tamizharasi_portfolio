import React from 'react';
import { projects, socialLinks } from '../data/portfolioData';

// SVG Icons for clean responsive scaling
const BehanceIcon = () => (
  <svg className="w-5 h-5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.228 9c.549 0 .979.136 1.286.41.309.271.464.671.464 1.196 0 .348-.073.639-.22.87-.147.23-.377.406-.693.524.452.122.771.341.956.657.185.316.278.718.278 1.205 0 .58-.168 1.025-.506 1.336-.337.31-.839.466-1.503.466H3.687V9h4.541zm-.51 2.378c0-.203-.049-.354-.149-.452-.098-.097-.272-.146-.519-.146H5.483v1.223h2.008c.245 0 .416-.048.514-.144.1-.098.149-.258.149-.481zm.149 3.013c0-.236-.051-.409-.153-.518-.102-.107-.282-.162-.538-.162H5.483v1.442h1.693c.257 0 .436-.051.538-.153.104-.103.155-.273.155-.509zm11.385-2.029c0-.663-.153-1.189-.459-1.579-.307-.39-.773-.585-1.398-.585-.609 0-1.07.195-1.387.585-.316.39-.475.918-.475 1.579h3.719zm-3.738.995c.019.57.166.994.442 1.272.277.279.673.418 1.188.418.694 0 1.203-.263 1.528-.787h1.637c-.244.757-.704 1.345-1.38 1.764-.676.418-1.5.627-2.473.627-1.22 0-2.167-.384-2.842-1.152-.676-.769-1.013-1.859-1.013-3.272 0-1.365.342-2.438 1.026-3.218.686-.782 1.636-1.173 2.85-1.173 1.187 0 2.112.378 2.775 1.134.664.756.996 1.838.996 3.245v.39h-5.969zm1.61-4.721h2.51v-.64h-2.51v.64z"/>
      </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, aosDelay }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`relative rounded-2xl p-[1px] group transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-gradient-to-br from-[#FA2A55]/50 via-white/10 to-rose-500/30 hover:from-[#FA2A55] hover:via-rose-500/30 hover:to-rose-500/60' 
        : 'bg-white/10 hover:bg-white/20'
    }`}
  >
    <div className={`rounded-2xl p-6 md:p-8 h-full backdrop-blur-md transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90' 
        : 'bg-[#111111]/90 group-hover:bg-[#111111]/80'
    }`}>
      {/* Badge */}
      {project.badge && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 mb-4">
          {project.badge}
        </span>
      )}

      {/* Number + Title */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-5xl font-black text-white/10 font-serif italic">{project.number}</span>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techTags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-rose-500/20 hover:border-rose-500/30 hover:text-rose-300 transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        {/* Behance Link */}
        {project.links.behance && (
          <a 
            href={project.links.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FA2A55] text-white text-sm font-semibold hover:bg-rose-600 hover:shadow-[0_0_20px_rgba(250,42,85,0.4)] transition-all duration-300 group/btn"
          >
            <BehanceIcon />
            View Behance Campaign
          </a>
        )}

        {/* Wix Portfolio Link */}
        {project.links.portfolio && (
          <a 
            href={project.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <ExternalLinkIcon />
            Independent Wix Portfolio
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="work" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Visual stories that <br className="hidden md:block" />make an impact
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A curated showcase of design campaigns, brand identities, editorial visual layouts, and motion graphics.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        {/* Behance CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <BehanceIcon />
            Explore Full Behance Portfolio
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
