/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export const ProductRoutes = {
	list: '/productos',
	details: '/productos/:id',
	create: '/productos/nuevo',
	update: '/productos/:id/editar',
};
// Separate URL builders for navigation
export const buildUrl = {
	details: (id) => `/productos/${id}`,
	update: (id) => `/productos/${id}/editar`,
};
