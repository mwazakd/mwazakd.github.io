
import React from 'react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
);

const CvIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full blur-2xl opacity-60 animate-subtle-bob"></div>
                <img
                    src="/assets/images/tutor5.jpg"
                    alt="Kudzaishe Mwaza"
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-700"
                />
            </div>
        </div>
        <div className="animate-slide-in-right" style={{ animationDelay: '300ms', opacity: 0 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Kudzaishe <span className="text-sky-400">Mwaza</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6">
            STEM Educator & Tech Enthusiast
          </h2>
          <p className="text-lg text-slate-400 mb-4 max-w-xl">
            I'm a tech enthusiast passionate about the intersection of education, robotics, and artificial intelligence. Currently, I teach STEM subjects to high school students, helping them build strong conceptual foundations and curiosity-driven thinking.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-xl">
            My journey in Mechatronics Engineering sparked a deep interest in how intelligent systems can solve real-world problems — from autonomous robots to AI-driven learning tools. I enjoy bridging complex technical ideas with accessible explanations that empower others to learn and create.
          </p>
          <div className="flex items-center space-x-6">
              <a href="mailto:mwazakd@gmail.com" aria-label="Email" className="group relative text-slate-400 hover:text-sky-400 transition-colors">
                  <EmailIcon className="w-8 h-8" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    Email
                  </span>
              </a>
              <a href="https://github.com/mwazakd" target="_blank" rel="noopener noreferrer" aria-label="Github profile" className="group relative text-slate-400 hover:text-sky-400 transition-colors">
                  <GithubIcon className="w-8 h-8" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    GitHub
                  </span>
              </a>
              <a href="https://www.linkedin.com/in/kudzaishe-mwaza-3630a42a2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="group relative text-slate-400 hover:text-sky-400 transition-colors">
                  <LinkedinIcon className="w-8 h-8" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    LinkedIn
                  </span>
              </a>
              <a
                href="/assets/mwazakd_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV"
                className="group relative text-slate-400 hover:text-sky-400 transition-colors"
              >
                <CvIcon className="w-8 h-8" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Resume
                </span>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
