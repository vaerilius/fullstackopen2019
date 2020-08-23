import express from 'express';
import patientService from '../services/patientsService';
import { toNewPatientEntry } from '../utils/utils';
import { Patient } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
  const patiensts = patientService.getEntriesWithoutSnn();
  res.send(patiensts);
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
    let p = patientService.getById(req.params.id);
    console.log(p);
    res.send(p);
  } catch (e) {
    console.log(e);
  }
});
router.post('/:id/entries', async (req, res) => {
  try {
    const p: Patient = patientService.addEntry(req.body, req.params.id);
    res.send(p);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
export default router;
