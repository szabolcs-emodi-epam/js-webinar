const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    it('calc(3).v', () => {
        expect(calc(3).v).equal(3);
    } )

    it('calc(3).add(5).v', () => {
        expect(calc(3).add(5).v).equal(8);
    } )

    it('calc(3).minus(2).v', () => {
        expect(calc(3).minus(2).v).equal(1);
    } )

    it('calc(4).sqrt().v', () => {
        expect(calc(4).sqrt().v).equal(2);
    } )

    it('calc(3).times(10).v', () => {
        expect(calc(3).times(10).v).equal(30);
    } )

    it('calc(10).divide(2).v', () => {
        expect(calc(10).divide(2).v).equal(5);
    } )

    it('calc(10).modulo(5).v', () => {
        expect(calc(10).modulo(5).v).equal(0);
    } )

    it(' calc(5).divide(0)', () => {
        expect(() => calc(5).divide(0)).to.throw('Division by 0 is not possible!');
    } )

    it('calc(-3).sqrt()', () => {
        expect(() => calc(-3).sqrt()).to.throw('Square root of negative value cannot be determined!');
    } )

    it('calc(3).add(4).minus(3).times(6).v', () => {
        expect(calc(3).add(4).minus(3).times(6).v).equal(24);
    } )
});