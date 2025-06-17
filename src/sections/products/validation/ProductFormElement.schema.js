import { ProductCategory } from '@modules/products/domain/ProductCategory.js';
import * as z from 'zod';

export const RatingSchema = z.object({
	rate: z
		.string()
		.min(0, { message: 'La calificación debe ser mayor o igual a 0' })
		.max(5, {
			message: 'La calificación debe ser menor o igual a 5',
		})
		.length(1, {
			message: 'La calificación debe ser un número de un dígito',
		}),
	count: z
		.string()
		.min(0, { message: 'El conteo debe ser mayor o igual a 0' }),
});
export const ProductFormSchema = z.object({
	title: z.string().min(1, {
		message: 'El título no puede estar vacío',
	}),
	price: z
		.string()
		.min(1, { message: 'El precio debe ser mayor a $1 (uno)' }),
	description: z.string().min(1, {
		message: 'La descripción no puede estar vacía',
	}),
	category: z
		.string()
		.min(1, {
			message: 'La categoría no puede estar vacía',
		})
		.refine(
			(category) => {
				const VALID_CATEGORIES = Object.values(ProductCategory);

				return VALID_CATEGORIES.includes(category);
			},
			{
				message: 'La categoría debe ser válida',
			},
		),
	image: z
		.string()
		.min(1, {
			message: 'La URL de la imagen no puede estar vacía',
		})
		.url({
			message: 'La URL de la imagen debe ser válida',
		})
		.trim(),
	rating: RatingSchema,
});
