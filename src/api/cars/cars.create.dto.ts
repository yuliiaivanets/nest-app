import z from 'zod';


export const CreateCarSchema = z.object({
  brand: z.string().min(2, 'Brand must at least contain 2 symbols'),
  model: z.string().min(1, 'Model must at least contain 1 symbols'),
  year: z.number().int().min(2000, 'Year must be positive and more then 2000'),
  price: z.coerce.number().positive('Price must be positive'),
});

export type CreateCarDto = z.infer<typeof CreateCarSchema>;

