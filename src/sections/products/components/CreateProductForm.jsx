import { InputForm } from '@components/InputForm';
import { TextAreaForm } from '@components/TextAreaForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductCategory } from '@modules/products/domain/ProductCategory';
import { useForm } from 'react-hook-form';

import { DatalistForm } from '@/components/DatalistForm';

import { ProductFormSchema } from '../validation/ProductFormElement.schema.js';

const handleFormSubmit = (/*data*/) => {
	try {
		// localStorage.setItem(USER_DATA, JSON.stringify(data));
		alert('Updated successfully');
	} catch {
		alert('There was an error saving your data');
	}
};

export const CreateProductForm = () => {
	const {
		control,
		handleSubmit,
		// setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(ProductFormSchema),
		mode: 'onBlur',
		defaultValues: {
			title: '',
			description: '',
			price: '',
			category: '',
			image: '',
			rating: {
				rate: '',
				count: '',
			},
		},
	});

	return (
		<section className="mt-8 flex w-full flex-col items-center justify-center gap-5 px-4">
			<h1>Crea un nuevo producto</h1>
			<form
				className="border-1 w-full max-w-2xl rounded-[1.25rem] border-gray-400 p-5"
				onSubmit={handleSubmit(handleFormSubmit)}
			>
				<h2 className="font-primary mb-4 text-2xl font-bold">
					Ingresa los datos
				</h2>
				<div className="flex flex-col gap-4">
					<InputForm
						required
						classNameError="text-red-500 text-sm mt-1"
						classNameInput="px-4 py-3 rounded-3xl w-full text-lg border-1 border-gray-500 focus-visible:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900"
						classNameLabel="font-medium text-xl"
						classNameSpan="mb-1 block"
						control={control}
						error={errors.title}
						label="Nombre"
						name="title"
						placeholder="Ingresa el título del producto"
						type="text"
					/>
					<InputForm
						required
						classNameError="text-red-500 text-sm mt-1"
						classNameInput="px-4 py-3 rounded-3xl w-full text-lg border-1 border-gray-500 focus-visible:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900"
						classNameLabel="font-medium text-xl"
						classNameSpan="mb-1 block"
						control={control}
						error={errors.price}
						label="Precio"
						name="price"
						placeholder="Ingresa el precio del producto"
						type="number"
					/>
					<TextAreaForm
						required
						classNameError="text-red-500 text-sm mt-1"
						classNameLabel="font-medium text-xl"
						classNameSpan="mb-1 block"
						classNameTextarea="px-4 py-3 rounded-3xl w-full text-lg border-1 border-gray-500 focus-visible:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900"
						control={control}
						error={errors.description}
						label="Descripción"
						name="description"
						placeholder="Ingresa la descripción del producto"
					/>
					<DatalistForm
						required
						classNameError="text-red-500 text-sm mt-1"
						classNameInput="px-4 py-3 rounded-3xl w-full text-lg border-1 border-gray-500 focus-visible:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900"
						classNameLabel="font-medium text-xl"
						control={control}
						error={errors.category}
						label="Categoría"
						name="category"
						placeholder="Elige la categoría del producto"
						options={Object.values(ProductCategory).map(
							(category) => ({
								label: category,
								value: category,
							}),
						)}
					/>
					<InputForm
						required
						classNameError="text-red-500 text-sm mt-1"
						classNameInput="px-4 py-3 rounded-3xl w-full text-lg border-1 border-gray-500 focus-visible:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900"
						classNameLabel="font-medium text-xl"
						classNameSpan="mb-1 block"
						control={control}
						error={errors.image}
						label="Imagen"
						name="image"
						placeholder="Ingresa la URL de la imagen del producto"
						type="url"
					/>
					<fieldset className="flex flex-col gap-4">
						<legend className="mb-1 block text-xl font-medium">
							Calificación del producto
						</legend>
						<InputForm
							required
							classNameError="text-red-500 text-sm mt-1"
							classNameInput="px-4 py-3 rounded-3xl w-full text-lg border-1 border-gray-500 focus-visible:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900"
							classNameLabel="font-medium text-lg"
							classNameSpan="mb-1 block"
							control={control}
							error={errors.rating?.rate}
							label="Calificación (0 a 5)"
							name="rating.rate"
							placeholder="Ingresa la calificación del producto"
							type="number"
						/>
						<InputForm
							required
							classNameError="text-red-500 text-sm mt-1"
							classNameInput="px-4 py-3 rounded-3xl w-full text-lg border-1 border-gray-500 focus-visible:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900"
							classNameLabel="font-medium text-lg"
							classNameSpan="mb-1 block"
							control={control}
							error={errors.rating?.count}
							label="Conteo de calificaciones"
							name="rating.count"
							placeholder="Ingresa el conteo de calificaciones del producto"
							type="number"
						/>
					</fieldset>
				</div>
			</form>
		</section>
	);
};
