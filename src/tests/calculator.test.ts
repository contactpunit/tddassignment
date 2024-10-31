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

    test("5. allow newline as a delimiter", () => {
        expect(calculator("20,30\n50")).toBe(100);
    });

    test("6. allow newline as a delimiter with NaN characters", () => {
        expect(calculator("20,30\nabcd,50")).toBe(100);
    });

    test("7. -ve numbers should throw an exception", () => {
        expect(() => { calculator("20,30,-50") }).toThrow('negative numbers not allowed -50')
    });

    test(`8. handle change in delimitter using "//;" with input "1;2"`, () => {
        expect(calculator("//;\n1;2")).toBe(3)
    });

    test(`9. handle change in delimitter using "//;" with input "1;2"`, () => {
        expect(calculator("//;\n1;2,45;766")).toBe(814)
    });
})