// const express = require('express')
import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();
app.get('/bmi', (req, res) => {
	const { height, weight } = req.query;
	if (height !== undefined && weight !== undefined) {
		const bmi = calculateBmi(+height, +weight);
		return res.json({
			height,
			weight,
			bmi,
		});
	}
	return res.json({
		error: 'malformatted parameters',
	});
});
// app.get('/calculate', (req, res) => {
// 	const { value1, value2, op } = req.query

// 	// const result = calculator(value1, value2, op)
// 	// res.send(result)
// })

app.get('/ping', (_req, res) => {
	res.send('pong');
});
app.get('/hello', (_req, res) => {
	res.send('Hello Full Stack!');
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
