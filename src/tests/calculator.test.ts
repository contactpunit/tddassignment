import { Calculator } from "../calculator"

describe('Calculator', () => {
    test('1. empty string return 0', () =>  {
        expect(Calculator("")).toBe(0)
    })
})