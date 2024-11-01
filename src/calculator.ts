import { CalcInput } from "./lib/types";


function calculateSum(stringInput: CalcInput, regex: RegExp): number {
    const parts = stringInput.split(regex)
    const numbers = (parts.map(part => +part)).filter(num => !isNaN(num))
    const negNumbers = numbers.filter(num => num < 0)
    // Throw exception if there are -ve numbers in the input
    if (negNumbers.length) throw new Error(`negative numbers not allowed ${negNumbers.join(',')}`)

    return numbers.reduce((accum, currValue) => {
        return accum + currValue
    })
}

export function calculator(stringInput: CalcInput) {
    if (!stringInput) return 0
    const regex = stringInput.startsWith('//')
        ? new RegExp(`[${stringInput[2]},\n]`)
        : /[\n,]/

    const stringToParse = stringInput.startsWith('//')
        ? stringInput.slice(3)
        : stringInput

        return calculateSum(stringToParse, regex)
}
