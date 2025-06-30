/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import StarIcon from '@assets/icons/star-black.svg?react';
import CalvinKleinLogo from '@assets/logos/calvin-klein.svg?react';
import GucciLogo from '@assets/logos/gucci.svg?react';
import PradaLogo from '@assets/logos/prada.svg?react';
import VersaceLogo from '@assets/logos/versace.svg?react';
import ZaraLogo from '@assets/logos/zara.svg?react';

import { Button } from './Button';

/**
 * Hero Component.
 * @returns The rendered Hero component with a greeting message.
 */
export const Hero = () => (
	<section className="bg-gray-100">
		<div className="pt-10 lg:flex lg:grid lg:grid-cols-[60%_40%] lg:pt-0">
			<div className="px-4 lg:place-content-center">
				<h1 className="mb-5">
					Encontrá ropa que se adapte a tu estilo
				</h1>
				<p className="mb-6 text-gray-700">
					Descubrí nuestra increíble variedad de prendas
					cuidadosamente diseñadas para que puedas expresar tu
					personalidad única y sentirte cómodo con tu propio estilo.
				</p>
				<Button
					isPrimary
					className="lg:max-w-52"
				>
					Compra ahora
				</Button>
				<div className="mt-5 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
					<div>
						<h3 className="font-primary text-2xl font-bold lg:text-4xl">
							200+
						</h3>
						<p>Marcas internacionales</p>
					</div>
					<div>
						<h3 className="font-primary text-2xl font-bold lg:text-4xl">
							2000+
						</h3>
						<p>Productos de alta calidad</p>
					</div>
					<div>
						<h3 className="font-primary text-2xl font-bold lg:text-4xl">
							30.000+
						</h3>
						<p>Clientes satisfechos</p>
					</div>
				</div>
			</div>
			<div className="relative">
				<picture>
					<source
						media="(min-width: 768px)"
						srcSet="/images/hero-large.webp"
					/>
					<img
						alt="Una pareja con ropa cool"
						className="h-(--vw-114) lg:h-(--vw-46) w-full object-cover object-top"
						src="/images/hero-small.webp"
					/>
				</picture>
				<StarIcon className="inset-x-1/32 absolute inset-y-1/3 w-11 lg:w-14" />
				<StarIcon className="inset-y-1/32 w-18 lg:inset-x-7/10 lg:w-26 absolute inset-x-3/4" />
			</div>
		</div>
		<div className="flex flex-wrap items-center justify-center gap-8 bg-gray-950 px-4 py-10 md:justify-around">
			<VersaceLogo className="max-w-29" />
			<ZaraLogo className="max-w-16" />
			<GucciLogo className="max-w-27" />
			<PradaLogo className="max-w-32" />
			<CalvinKleinLogo className="max-w-33" />
		</div>
	</section>
);
