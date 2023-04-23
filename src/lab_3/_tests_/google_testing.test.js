const {googleAlgo} = require('../google_testing');


describe('Google Testing', () => {
    it('testing all params in lab', async () => {
        const testingResults = await googleAlgo();

        expect(testingResults).toHaveProperty('title', 'Google');
        expect(testingResults).toHaveProperty('exists');
        expect(testingResults).toHaveProperty(['exists', 'logo'], true);
        expect(testingResults).toHaveProperty(['exists', 'searchInput'], true);
        expect(testingResults).toHaveProperty(['exists', 'searchButton'], true);
        expect(testingResults).toHaveProperty(['exists', 'gmailLink'], true);
    });
});

