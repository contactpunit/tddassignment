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
            let delimiter: string | undefined
            const matches = stringInput.match(/(?<=\/\/)(.)/);
            if (matches && matches.length) {
                delimiter = matches[1]
                if (delimiter) {
                    const stringToParse = stringInput.slice(3)
                    const regex = new RegExp(`[${delimiter},\n]`)
                    const parts = stringToParse.split(regex)
                    const numbers = (parts.map(part => +part)).filter(num => !isNaN(num))
                    const negNumbers = numbers.filter(num => num < 0)
                    // Throw exception if there are -ve numbers in the input
                    if (negNumbers.length) throw new Error(`negative numbers not allowed ${negNumbers.join(',')}`)

                    return numbers.reduce((accum, currValue) => {
                        return accum + currValue
                    })
                } else {
                    return 0
                }
            } else return 0
        }
    }
}
