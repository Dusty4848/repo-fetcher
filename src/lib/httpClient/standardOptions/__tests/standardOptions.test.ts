import { standardOptions } from '..';

/**
 * standardOptions
 */
describe('standardOptions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return standard options object', () => {
    const options = standardOptions();
    expect(options).toMatchObject({
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  });

  it('should return standard options object + additional headers', () => {
    const options = standardOptions({ additional: 'true' });
    expect(options).toMatchObject({
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        additional: 'true',
      },
    });
  });
});
