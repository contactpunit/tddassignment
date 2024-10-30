import { CalcInput } from "./lib/types";

export function calculator(stringInput: CalcInput) {
    if (!stringInput) return 0
    else {
        if (!stringInput.startsWith('//')) {
            const parts = stringInput.split(',')
            const numbers = (parts.map(part => +part)).filter(num => !isNaN(num))
            return numbers.reduce((accum, currValue) => {
                return accum + currValue
            })
        } else {
            //
        }
    }
}
