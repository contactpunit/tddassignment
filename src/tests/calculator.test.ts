import { calculator } from "../calculator"

describe('Calculator', () => {
    test('1. empty string return 0', () =>  {
        expect(calculator("")).toBe(0)
    })

    test("2. return single number which is passed as string", () => {
        expect(calculator("20")).toBe(20);
    });

    test("3. return sum of multiple numbers passed", () => {
        expect(calculator("20,30,50")).toBe(100);
    });

    test("4. handle case of NAN", () => {
        expect(calculator("20,30,abcd,50")).toBe(100);
    });

    test("5. allow \n as a delimiter", () => {
        expect(calculator("20,30\n50")).toBe(100);
    });

    test("6. allow \n as a delimiter with NaN characters", () => {
        expect(calculator("20,30\nabcd,50")).toBe(100);
    });
})