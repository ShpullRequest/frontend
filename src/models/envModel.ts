import {z} from 'zod'

// Создание схемы валидации Env файла
export const envSchema = z.object({
  API: z.string(),
  NUMBER: z.coerce.number(),
  BOOL: z.coerce.boolean(),
});