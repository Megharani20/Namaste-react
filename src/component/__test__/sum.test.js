import { sum } from "../sum";

test ("sum function should calculate Sum of two number", () => {
    const result = sum (3, 4);

    expect(result).toBe(7);

});