/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Controller } from 'react-hook-form';

export const DatalistForm = ({
	control,
	error,
	label,
	name,
	options,
	classNameLabel,
	classNameSpan,
	classNameInput,
	classNameError,
	isScreenReaderOnly = false,
	Icon,
	...rest
}) => {
	const datalistId = `datalist-${name}`;

	return (
		<label
			className={classNameLabel}
			htmlFor={name}
		>
			<span className={isScreenReaderOnly ? 'is-sr-only' : classNameSpan}>
				{label}
			</span>
			{Icon && <Icon />}
			<Controller
				control={control}
				name={name}
				render={({ field, fieldState: { invalid } }) => (
					<>
						<input
							className={`${classNameInput} ${invalid && 'is-invalid'}`}
							id={name}
							list={datalistId}
							{...field}
							{...rest}
						/>
						<datalist id={datalistId}>
							{options.map((option) => {
								const optionValue =
									typeof option === 'string'
										? option
										: option.value;
								const optionLabel =
									typeof option === 'string'
										? option
										: (option.label ?? option.value);

								return (
									<option
										key={optionValue}
										value={optionValue}
									>
										{optionLabel}
									</option>
								);
							})}
						</datalist>
					</>
				)}
			/>
			{error && <p className={classNameError}>{error.message}</p>}
		</label>
	);
};
