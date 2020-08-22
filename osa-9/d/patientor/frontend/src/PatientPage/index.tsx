import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Icon } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';
import { apiBaseUrl } from '../constants';
import { Patient, Gender } from '../types';

const PatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [state, dispatch] = useStateValue();
  let patient = state.patients[id];

  const updatePatient = async () => {
    const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
    dispatch({ type: 'UPDATE_PATIENT', payload: data });
    patient = { ...data };
  };
  useEffect(() => {
    if (patient && !patient.ssn) {
      updatePatient();
    }
  }, [id]);

  if (!patient) {
    updatePatient();
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
      <Container textAlign="center">
        <h2>
          {patient.name} {chooseIcon(patient.gender)}
        </h2>
        <p>ssn: {patient.ssn} </p>
        <p>occupation: {patient.occupation} </p>
        <p>Birth date: {patient.dateOfBirth}</p>
      </Container>
    </div>
  );
};

export default PatientPage;
