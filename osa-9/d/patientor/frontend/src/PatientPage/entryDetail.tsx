import React from 'react';
import { Icon, ListItem } from 'semantic-ui-react';
import {
  Entry,
  OccupationalHealthcareEntry,
  HospitalEntry,
  HealthCheckRating,
  HealthCheckEntry,
} from '../../../backend/src/types';

export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <ListItem>
      <hr />
      <h3>
        {entry.date} <Icon name={'doctor'} />
      </h3>
      <p>{entry.description}</p>
      <p>{entry.discharge.criteria}</p>
      <Icon name="heart" />
    </ListItem>
  );
};
const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <ListItem>
      <hr />
      <h3>
        {entry.date} <Icon name="hospital" />
      </h3>
      <h4>
        {entry.sickLeave && entry.sickLeave.startDate + '-'}
        {entry.sickLeave && entry.sickLeave.endDate}
      </h4>
      <p>{entry.description}</p>
    </ListItem>
  );
};
const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  return (
    <ListItem>
      <hr />
      <h3>
        {entry.date} <Icon name={'heartbeat'} />
      </h3>
      <p>{entry.description}</p>
      <p>{entry.healthCheckRating}</p>
      <Icon name="heart" />
    </ListItem>
  );
};

const EntryDetail: React.FC<{ entry: Entry }> = ({ entry }) => {
  console.log('before', entry);

  switch (entry.type) {
    case 'Hospital':
      return <Hospital entry={entry} />;
    case 'HealthCheck':
      return <HealthCheck entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcare entry={entry} />;

    default:
      return assertNever(entry);
  }
};

export default EntryDetail;
