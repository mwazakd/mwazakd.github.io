
import React from 'react';
import Section from './Section';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Languages',
    skills: ['Python', 'C++'],
  },
  {
    title: 'Machine Learning & Data Science',
    skills: [
      'Data Preprocessing',
      'Model Training & Evaluation',
      'Anomaly Detection',
      'Remote Sensing Analysis',
    ],
  },
  {
    title: 'Cloud & Platforms',
    skills: ['Google Earth Engine', 'AWS DeepRacer', 'Google Colab'],
  },
  {
    title: 'Development Tools',
    skills: ['Jupyter Notebook', 'VS Code', 'Cursor', 'Git/GitHub'],
  },
  {
    title: 'Technical Skills',
    skills: [
      'Web Technologies',
      'API Integration',
      'Automation Scripting',
      'Cloud-based Data Pipelines',
    ],
  },
  {
    title: 'Operating Systems',
    skills: ['Windows', 'Linux (Ubuntu)'],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-700 text-slate-200 text-sm rounded-md hover:bg-sky-500 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
