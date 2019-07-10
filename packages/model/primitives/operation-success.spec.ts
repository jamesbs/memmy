import { hasSucceeded, hasFailed } from "./operation-success";

describe('Operation Success', () => {
  it('has succeeded', () => {
    expect(hasSucceeded({ status: 'succeeded' })).toBe(true);
  });

  it('hasn\'t succeeded', () => {
    expect(hasSucceeded({ status: 'failed' })).toBe(false);
  });

  it('has failed', () => {
    expect(hasFailed({ status: 'failed' })).toBe(true);
  });

  it('hasn\'t failed', () => {
    expect(hasFailed({ status: 'succeeded' })).toBe(true);
  });
});