const {simulateApiCall, fetchJSON} = require('../fiveth_task');

describe('Fiveth task', () => {
    it('simulateApiCall returns expected response', async () => {
        const response = await simulateApiCall();
        expect(response).toEqual({message:'Response from API'} );
    });

    it('fetchJSON returns expected JSON object', async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';

        const result = await fetchJSON(url);

        expect(result).toHaveProperty('userId');
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('title');
        expect(result).toHaveProperty('body');

      });
});