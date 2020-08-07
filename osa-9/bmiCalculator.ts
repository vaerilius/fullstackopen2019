export const calculateBmi = (height: number, weight: number): string => {
	try {
		const result: number = +Math.floor(
			Number(weight) / (Math.pow(height, 2) / 10000)
		).toFixed(2);

		// console.log(result);
		if (result < 18.5) {
			return 'Underweight	';
		} else if (result <= 25 || result <= 18.5) {
			return 'Normal (healthy weight)';
		} else if (result > 25) {
			return 'Overweight';
		} else {
			return 'no match';
		}
	} catch (error) {
		throw new Error('something went wrong');
	}
};
interface Values {
	value1: number;
	value2: number;
}
const parseArguments = (args: Array<string>): Values => {
	if (args.length < 4) throw new Error('Not enough arguments');
	if (args.length > 4) throw new Error('Too many arguments');

	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
		return {
			value1: Number(args[2]),
			value2: Number(args[3]),
		};
	} else {
		throw new Error('Provided values were not numbers!');
	}
};

try {
	const { value1, value2 } = parseArguments(process.argv);
	console.log(calculateBmi(value1, value2));
} catch (e) {
	console.log('Error, something bad happened, message: ', e);
}
