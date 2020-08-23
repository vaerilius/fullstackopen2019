import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Field, Formik, Form } from 'formik';

import { HospitalEntry } from '../../../backend/src/types';
import {
  DiagnosisSelection,
  SelectField,
  TextField,
  TypeOptions,
} from '../AddPatientModal/FormField';
import { useStateValue } from '../state';

export type EntryFormValues = Omit<HospitalEntry, 'id'>;

interface Props {
  onSubmit: (values: EntryFormValues) => void;
  onCancel: () => void;
}

const Options: TypeOptions[] = [{ value: 'Hospital', label: 'Hosbital' }];

export const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [{ diagnoses }] = useStateValue();
  return (
    <Formik
      initialValues={{
        description: '',
        date: new Date().toLocaleDateString('sv'),
        diagnosisCodes: [],
        specialist: '',
        type: 'Hospital',
        discharge: { date: '2020-11-11', criteria: '' },
      }}
      onSubmit={onSubmit}
      validate={(values) => {
        const requiredError = 'Field is required';
        const errors: { [field: string]: string } = {};
        if (!values.type) {
          errors.type = requiredError;
        }
        if (!values.specialist) {
          errors.specialist = requiredError;
        }
        return errors;
      }}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui">
            <SelectField label="type" name="type" options={Options} />

            <Field
              label="description"
              placeholder="description"
              name="description"
              component={TextField}
            />
            <Field
              label="date"
              placeholder="YYYY-MM-DD"
              name="date"
              required
              component={TextField}
            />
            <Field
              label="specialist"
              placeholder="specialist"
              name="specialist"
              component={TextField}
            />
            <Field
              label="Date"
              placeholder="YYYY-MM-DD"
              name="discharge.date"
              component={TextField}
            />
            <Field
              label="Criteria"
              placeholder="Criteria"
              name="discharge.criteria"
              component={TextField}
            />
            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnoses)}
            />
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;
