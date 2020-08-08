import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import diagnoseRouter from './src/routes/diagnose';
import patientRouter from './src/routes/patient';


const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});
app.use('/api/diagnoses', diagnoseRouter)
app.use('/api/patients', patientRouter)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});