import React, { createContext, useContext, useReducer } from 'react';
import { Patient } from '../types';

import { Action } from './reducer';
import { Diagnose } from '../../../backend/src/types';

export type State = {
  patients: { [id: string]: Patient };
  diagnoses: { [id: string]: Diagnose };
};

const initialState: State = {
  patients: {},
  diagnoses: {
    ['test']: { code: '12', name: 'testi', latin: 'deus' },
  },
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children,
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
