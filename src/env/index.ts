import { envSchema, parse } from '@/models';
import { buildEnvProxy } from './buildEnvProxy';

const ENVBase = buildEnvProxy<Record<string, unknown>>(
  import.meta.env,
  (key) => `VITE_${key}`,
);


export const ENV = parse(envSchema, ENVBase);
export type ENV = typeof ENV;