import React from 'react';
import Part, { PartProps } from './part';
interface ContentProps {
  courseParts: PartProps[];
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <>
      <Part
        name={props.courseParts[0].name}
        exerciseCount={props.courseParts[0].exerciseCount}
      />
      <Part
        name={props.courseParts[1].name}
        exerciseCount={props.courseParts[1].exerciseCount}
      />
      <Part
        name={props.courseParts[2].name}
        exerciseCount={props.courseParts[2].exerciseCount}
      />
    </>
  );
};

export default Content;
