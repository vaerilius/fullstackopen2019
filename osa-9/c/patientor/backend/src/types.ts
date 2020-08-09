export type Diagnose = {
  code: string;
  name: string;
  latin?: string;
};
export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
};
export type NewPatient = {
  name: string;
  ssn: string;
  dateOfBirth: string;
  occupation: string;
  gender: Gender;
};
export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}
