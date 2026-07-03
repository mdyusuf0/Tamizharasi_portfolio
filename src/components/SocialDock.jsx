import React from 'react';
import { socialLinks } from '../data/portfolioData';

const BehanceIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.228 9c.549 0 .979.136 1.286.41.309.271.464.671.464 1.196 0 .348-.073.639-.22.87-.147.23-.377.406-.693.524.452.122.771.341.956.657.185.316.278.718.278 1.205 0 .58-.168 1.025-.506 1.336-.337.31-.839.466-1.503.466H3.687V9h4.541zm-.51 2.378c0-.203-.049-.354-.149-.452-.098-.097-.272-.146-.519-.146H5.483v1.223h2.008c.245 0 .416-.048.514-.144.1-.098.149-.258.149-.481zm.149 3.013c0-.236-.051-.409-.153-.518-.102-.107-.282-.162-.538-.162H5.483v1.442h1.693c.257 0 .436-.051.538-.153.104-.103.155-.273.155-.509zm11.385-2.029c0-.663-.153-1.189-.459-1.579-.307-.39-.773-.585-1.398-.585-.609 0-1.07.195-1.387.585-.316.39-.475.918-.475 1.579h3.719zm-3.738.995c.019.57.166.994.442 1.272.277.279.673.418 1.188.418.694 0 1.203-.263 1.528-.787h1.637c-.244.757-.704 1.345-1.38 1.764-.676.418-1.5.627-2.473.627-1.22 0-2.167-.384-2.842-1.152-.676-.769-1.013-1.859-1.013-3.272 0-1.365.342-2.438 1.026-3.218.686-.782 1.636-1.173 2.85-1.173 1.187 0 2.112.378 2.775 1.134.664.756.996 1.838.996 3.245v.39h-5.969zm1.61-4.721h2.51v-.64h-2.51v.64z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SocialDock = () => {
  return (
    <>
      {/* Desktop Version: Fixed vertical bar on the left */}
      <div 
        data-aos="fade-right"
        data-aos-delay="600"
        className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-[#0f0d13]/60 backdrop-blur-md border border-white/10 p-4 rounded-full shadow-[0_8px_32px_rgba(250,42,85,0.15)] items-center"
      >
        <a 
          href={socialLinks.behance} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-[#FA2A55] transition-all duration-300 transform hover:scale-125"
          aria-label="Behance"
        >
          <BehanceIcon />
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-[#FA2A55] transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a 
          href={socialLinks.portfolio} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-[#FA2A55] transition-all duration-300 transform hover:scale-125"
          aria-label="Portfolio"
        >
          <ExternalLinkIcon />
        </a>
        <a 
          href={`mailto:${socialLinks.email}`} 
          className="text-white/60 hover:text-[#FA2A55] transition-all duration-300 transform hover:scale-125"
          aria-label="Email"
        >
          <EmailIcon />
        </a>
      </div>

      {/* Mobile/Tablet Version: Floating bottom dock */}
      <div 
        className="flex lg:hidden flex-row justify-around items-center gap-6 fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-[#0f0d13]/90 backdrop-blur-lg border border-white/15 px-8 py-3.5 rounded-full shadow-[0_8px_32px_rgba(250,42,85,0.25)] w-[85%] max-w-[320px] transition-all duration-300"
      >
        <a 
          href={socialLinks.behance} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/70 hover:text-[#FA2A55] transition-all active:scale-95 p-1"
          aria-label="Behance"
        >
          <BehanceIcon />
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/70 hover:text-[#FA2A55] transition-all active:scale-95 p-1"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a 
          href={socialLinks.portfolio} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/70 hover:text-[#FA2A55] transition-all active:scale-95 p-1"
          aria-label="Portfolio"
        >
          <ExternalLinkIcon />
        </a>
        <a 
          href={`mailto:${socialLinks.email}`} 
          className="text-white/70 hover:text-[#FA2A55] transition-all active:scale-95 p-1"
          aria-label="Email"
        >
          <EmailIcon />
        </a>
      </div>
    </>
  );
};

export default SocialDock;
