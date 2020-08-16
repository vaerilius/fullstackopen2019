import React from 'react';
import Part from './part';
import { CoursePart } from '../App';

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map((c) => (
        <Part courseParts={c} key={c.name} />
      ))}
    </>
  );
};
export default Content;
