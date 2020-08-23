import { State } from './state';
import { Patient } from '../types';
import { Entry } from '../../../backend/src/types';

export type Action =
  | {
      type: 'SET_PATIENT_LIST';
      payload: Patient[];
    }
  | {
      type: 'ADD_PATIENT';
      payload: Patient;
    }
  | {
      type: 'UPDATE_PATIENT';
      payload: Patient;
    }
  | {
      type: 'ADD_ENTRY';
      payload: Entry;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PATIENT_LIST':
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case 'ADD_PATIENT':
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case 'UPDATE_PATIENT':
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export const setPatientList = (patientListFromApi: Patient[]): Action => {
  return { type: 'SET_PATIENT_LIST', payload: patientListFromApi };
};
export const addPatient = (payload: Patient): Action => {
  return {
    type: 'ADD_PATIENT',
    payload,
  };
};
export const updatePatient = (payload: Patient): Action => {
  return { type: 'UPDATE_PATIENT', payload };
};
