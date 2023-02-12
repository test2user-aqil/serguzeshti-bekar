<script lang="ts">
	import type { PageData } from './$types';

	import Bend from '$lib/components/Bend.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Ana Səhifə &bull; Sərgüzəşti-bekar</title>
	<meta name="description" content="Bekarların məcəraları" />
</svelte:head>

<div class="container">
	<h1>Sərgüzəşti-bekar</h1>

	<h3>
		Mənanın yad anlayış olduğu və bəndlərin məqsədsiz cərəyan etdiyi bekarların dünyasına addım
		atın. Özünüzü absurd mənzərəsinə qərq edin, məna və təfsir təbiəti haqqında yeni perspektiv kəşf
		edin.
	</h3>

	<h2>Ən son:</h2>
	<Bend path={data.bend.path} title={data.bend.meta.title} author={data.bend.meta.author} />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1rem;
	}
	h2,
	h3 {
		font-family: 'Merriweather', serif;
		margin: 0 1rem;
	}
	h3 {
		text-align: center;
		margin: 2rem 0 1rem 0;
	}
</style>
