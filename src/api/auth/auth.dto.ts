import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const RegisterSchema = z.object({
email: z.string().email(),
password: z.string().min(8, 'Min password length is 8 symbols'),
});

export const LoginSchema = z.object({
email: z.string().email(),
password: z.string().min(8, 'Min password length is 8 symbols'),
});

export class RegisterDto extends createZodDto(RegisterSchema){}
export class LoginDto extends createZodDto(LoginSchema) {}