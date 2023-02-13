<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '$lib/styles/styles.css';
</script>

<div class="app">
	<main>
		<Navbar />
		<slot />
	</main>
</div>

<style>
	main {
		padding: 0.3rem 0.3rem 2rem;
	}
	@media (min-width: 700px) {
		main {
			margin: 0 auto;
			max-width: 700px;
		}
	}
</style>
