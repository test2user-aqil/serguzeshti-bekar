import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/bendler`);
	const bendler = await response.json();

	return {
		bendler
	};
}) satisfies PageLoad;
