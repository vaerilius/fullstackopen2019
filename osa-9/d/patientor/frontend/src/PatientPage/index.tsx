import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Icon, Button } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { useStateValue, updatePatient } from '../state';
import { apiBaseUrl } from '../constants';
import { Patient, Gender } from '../types';
import EntryDetail from './entryDetail';
import AddEntryModal from '../AddEntryModal';
import { EntryFormValues } from '../AddEntryModal/AddEntryForm';
import { Entry, NewEntry } from '../../../backend/src/types';

const PatientPage: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  const submitNewEntry = async (values: NewEntry) => {
    try {
      const { data } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${patient.id}/entries`,
        values
      );
      dispatch(updatePatient(data));
      closeModal();
    } catch (e) {
      console.error(e);
    }
  };

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
      {patient.entries.map((e, i) => (
        <EntryDetail entry={e} key={i} />
      ))}
      <Container textAlign="left">
        <AddEntryModal
          modalOpen={modalOpen}
          onSubmit={submitNewEntry}
          onClose={closeModal}
        />
        <Button onClick={() => openModal()}>Add new entry</Button>
      </Container>
    </div>
  );
};

export default PatientPage;
