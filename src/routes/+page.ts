import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/bendler`);
	const bendler = await response.json();
	const bend = await bendler[0];
	return {
		bend
	};
}) satisfies PageLoad;
