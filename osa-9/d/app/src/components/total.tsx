import React from 'react';
import { PartProps } from './part';
interface TotalProps {
  courseParts: PartProps[];
}

const Total: React.FC<TotalProps> = ({ courseParts }) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </>
  );
};

export default Total;
