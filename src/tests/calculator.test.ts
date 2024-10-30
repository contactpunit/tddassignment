import { Calculator } from "../calculator"

describe('Calculator', () => {
    test('empty string return 0', () =>  {
        expect(Calculator("")).toBe(0)
    })
})