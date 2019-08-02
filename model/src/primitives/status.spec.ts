import { getStatus } from "./status";

describe('Status', () => {
  it('gets the status', () => {
    const status = 'pending';

    expect(getStatus({ status: status })).toBe(status);
  })
})