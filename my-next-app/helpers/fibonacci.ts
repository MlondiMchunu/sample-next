import { sum } from "./sum";

export const fibonacci = (length: number): string => {
    const sequence: number[] = [];
    for (let i = 0; i < length; i++) {
        if (i < 2) {
            sequence.push(sum([sequence[i - 1], sequence[i - 2]]));
        }
    }
    return sequence.join(", ");
};

