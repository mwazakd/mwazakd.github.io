
import React from 'react';
import type { NewsItem } from '../types';
import Section from './Section';

const newsItems: NewsItem[] = [
    {
        date: 'Oct. 2025',
        content: 'Wrote sample personal statements and essays. Updated my resume.'
    },
    {
        date: 'Sep. 2025',
        content: "I've started building my personal website to showcase my journey in STEM education and AI research."
    },
    {
        date: 'Sep. 2025',
        content: 'Began preparing applications for graduate programs.'
    },
    {
        date: 'Aug. 2025',
        content: 'Graduated from University of Zimbabwe with a Mechatronics engineering degree (2.1).'
    },
];

const News: React.FC = () => {
  return (
    <Section id="news" title="Recent News">
      <div className="max-w-2xl mx-auto bg-slate-800/50 p-6 rounded-lg border-2 border-slate-700 shadow-lg">
        <h3 className="font-bold text-sm mb-6 text-red-500 tracking-widest">RECENT NEWS</h3>
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <li key={index} className="flex gap-4 pb-4 border-b border-slate-700 last:border-0">
              <span className="text-slate-500 font-mono text-xs whitespace-nowrap pt-1">{item.date}</span>
              <p className="text-slate-300 text-base">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default News;
