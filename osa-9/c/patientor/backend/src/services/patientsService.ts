import patiensData from '../../data/patients.json'

import { Patient } from '../types';

const patients: Patient[] = patiensData as Patient[]

const getEntriesWithoutSnn = () : Omit<Patient, 'ssn'>[]=> {

  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,name, dateOfBirth, gender, occupation
  }));
};


export default {
  getEntriesWithoutSnn,
};