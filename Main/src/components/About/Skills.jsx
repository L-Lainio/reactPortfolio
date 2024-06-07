import { useState } from 'react';

// To add Icon emblems? <FastForward />
// import FastForward from '../Icons/FastForward';

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'HTML', 'CSS', 'Other'],
  },
  {
    category: 'Technologies',
    items: ['React', 'Node.js', 'Express', 'Git', 'GitHub'],
  },
  {
    category: 'Tools',
    items: ['VS Code', 'Insomnia', 'AUTOCAD', 'Photoshop'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB'],
  }
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'],
  },
];

const otherSkills = () => {
  const icon = <FastForward />;
  return (
    <>
      {otherSkills.map((skills) => (
        <ul
          key={skills.category}
          className='tech-list leading-loose'
        >
          <h3 className="font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">
            {skills.category}
          </h3>
      {skills.items.map((item) => (
        <li key={item}>
          {icon}
          {item}
        </li>
      ))}
        </ul>
      ))}
      </>
  );
};

      export default { Skills };
