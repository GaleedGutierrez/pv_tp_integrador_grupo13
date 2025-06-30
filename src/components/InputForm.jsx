/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Controller } from 'react-hook-form';

export const InputForm = ({
	control,
	error,
	label,
	name,
	type,
	classNameLabel,
	classNameSpan,
	classNameInput,
	classNameError,
	isScreenReaderOnly = false,
	Icon,
	...rest
}) => (
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
				<input
					className={`${classNameInput} ${invalid && 'is-invalid'}`}
					id={name}
					type={type}
					{...field}
					{...rest}
				/>
			)}
		/>
		{error && <p className={classNameError}>{error.message}</p>}
	</label>
);
