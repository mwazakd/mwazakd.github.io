
import React from 'react';
import type { Skill } from '../types';
import Section from './Section';

// SVG Icons as components
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
    </svg>
);
const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}><path fill="#007ACC" d="M0 0h128v128H0z"></path><path fill="#FFF" d="M23.1 91.3V36.7H38V80c0 4.5-.2 7.2-2.1 9.4-1.1 1.2-3.1 1.9-5.9 1.9h-7V91.3zm19.8-1.2c-1.6 1-3.9 1.4-6.3 1.4h-5.2V36.7h11.5c4.8 0 8.3.8 10.3 3.8 1.9 2.9 2.5 7.6 2.5 13.9v1.8c0 5.4-.5 9.7-2.3 12.8-2.3 3.8-5.8 5-10.5 5zm-1.6-32.9c0-2.5-.2-4.1-.7-5.1-.9-1.6-2.8-2-5.1-2h-3.8v14.1h3.8c2.1 0 3.8-.4 4.8-2.2.6-1 .9-2.7.9-4.8v-.1zM105.7 64.9c0 14.2-10.9 26.4-27.1 26.4-10.3 0-18.4-3.5-22.7-9.5l9.3-6.5c2.6 3.9 6.8 6.4 12.8 6.4 8.2 0 12.9-4.1 12.9-10.8 0-4.6-2.5-7.9-10.3-10.5l-5.4-1.8c-7.3-2.5-12.2-6.5-12.2-14.4 0-7.8 6.1-13.8 16.3-13.8 7.3 0 12.8 2.7 16.5 7.6l-8.6 6.2c-2.1-2.9-5.1-4.6-8.7-4.6-4.5 0-7.1 2.3-7.1 5.8 0 3.8 2.3 5.9 8.6 8.1l5.4 1.8c9.5 3.2 13.6 7.6 13.6 16.4z"></path></svg>
);
const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4.5 21H12M4.5 21L4.5 3M4.5 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 3V12C15 13.8856 15 14.8284 15.5858 15.4142C16.1716 16 17.1144 16 19 16V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 21H12M20 21V3H12M20 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 119 119" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M59.5 119C26.69 119 0 92.31 0 59.5S26.69 0 59.5 0s59.5 26.69 59.5 59.5-26.69 59.5-59.5 59.5zM36.32 40.2c5.38-5.38 12.9-3.9 17.15 2.13 4.25-6.03 11.77-7.5 17.15-2.13 8.35 8.35 1.57 23.36-12.53 32.7-14.1 9.32-29.1-1.58-21.77-12.7z" fill="#38bdf8"></path></svg>
);
const NodeJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.41 1.619a.952.952 0 00-.73-.01c-3.11 1.15-5.22 2.6-6.1 3.5-1.07 1.1-.96 2.37.07 3.5l-1.9 3.28c-.28.48.06.96.6.96h3.8c.54 0 .88-.48.6-1.05l-1.89-3.2c1.3-1.15 3.12-2.1 5.37-2.73a.952.952 0 00.74-.95v-6.2zM9.46 12.9c.28-.48-.06-.96-.6-.96H5.06c-.54 0-.88.48-.6 1.05l3.52 6.07c.28.48.92.48 1.2 0l3.78-6.16z" fill="#339933"></path></svg>
);
const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
);

const skills: Skill[] = [
  { name: 'React', Icon: ReactIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'JavaScript (ES6+)', Icon: JavaScriptIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Node.js', Icon: NodeJsIcon },
  { name: 'Figma', Icon: FigmaIcon },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg shadow-md hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110">
              <skill.Icon className="w-16 h-16 mb-3 text-sky-400" />
              <h4 className="font-semibold text-slate-200 text-sm">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
