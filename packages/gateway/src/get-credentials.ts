import { generate } from 'selfsigned';

export function getCredentials() {
  const credentials = generate();

  return {
    key: Buffer.from(credentials.private),
    cert: Buffer.from(credentials.cert),
  };
}
