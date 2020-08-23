import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Icon } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { useStateValue, updatePatient } from '../state';
import { apiBaseUrl } from '../constants';
import { Patient, Gender } from '../types';

const PatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [state, dispatch] = useStateValue();
  let patient = state.patients[id];

  const getPatient = async () => {
    const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
    dispatch(updatePatient(data));
    patient = { ...data };
  };
  useEffect(() => {
    if (patient && !patient.ssn) {
      getPatient();
    }
  }, [id]);

  if (!patient) {
    getPatient();
    return <p>fething data</p>;
  }

  const chooseIcon = (gender: Gender) => {
    switch (gender) {
      case 'female':
        return <Icon name="venus"></Icon>;
      case 'male':
        return <Icon name="mars"></Icon>;
      case 'other':
        return <Icon name="genderless"></Icon>;
    }
  };

  console.log(patient);

  return (
    <div className="App">
      <Container textAlign="left">
        <h3>
          {patient.name} {chooseIcon(patient.gender)}
        </h3>
        <p>ssn: {patient.ssn} </p>
        <p>occupation: {patient.occupation} </p>
        <p>Birth date: {patient.dateOfBirth}</p>
      </Container>
      <hr />
      {patient.entries.map((p, i) => (
        <Container textAlign="left" key={i}>
          <h4>Entries</h4>
          <p> {p.description} </p>
          <ul>
            {p.diagnosisCodes &&
              p.diagnosisCodes.map((d, i) => <li key={i}>{d.toString()}</li>)}
          </ul>
        </Container>
      ))}
    </div>
  );
};

export default PatientPage;
