import { sum, sumSmallNumbers } from "../../../tdd/src/modules/sum";

describe('sumSmallNumbers', () => {
    it('should return 2 when 1 + 1', () => {
        expect(sumSmallNumbers(1, 1)).toBe(2);
    });

    it('should throw an error when a is negative', () => {
        expect(() => sumSmallNumbers(-1, 1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when b is negative', () => {
        expect(() => sumSmallNumbers(1, -1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when a is greater than 9', () => {
        expect(() => sumSmallNumbers(10, 1)).toThrow('Les nombres doivent être inférieurs à 10');
    });

    it('should throw an error when b is greater than 9', () => {
        expect(() => sumSmallNumbers(1, 10)).toThrow('Les nombres doivent être inférieurs à 10');
    });
});

describe('sum', () => {
    it('should return 20 when 10 + 10', () => {
        expect(sum(10, 10)).toBe(20);
    });

    it('should throw an error when a is negative', () => {
        expect(() => sum(-1, 1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when b is negative', () => {
        expect(() => sum(1, -1)).toThrow('Les nombres doivent être positifs');
    });

    it('should return 4 when 2 + 2', () => {
        expect(sum(2, 2)).toBe(4);
    });
});
