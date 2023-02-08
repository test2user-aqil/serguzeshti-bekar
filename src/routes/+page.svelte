<script lang="ts">
	import type { PageData } from './$types';

	import Bend from '$lib/components/Bend.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Sərgüzəşti-bekar &bull; Ana Səhifə</title>
	<meta name="description" content="Bekarların məcəraları" />
</svelte:head>

<div class="container">
	<h1>Sərgüzəşti-bekar</h1>

	<h3>
		Bəndlərin heç biri təbii və ya süni bir təfəkkürün məhsulu deyil. Real hadisələr əsasında
		yazılmışdır.
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
