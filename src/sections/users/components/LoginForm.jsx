/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

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
import { Link, useNavigate } from 'react-router';

import { useAuthContext } from '@/context/auth.context';
import { appRoutes } from '@/routes/appRouters';
import { LoginSchema } from '@/sections/users/validations/LoginSchema';

export const LoginForm = () => {
	const { authActions } = useAuthContext();
	const navigate = useNavigate();
	const { login } = authActions;
	const form = useForm({
		resolver: zodResolver(LoginSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const handleFormSubmit = (data) => {
		const RESULT = login(data.email, data.password);

		if (RESULT.error) {
			form.setError('email', {
				message: 'Credenciales inválidas. Inténtalo de nuevo.',
			});
			form.setError('password', {
				message: 'Credenciales inválidas. Inténtalo de nuevo.',
			});

			return;
		}

		form.reset();
		globalThis.scrollTo({ top: 0, behavior: 'smooth' });
		void navigate(appRoutes.private.home, {
			replace: true,
		});
	};

	return (
		<section className="my-8">
			<div className="flex w-full flex-col items-center justify-center gap-5 px-4">
				<Card className="w-full max-w-sm">
					<CardHeader>
						<CardTitle>
							<h2 className="text-lg">Inicia Sesión</h2>
						</CardTitle>
						<CardDescription>
							<p className="text-base">
								Ingresa tu correo electrónico y contraseña a
								continuación para iniciar sesión.
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
							</form>
						</Form>
					</CardContent>
					<CardFooter className="flex flex-col gap-3">
						<Button
							className="w-full text-base"
							form="product-form"
							type="submit"
						>
							Iniciar sesión
						</Button>
						<Button
							asChild
							className="w-full text-base"
							variant="secondary"
						>
							<Link to={appRoutes.public.register}>
								Crear una cuenta
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
};
