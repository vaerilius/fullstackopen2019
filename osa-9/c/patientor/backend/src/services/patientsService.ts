import patiensData from '../../data/patients.json';
import { v4 as uuidv4 } from 'uuid';

import { Patient, NewPatient } from '../types';

const patients: Patient[] = patiensData as Patient[];

const getEntriesWithoutSnn = (): Omit<Patient, 'ssn'>[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (newPatient: NewPatient): Patient => {
  const patient = { ...newPatient, id: uuidv4() };

  patients.push(patient);
  return patient;
};

export default {
  getEntriesWithoutSnn,
  addPatient,
};
