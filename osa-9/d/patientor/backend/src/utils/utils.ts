import { NewPatient, Gender } from '../types';

// yeah, this is a bad implementation,
//git add but the task didn't require types for these: ssn, name, and occupation
const parseString = (obj: any): string => {
  if (!obj || !isString(obj)) {
    throw new Error('Incorrect or missing string: ' + obj);
  }

  return obj;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};
const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const isGenger = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGenger(gender)) {
    throw new Error('Incorrect or missing Gender: ' + gender);
  }
  return gender;
};
export const toNewPatientEntry = (object: any): NewPatient => {
  return {
    name: parseString(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    ssn: parseString(object.ssn),
  };
};
