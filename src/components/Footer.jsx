import React from 'react';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const BehanceIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.228 9c.549 0 .979.136 1.286.41.309.271.464.671.464 1.196 0 .348-.073.639-.22.87-.147.23-.377.406-.693.524.452.122.771.341.956.657.185.316.278.718.278 1.205 0 .58-.168 1.025-.506 1.336-.337.31-.839.466-1.503.466H3.687V9h4.541zm-.51 2.378c0-.203-.049-.354-.149-.452-.098-.097-.272-.146-.519-.146H5.483v1.223h2.008c.245 0 .416-.048.514-.144.1-.098.149-.258.149-.481zm.149 3.013c0-.236-.051-.409-.153-.518-.102-.107-.282-.162-.538-.162H5.483v1.442h1.693c.257 0 .436-.051.538-.153.104-.103.155-.273.155-.509zm11.385-2.029c0-.663-.153-1.189-.459-1.579-.307-.39-.773-.585-1.398-.585-.609 0-1.07.195-1.387.585-.316.39-.475.918-.475 1.579h3.719zm-3.738.995c.019.57.166.994.442 1.272.277.279.673.418 1.188.418.694 0 1.203-.263 1.528-.787h1.637c-.244.757-.704 1.345-1.38 1.764-.676.418-1.5.627-2.473.627-1.22 0-2.167-.384-2.842-1.152-.676-.769-1.013-1.859-1.013-3.272 0-1.365.342-2.438 1.026-3.218.686-.782 1.636-1.173 2.85-1.173 1.187 0 2.112.378 2.775 1.134.664.756.996 1.838.996 3.245v.39h-5.969zm1.61-4.721h2.51v-.64h-2.51v.64z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          {footerContent.taglines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>{footerContent.credential}</p>
          <a href="#work" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Selected Work</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for campaigns & design projects</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[14vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            {footerContent.copyright}
          </p>
        </div>
        
        <div className="flex flex-col gap-3 md:items-center font-mono">
          <a href={`mailto:${personalInfo.emails.primary}`} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            {personalInfo.emails.primary}
          </a>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            {/* Behance */}
            <a 
              href={socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="Behance"
            >
              <BehanceIcon />
            </a>
            {/* LinkedIn */}
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            {/* Wix Portfolio */}
            <a 
              href={socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="Portfolio"
            >
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a 
            href={socialLinks.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold"
          >
            Explore My Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
