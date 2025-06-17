export const ProductRoutes = {
	list: '/productos',
	details: '/productos/:id',
	create: '/productos/nuevo',
	edit: '/productos/:id/edit',
};
// Separate URL builders for navigation
export const buildUrl = {
	details: (id) => `/productos/${id}`,
	update: (id) => `/productos/${id}/edit`,
};
