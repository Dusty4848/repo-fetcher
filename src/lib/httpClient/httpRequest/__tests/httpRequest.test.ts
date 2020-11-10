import fetchMock from 'jest-fetch-mock';
import { httpRequest } from '../index';
import { config } from '../../../config';

/**
 * httpRequest
 */
describe('httpRequest', () => {
  describe('Method GET', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it('should call fetch with correct endpoint', async () => {
      // arrange
      expect.assertions(2);
      fetchMock.mockResponseOnce(JSON.stringify({}));

      // act
      await httpRequest.get('/test');

      // assert
      expect(fetchMock).toBeCalledWith(expect.any(String), expect.any(Object));
      expect(fetchMock).toBeCalledWith(expect.any(String), expect.objectContaining({ method: 'GET' }));
    });

    it('should call fetch with correct endpoint and query', async () => {
      // arrange
      expect.assertions(1);
      fetchMock.mockResponseOnce(JSON.stringify({}));

      // act
      await httpRequest.get('/test', { query: { key1: 'value1', key2: 'value2' } });

      // assert
      expect(fetchMock).toBeCalledWith(`${config.endpoint}/test?key1=value1&key2=value2`, expect.any(Object));
    });

    it('should call fetch with correct additional headers', async () => {
      // arrange
      expect.assertions(1);
      fetchMock.mockResponseOnce(JSON.stringify({}));

      // act
      await httpRequest.get('/test', { headers: { accept: 'test' } });

      // assert
      expect(fetchMock).toBeCalledWith(
        expect.any(String),
        expect.objectContaining({ headers: expect.objectContaining({ accept: 'test' }) }),
      );
    });
  });
});
