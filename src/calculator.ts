import { CalcInput } from "./lib/types";

export function calculator(stringInput: CalcInput) {
    if (!stringInput) return 0
    else {
        if (!stringInput.startsWith('//')) {
            const parts = stringInput.split(/[\n,]/)
            const numbers = (parts.map(part => +part)).filter(num => !isNaN(num))
            const negNumbers = numbers.filter(num => num < 0)
            // Throw exception if there are -ve numbers in the input
            if (negNumbers.length) throw new Error(`negative numbers not allowed ${negNumbers.join(',')}`)

            return numbers.reduce((accum, currValue) => {
                return accum + currValue
            })
        } else {
            //
        }
    }
}
