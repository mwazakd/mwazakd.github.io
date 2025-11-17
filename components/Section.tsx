
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-100">{title}</h2>
      <div className="w-24 h-1 bg-sky-500 mx-auto mb-12"></div>
      {children}
    </section>
  );
};

export default Section;
