<script lang="ts">
	import Navbar from './Navbar.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<Navbar />
		<slot />
	</main>
</div>

<style>
	main {
		padding: 6px;
	}
	@media (min-width: 700px) {
		main {
			margin: 0 auto;
			max-width: 700px;
		}
	}
</style>
