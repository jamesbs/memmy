import { BearerStrategy } from './bearer-strategy';
import { UnauthorizedException } from '@nestjs/common';

describe('BearerStrategy', () => {
  it('returns a user when authorized', () => {
    const user = { id: 'user' };
    const bearerStrategy = new BearerStrategy(
      { getUser: () => user },
      { isAuthorized: () => true },
    );
    expect(bearerStrategy.validate('some token')).toBe(user);
  });

  it('should throw an error when user is not authorized', () => {
    const user = { id: 'user' };
    const bearerStrategy = new BearerStrategy(
      { getUser: () => user },
      { isAuthorized: () => false },
    )
    expect(() => { bearerStrategy.validate('some token'); }).toThrowError(UnauthorizedException);
  });

  it('should throw an error when given invalid token', () => {
    const user = { id: 'user' };
    const bearerStrategy = new BearerStrategy(
      { getUser: () => undefined },
      { isAuthorized: () => true },
    );
    expect(() => { bearerStrategy.validate('some token'); }).toThrowError(UnauthorizedException);
  });
});
