export type Token = { token: string };

export function token(token: Token) {
  return token.token;
}

export function isToken(sub: any): sub is Token {
  return typeof sub.token === 'string';
}

export function asToken({ token }: Token) {
  return {
    token,
  };
}
