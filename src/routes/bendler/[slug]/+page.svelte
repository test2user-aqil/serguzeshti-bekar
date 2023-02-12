<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} &bull; Sərgüzəşti-bekar</title>
	<meta property="og:title" content={`${data.title} • Sərgüzəşti-bekar`} />
	<meta name="description" content={`${data.title} by ${data.author}`} />
</svelte:head>

<article>
	<h1>{data.title}</h1>
	<svelte:component this={data.content} />
	<small>{data.author}</small>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	small {
		text-align: right;
		margin-top: 0.5rem;
	}
</style>
