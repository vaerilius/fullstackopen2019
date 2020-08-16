import React from 'react';
import { CoursePart } from '../App';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
const Part: React.FC<{ courseParts: CoursePart }> = ({ courseParts }) => {
  switch (courseParts.name) {
    case 'Fundamentals':
      return (
        <p>
          {courseParts.name} {courseParts.exerciseCount}{' '}
          {courseParts.description}.{' '}
        </p>
      );
    case 'Using props to pass data':
      return (
        <p>
          {courseParts.name} {courseParts.exerciseCount}{' '}
          {courseParts.groupProjectCount}{' '}
        </p>
      );
    case 'Deeper type usage':
      return (
        <p>
          {courseParts.name} {courseParts.exerciseCount}{' '}
          {courseParts.description}.{' '}
          <a href={courseParts.exerciseSubmissionLink}>
            {courseParts.exerciseSubmissionLink}
          </a>{' '}
        </p>
      );
    default:
      return assertNever(courseParts);
  }
};

export default Part;
