/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ProductCategory } from '@modules/products/domain/ProductCategory';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@ui/select';
import { Controller } from 'react-hook-form';

export const SelectForm = ({
	control,
	error,
	name,
	classNameError,
	label,
	classNameLabel,
	classNameSpan,
}) => {
	const Categories = Object.values(ProductCategory).map((category) => ({
		label: category,
		value: category,
	}));

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { invalid } }) => (
				<div className={classNameLabel}>
					<span className={classNameSpan}>{label}</span>
					<Select
						value={field.value}
						// eslint-disable-next-line react/jsx-handler-names
						onValueChange={field.onChange}
					>
						<SelectTrigger
							className={`w-full text-base ${invalid ? 'is-invalid' : ''}`}
						>
							<SelectValue placeholder="Selecciona la categoría" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Categoría</SelectLabel>
								{Categories.map((category) => (
									<SelectItem
										key={category.value}
										className="text-base"
										value={category.value}
									>
										{category.label}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
					{error && <p className={classNameError}>{error.message}</p>}
				</div>
			)}
		/>
	);
};
