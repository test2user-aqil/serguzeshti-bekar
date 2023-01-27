<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Bəndlər &bull; Sərgüzəşti-bekar</title>
</svelte:head>

<h1>Bəndlər</h1>

<ul>
	{#each data.bendler as bend}
		<li>
			<h2>
				<a href={bend.path}>
					{bend.meta.title}
				</a>
			</h2>
			<small>{bend.meta.date}</small>
		</li>
	{/each}
</ul>

<style>
	h2 {
		font-size: 32px;
	}

	a {
		color: #101010;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	li {
		padding: 1rem 2rem;
		border-radius: 1rem;
		background-color: var(--accent-2);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
