import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Total from './components/total';

const App: React.FC = () => {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
    },

    {
      name: 'Deeper type usage',
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header title={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};
export default App;
