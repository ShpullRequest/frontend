import { z } from 'zod';

// Создание схемы валидации Env файла
const envSchema = z.object({
  API: z.string(),
  NUMBER: z.coerce.number(),
  BOOL: z.coerce.boolean(),
});

// Создание универсального парсера, который будет производить валидацию 
export const parseEnv = (configObj: Record<string, unknown>) => {
    const parseResult = envSchema.safeParse(configObj);
  
    if (!parseResult.success) throw parseResult.error;
  
    return parseResult.data;
  }