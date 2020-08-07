interface Results_of_working_hours {
	periodLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

interface Rating_results {
	rating: number;
	ratingDescription: RatingDescription;
}
type RatingDescription = 'bad' | 'not too bad but could be better' | 'better';

const reducer = (accumulator: number, currentValue: number) =>
	accumulator + currentValue;

const rate = (avg: number, target: number): Rating_results => {
	if (avg > target) {
		return {
			rating: 3,
			ratingDescription: 'better',
		};
	} else if (avg < target && avg > 1.5) {
		return {
			rating: 2,
			ratingDescription: 'not too bad but could be better',
		};
	}
	return {
		rating: 1,
		ratingDescription: 'bad',
	};
};

const exercise_hours = [3, 0, 2, 4.5, 0, 3, 1];

export const calculateExercises = (
	args: Array<number>,
	target: number
): Results_of_working_hours => {
	console.log(args);

	const sum = args.reduce(reducer);

	const average = +sum / args.length;

	const rating_results = rate(average, target);
	const rating = rating_results.rating;
	const ratingDescription = rating_results.ratingDescription;

	return {
		periodLength: args.length,
		trainingDays: args.filter((i) => (i > 0 ? 1 : 0)).length,
		success: target > average ? false : true,
		rating,
		ratingDescription,
		target,
		average,
	};
};

console.log(calculateExercises(exercise_hours, 2));
