/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { handleResponse } from '..';

/**
 * handleResponse
 */
describe('handleResponse', () => {
  it('should return data when okay', async () => {
    expect.assertions(1);
    const res = {
      headers: {},
      ok: true,
      status: 200,
      url: 'https://testing.com',
      json: () => Promise.resolve({ key: 'value' }),
    };

    try {
      const result = await handleResponse(res as Response);
      expect(result).toMatchObject({ key: 'value' });
    } catch (error) {}
  });

  it('should throw error when res not okay', async () => {
    expect.assertions(1);
    const res = {
      headers: {},
      ok: false,
      status: 400,
      url: 'https://testing.com',
      json: () => Promise.resolve({ error: { key: 'value' } }),
    };

    try {
      const result = await handleResponse(res as Response);
    } catch (error) {
      expect(error).toStrictEqual(new Error('Not a valid request'));
    }
  });
});
