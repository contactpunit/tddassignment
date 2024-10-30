import { Calculator } from "../calculator"

describe('Calculator', () => {
    test('1. empty string return 0', () =>  {
        expect(Calculator("")).toBe(0)
    })

    test("2. return single number which is passed as string", () => {
        expect(Calculator("20")).toBe(20);
    });
})