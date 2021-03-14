import * as arrayList from '../challenge/array'

describe('Array list', () => {

    describe('build array function', () => {
        it('should build a new object', () => {
            const builtArray = arrayList.buildArray();
            expect(typeof builtArray === 'object').toBe(true);
        });

        it('should build a new array with length', () => {
            const builtArray = arrayList.buildArray();
            expect(builtArray.length).toEqual(1000);
        });
    });
});