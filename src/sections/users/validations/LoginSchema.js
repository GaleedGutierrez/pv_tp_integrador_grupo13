/* eslint-disable camelcase */
import * as z from 'zod';

export const LoginSchema = z.object({
	email: z
		.string({ required_error: 'El correo electrónico es obligatorio.' })
		.nonempty({ message: 'El correo electrónico no puede estar vacío.' })
		.email({
			message: 'Verifica el correo electrónico ingresado.',
		}),
	password: z
		.string({ required_error: 'La contraseña es obligatoria.' })
		.nonempty({
			message: 'La contraseña no puede estar vacía.',
		}),
});
