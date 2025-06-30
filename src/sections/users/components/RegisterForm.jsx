/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useGlobalContext } from '@context/global.context';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@ui/form';
import { Input } from '@ui/input';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { RegisterSchema } from '../validations/RegisterSchema';

export const RegisterForm = () => {
	const { userRegister } = useGlobalContext();
	const form = useForm({
		resolver: zodResolver(RegisterSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: {
			name: '',
			lastname: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});
	const handleFormSubmit = (data) => {
		try {
			userRegister?.register(data);
			toast.success('Registro exitoso, ahora podes iniciar sesión.');
			form.reset();
		} catch {
			form.setError('email', {
				message: 'Este correo electrónico ya ha sido registrado.',
			});
		}
	};

	return (
		<section className="my-8">
			<div className="flex w-full flex-col items-center justify-center gap-5 px-4">
				<Card className="w-full max-w-lg">
					<CardHeader>
						<CardTitle>
							<h2 className="text-lg">Regístrate</h2>
						</CardTitle>
						<CardDescription>
							<p className="text-base">
								Ingresa tu correo electrónico y contraseña a
								continuación para registrarte.
							</p>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								className="grid gap-5"
								id="product-form"
								onSubmit={form.handleSubmit(handleFormSubmit)}
							>
								<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-base">
													Nombre (opcional)
												</FormLabel>
												<FormControl>
													<Input
														autoComplete="name"
														className="text-base md:text-base"
														placeholder="Juan"
														type="text"
														{...field}
													/>
												</FormControl>
												<FormMessage className="text-base" />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="lastname"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-base">
													Apellido (opcional)
												</FormLabel>
												<FormControl>
													<Input
														autoComplete="family-name"
														className="text-base md:text-base"
														placeholder="Pérez"
														type="text"
														{...field}
													/>
												</FormControl>
												<FormMessage className="text-base" />
											</FormItem>
										)}
									/>
								</div>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-base">
												Correo Electrónico
											</FormLabel>
											<FormControl>
												<Input
													required
													autoComplete="email"
													className="text-base md:text-base"
													placeholder="juan@perez.com"
													type="email"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-base" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-base">
												Contraseña
											</FormLabel>
											<FormControl>
												<Input
													required
													autoComplete="current-password"
													className="text-base md:text-base"
													type="password"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-base" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="confirmPassword"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-base">
												Confirmar contraseña
											</FormLabel>
											<FormControl>
												<Input
													required
													autoComplete="new-password"
													className="text-base md:text-base"
													type="password"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-base" />
										</FormItem>
									)}
								/>
							</form>
						</Form>
					</CardContent>
					<CardFooter className="flex flex-col gap-3">
						<Button
							className="w-full text-base"
							form="product-form"
							type="submit"
						>
							Crear cuenta
						</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
};
