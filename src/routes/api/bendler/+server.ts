import { fetchBendler } from './fetchBendler';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchBendler();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};
