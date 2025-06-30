import * as z from 'zod';

export const RegisterSchema = z
	.object({
		name: z.string().optional(),
		lastname: z.string().optional(),
		email: z.string().email({
			message: 'Verifica el correo electrónico ingresado.',
		}),
		username: z.string().optional(),
		password: z.string().min(6, {
			message: 'La contraseña debe tener al menos 6 caracteres.',
		}),
		confirmPassword: z.string(),
	})
	.refine(
		(data) => {
			if (!data.password || !data.confirmPassword) {
				return true;
			}

			return data.password === data.confirmPassword;
		},
		{
			message: 'Las contraseñas no coinciden.',
			path: ['confirmPassword'],
		},
	);
