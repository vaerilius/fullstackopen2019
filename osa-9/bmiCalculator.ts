

const calculateBmi = (height: number, weight: Number): String => {

    try {
        const result: Number = +Math.floor(Number(weight) / (Math.pow(height, 2) / 10000)).toFixed(2)

        // console.log(result);
        if (result < 18.5) {
            return 'Underweight	'
        } else if (result <= 25 || result <= 18.5) {
            return 'Normal (healthy weight)'
        }
        else if (result > 25) {
            return 'Overweight'
        }
        else {

            return 'no match'
        }

    } catch (error) {
        throw new Error('something went wrong');
    }


}

console.log(calculateBmi(10, 74))