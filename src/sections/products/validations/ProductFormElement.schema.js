import { ProductCategory } from '@modules/products/domain/ProductCategory';
import * as z from 'zod';

export const ProductFormSchema = z.object({
	title: z.string().min(1, {
		message: 'El título no puede estar vacío',
	}),
	price: z
		.string()
		.min(1, { message: 'El precio es requerido' })
		.refine(
			(value) => {
				const numberValue = Number(value);

				return !Number.isNaN(numberValue) && numberValue > 0;
			},
			{
				message: 'El precio debe ser un número mayor a 0',
			},
		),
	description: z.string().min(1, {
		message: 'La descripción no puede estar vacía',
	}),
	category: z
		.string()
		.min(1, {
			message: 'Por favor, selecciona una categoría',
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
});
