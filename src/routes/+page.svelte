<script lang="ts">
	import type { PageData } from './$types';

	import Bend from '$lib/components/Bend.svelte';

	export let data: PageData;
	console.log(data.bend);
</script>

<svelte:head>
	<title>Sərgüzəşti-bekar &bull; Ana Səhifə</title>
	<meta name="description" content="Bekarların məcəraları" />
</svelte:head>

<div class="container">
	<h1>Sərgüzəşti-bekar</h1>

	<h2>Ən son:</h2>
	<Bend path={data.bend.path} title={data.bend.meta.title} date={data.bend.meta.date} />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1rem;
	}
	h2 {
		font-family: 'Merriweather', serif;
		margin: 0 1rem;
	}
</style>
