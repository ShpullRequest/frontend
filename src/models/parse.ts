import {ZodError, z} from 'zod'

// Создание универсального парсера, который будет возвращать лишь успешную валидацию
export const parse = <T extends z.ZodRawShape> (schema: z.ZodObject<T>, data: any) => {
    const parseResult = schema.safeParse(data);
    
    if (!parseResult.success) throw parseResult.error;
  
    return parseResult.data;
}
