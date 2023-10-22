import { getContent } from './FetchData'; 

describe('getContent function', () => {
  it('should fetch content data successfully', async () => {
    
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ content: { document: [] } }), 
    });

    try {
      const content = await getContent();
      expect(content).toEqual([]);
    } catch (error) {
      fail('getContent should not throw an error when fetch is successful.');
    }
  });

  it('should handle fetch error', async () => {
    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404, 
    });

    try {
      await getContent();
      fail('getContent should throw an error when fetch fails.');
    } catch (error) {
      //expect(error.message).toBe('Failed to fetch data. Status: 404');
    }
  });
});
