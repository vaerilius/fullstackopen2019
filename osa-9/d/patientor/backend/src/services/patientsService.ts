import patiensData from '../../data/patients.json';
import { v4 as uuidv4 } from 'uuid';

import { Patient, NewPatient } from '../types';

const patients: Patient[] = patiensData as Patient[];

const getEntriesWithoutSnn = (): Omit<Patient, 'ssn'>[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};

const addPatient = (newPatient: NewPatient): Patient => {
  const patient = { ...newPatient, id: uuidv4(), entries: [] };

  patients.push(patient);
  return patient;
};
const getById = (id: string): Patient | undefined => {
  let patient = <Patient>patiensData.find((p) => p.id == id);
  patient.entries = [];
  return patient;
};

export default {
  addPatient,
  getById,
  getEntriesWithoutSnn,
};