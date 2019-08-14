import environment, { EnvironmentProvider } from '../environment';

export type Gateway = string;
export type GatewayProvider = Gateway;

export const gatewayContainer = (environment: EnvironmentProvider) => environment.gatewayUrl;

export default gatewayContainer(environment);