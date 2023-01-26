<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Bəndlər &bull; Sərgüzəşti-bekar</title>
</svelte:head>

<ul>
	{#each data.bendler as bend}
		<li>
			<h2>
				<a href={bend.path}>
					{bend.meta.title}
				</a>
			</h2>
			Published {bend.meta.date}
		</li>
	{/each}
</ul>
