import { fibonacci } from "../helpers/fibonacci";

describe("the fibonacci sequence", () => {

    test("with a lenth of 0 is ", () => {
        expect(fibonacci(0)).toBe(" ");
    });
    test("with a lenth of 5 is ", () => {
        expect(fibonacci(5)).toBe("0, 1, 1, 2, 3");
    });
});