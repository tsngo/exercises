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
