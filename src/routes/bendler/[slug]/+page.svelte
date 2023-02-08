<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} &bull; Sərgüzəşti-bekar</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article>
	<h1>{data.title}</h1>
	<svelte:component this={data.content} />
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
</style>
