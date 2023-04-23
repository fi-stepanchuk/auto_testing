const {wikiAlgo} = require('../wiki_testing');

describe('Google Testing', () => {
    it('testing all params in lab', async () => {
        const testingResults = await wikiAlgo();
        
        expect(testingResults.population).toBeGreaterThan(0);
        expect(testingResults.populationDensity).toBeGreaterThan(0);
        expect(testingResults.avgTempApril).not.toBeNull();
        expect(testingResults).toHaveProperty('exists');
        expect(testingResults).toHaveProperty(['exists', 'emblem'], true);
        expect(testingResults.numberArthiMonumentsInList).toBeGreaterThan(20);
    });
});

