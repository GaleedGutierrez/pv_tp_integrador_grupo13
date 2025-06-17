import { Controller } from 'react-hook-form';

export const TextAreaForm = ({
	control,
	error,
	label,
	name,
	classNameLabel,
	classNameSpan,
	classNameTextarea: classNameInput,
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
				<textarea
					className={`${classNameInput} ${invalid && 'is-invalid'}`}
					id={name}
					{...field}
					{...rest}
				/>
			)}
		/>
		{error && <p className={classNameError}>{error.message}</p>}
	</label>
);
