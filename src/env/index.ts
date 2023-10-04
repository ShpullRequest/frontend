import { buildEnvProxy } from './buildEnvProxy';
import { parseEnv } from './env.schema';

const ENVBase = buildEnvProxy<Record<string, unknown>>(
  import.meta.env,
  (key) => `VITE_${key}`,
);

export const ENV = parseEnv(ENVBase);

export type ENV = typeof ENV;