import { convert } from '../src/currency';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { afterAll, beforeAll } from '@jest/globals';

unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn(() =>  
    Promise.resolve({
      json: () => Promise.resolve({rates: {CAD: 1.42}}),
    }));
});

beforeEach(() => {
   fetch.mockClear();
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it('find exchange', async () => {
  const rate = await convert("USD", "CAD");

  expect(rate).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});