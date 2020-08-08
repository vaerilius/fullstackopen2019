import diagnosesData from '../../data/diagnoses.json'

import { Diagnose } from '../types';

const diagnoses: Diagnose[] = diagnosesData as Diagnose[]

const getEntries = () : Diagnose[]=> {
  console.log(diagnoses);
  return diagnoses;
};


export default {
  getEntries,
};