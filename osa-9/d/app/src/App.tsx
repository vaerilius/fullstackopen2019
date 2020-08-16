import React from 'react';
import Content from './components/content';
import Total from './components/total';
import Header from './components/header';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartWithDescription {
  name: 'Fundamentals';
}

interface CoursePartTwo extends CoursePartBase {
  name: 'Using props to pass data';
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartWithDescription {
  name: 'Deeper type usage';
  exerciseSubmissionLink: string;
}

interface CoursePartWithDescription extends CoursePartBase {
  description: string;
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;

const App: React.FC = () => {
  // this is the new coursePart variable
  const courseName = 'Half Stack application development';
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is an awesome course part',
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
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
