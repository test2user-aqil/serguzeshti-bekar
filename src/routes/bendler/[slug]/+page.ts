import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await import(`../${params.slug}.md`);
	const { title, author } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		author
	};
}) satisfies PageLoad;
