<script lang="ts">
	import type { PageData } from './$types';
	import Bend from '$lib/components/Bend.svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';

	export let data: PageData;

	type Bend = {
		meta: { title: string; date: string };
		path: string;
		content: string;
		searchTerms: string;
	};

	const searchBends: Bend[] = data.bendler.map((bend: Bend) => ({
		...bend,
		searchTerms: `${bend.meta.title} ${bend.meta.date}`
	}));

	const searchStore = createSearchStore(searchBends);

	const unsubscribe = searchStore.subscribe((bend) => searchHandler(bend));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>Bəndlər &bull; Sərgüzəşti-bekar</title>
</svelte:head>

<h1>Bəndlər</h1>

<ul>
	<input type="search" placeholder="Axtar..." bind:value={$searchStore.search} />

	{#each $searchStore.filtered as bend}
		<Bend path={bend.path} title={bend.meta.title} date={bend.meta.date} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	input {
		min-width: max-content;
		font-size: 20px;
		padding: 0.6rem 1rem;
		margin: 0 0 0.5rem 0;
		background-color: #b4b4b4;
		border: 2px solid rgba(0, 0, 0, 0.25);
		filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
		border-radius: 0.5rem;
		outline: 0;
		transition: 0.2s ease-out;
	}
	input:focus {
		border: 2px solid rgba(0, 0, 0, 0.5);
	}
</style>
