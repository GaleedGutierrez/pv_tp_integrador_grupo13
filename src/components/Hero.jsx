import StarIcon from '@assets/icons/star.svg';
import CalvinKleinLogo from '@assets/logos/calvin-klein.svg';
import GucciLogo from '@assets/logos/gucci.svg';
import PradaLogo from '@assets/logos/prada.svg';
import VersaceLogo from '@assets/logos/versace.svg';
import ZaraLogo from '@assets/logos/zara.svg';

import { Button } from './Button';

/**
 * Hero Component.
 * @returns {import('react').JSX.Element} The rendered Hero component with a greeting message.
 */
export const Hero = () => (
	<section className="bg-gray-100">
		<div className="pt-10 lg:flex lg:grid lg:grid-cols-[60%_40%]">
			<div className="px-4">
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
						<h3 className="font-primary">200+</h3>
						<p>Marcas internacionales</p>
					</div>
					<div>
						<h3 className="font-primary">2000+</h3>
						<p>Productos de alta calidad</p>
					</div>
					<div>
						<h3 className="font-primary">30.000+</h3>
						<p>Clientes satisfechos</p>
					</div>
				</div>
			</div>
			<div className="relative">
				<picture>
					<source
						media="(min-width: 768px)"
						srcSet="/images/hero-large.jpg"
					/>
					<img
						alt="Una pareja con ropa cool"
						className="h-(--vw-114) lg:h-(--vw-46) w-full object-cover object-top"
						src="/images/hero-small.jpg"
					/>
				</picture>
				<StarIcon
					// @ts-ignore
					className="inset-x-1/32 absolute inset-y-1/3 w-11 lg:w-14"
				/>
				<StarIcon
					// @ts-ignore
					className="w-18 lg:w-26 inset-y-1/32 lg:inset-x-7/10 absolute inset-x-3/4"
				/>
			</div>
		</div>
		<div className="flex flex-wrap items-center justify-center gap-8 bg-gray-950 px-4 py-10 md:gap-9">
			<VersaceLogo // @ts-ignore
				className="max-w-29"
			/>
			<ZaraLogo // @ts-ignore
				className="max-w-16"
			/>
			<GucciLogo // @ts-ignore
				className="max-w-27"
			/>
			<PradaLogo // @ts-ignore
				className="max-w-32"
			/>
			<CalvinKleinLogo // @ts-ignore
				className="max-w-33"
			/>
		</div>
	</section>
);
