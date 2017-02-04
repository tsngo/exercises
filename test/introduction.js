const introduction = require('../lib/introduction');
const expect = require('chai').expect;

describe('squareRoot', () => {
    it('should calculate the square root and return the result', () => {
        expect(introduction.squareRoot(100)).to.be.equal(Math.sqrt(100));
        expect(introduction.squareRoot(25)).to.be.equal(Math.sqrt(25));
        expect(introduction.squareRoot(1024)).to.be.equal(Math.sqrt(1024));
    });
});

describe('piecewise', () => {
    it('should return x + 1 where x < 5', () => {
        expect(introduction.piecewise(-10)).to.be.equal(-10 + 1);
        expect(introduction.piecewise(4)).to.be.equal(4 + 1);
    });

    it('should return x * 5 where x = 5', () => {
        expect(introduction.piecewise(5)).to.be.equal(5 * 5);
    });

    it('should return x * 100 where x > 5', () => {
        expect(introduction.piecewise(6)).to.be.equal(6 * 100);
        expect(introduction.piecewise(16)).to.be.equal(16 * 100);
    });
});

describe('floor', () => {
    it('should return integer number given integer', () => {
        expect(introduction.floor(10)).to.be.equal(10);
        expect(introduction.floor(4)).to.be.equal(4);
    });

    it('should return integer number rounded down given float', () => {
        expect(introduction.floor(1.6)).to.be.equal(1);
        expect(introduction.floor(2.8)).to.be.equal(2);
    });
});

describe('findRange', () => {
    it('should return the difference between max and min array value', () => {
        let array = [1, 2, 3, 4, 5, 6];
        expect(introduction.findRange(array)).to.be.equal(5);
    });

    it('should return the difference between max and min array value using different method', () => {
        let array = [45, 23, 45, 34, 556, 346];
        let max = Math.max.apply(null, array); // call Math.max with each values in array as parameter
        let min = Math.min.apply(null, array);
        expect(introduction.findRange(array)).to.be.equal(max - min);
    });

    it('should return the difference between max and min array value using ES6', () => {
        let array = [834, 243, 435, 324, 256, 346];
        let max = Math.max(...array); // call Math.max.apply using ES6 syntax spread operator (...)
        let min = Math.min(...array);
        expect(introduction.findRange(array)).to.be.equal(max - min);
    });
});

describe('reverseArray', () => {
    it('should return the array with elements in reverse order of the parameter passed to function', () => {
        let array = [1, 2, 3, 4, 5, 6];
        expect(introduction.reverseArray(array)).to.be.deep.equal(array.reverse());
    });

    it('should return the array with elements in reverse order of the parameter passed to function', () => {
        let array = [834, 243, 435, 324, 256, 346];
        expect(introduction.reverseArray(array)).to.be.deep.equal(array.reverse());
    });
});

