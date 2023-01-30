<script lang="ts">
	import type { PageData } from './$types';
	import Bend from '$lib/components/Bend.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Bəndlər &bull; Sərgüzəşti-bekar</title>
</svelte:head>

<h1>Bəndlər</h1>

<ul>
	{#each data.bendler as bend}
		<Bend path={bend.path} title={bend.meta.title} date={bend.meta.date} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
