import React from 'react';

export interface PartProps {
  name: string;
  exerciseCount: number;
}

const Part: React.FC<PartProps> = (props) => {
  return (
    <p>
      {' '}
      {props.name} {props.exerciseCount}{' '}
    </p>
  );
};

export default Part;
