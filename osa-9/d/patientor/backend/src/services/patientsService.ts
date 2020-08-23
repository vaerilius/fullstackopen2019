import patiensData from '../../data/patients';
import { v4 as uuidv4 } from 'uuid';

import { Patient, NewPatient, Entry, NewEntry } from '../types';

const patients: Patient[] = patiensData as Patient[];

const getEntriesWithoutSnn = (): Omit<Patient, 'ssn'>[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries: entries,
    })
  );
};

const addPatient = (newPatient: NewPatient): Patient => {
  const patient = { ...newPatient, id: uuidv4(), entries: [] };

  patients.push(patient);
  return patient;
};
const getById = (id: string): Patient => {
  const p = <Patient>patiensData.find((p) => p.id == id);
  if (!p) {
    throw new Error('not found');
  }
  return p;
};

const addEntry = (entry: NewEntry, id: string): Patient => {
  const patient = getById(id);

  patient.entries.push(<Entry>{ ...entry, id: uuidv4() });
  return patient;
};

export default {
  addPatient,
  addEntry,
  getById,
  getEntriesWithoutSnn,
};
