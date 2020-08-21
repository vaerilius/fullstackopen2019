import express from 'express';
import patientService from '../services/patientsService';
import { toNewPatientEntry } from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log(_req.body);
  res.send(patientService.getEntriesWithoutSnn());
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body);

    const addedEntry = patientService.addPatient(newPatient);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.send(patientService.getById(req.params.id));
  } catch (e) {
    console.log(e);
  }
});
export default router;
