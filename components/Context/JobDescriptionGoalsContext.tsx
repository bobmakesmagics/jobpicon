import React, { createContext, useState } from 'react';

interface JobDescriptionGoalsContext {
  jobDSettings: any;
  setJobDSettings: (value: any) => void;
}

export const JobDescriptionGoalsContext = createContext<Partial<JobDescriptionGoalsContext>>({
  jobDSettings: [],
  setJobDSettings: () => {},
});

function JobDescriptionGoalsProvider({ children }) {
  const [jobDSettings, setJobDSettings] = useState([
    {
      id: 1,
      name: 'Audience',
      tags: [
        { name: 'General', selected: false },
        { name: 'Knowledgeable', selected: true },
        { name: 'Expert', selected: false },
      ],
      info: 'Knowledgeable (default): Requires focus to read and understand',
    },
    {
      id: 2,
      name: 'Formality',
      tags: [
        { name: 'Informal', selected: false },
        { name: 'Neutral', selected: true },
        { name: 'Formal', selected: false },
      ],
      info: 'Neutral (default): Restricts slang but allows standard casual expressions.',
    },
    {
      id: 3,
      name: 'Domain',
      tags: [
        { name: 'Academic', selected: false },
        { name: 'Business', selected: false },
        { name: 'General', selected: true },
        { name: 'Technical', selected: false },
        { name: 'Casual', selected: false },
        { name: 'Creative', selected: false },
      ],
      info: 'General (default): Applies most rules and conventions with medium strictness.',
    },
    {
      id: 4,
      name: 'Tone',
      tags: [
        { name: '😐 Neutral', selected: false },
        { name: '🤝 Confident', selected: false },
        { name: '🙂 Joyful', selected: false },
        { name: '✌️ Optimistic', selected: false },
        { name: '😇 Friendly', selected: false },
        { name: '⏰ Urgent', selected: false },
        { name: '📊 Analytical', selected: false },
        { name: '🙌 Respectful', selected: false },
      ],
      info: 'Experimental. How do you want to sound?',
    },
    {
      id: 5,
      name: 'Intent',
      tags: [
        { name: 'Inform', selected: false },
        { name: 'Describe', selected: false },
        { name: 'Convince', selected: false },
        { name: 'Tell A Story', selected: false },
      ],
      info: 'Experimental. What are you trying to do?',
    },
  ]);

  return (
    <JobDescriptionGoalsContext.Provider value={{ jobDSettings, setJobDSettings }}>
      {children}
    </JobDescriptionGoalsContext.Provider>
  );
}

export default JobDescriptionGoalsProvider;
