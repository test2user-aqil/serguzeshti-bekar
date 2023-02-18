<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import NProgress from 'nprogress';
	import '$lib/styles/styles.css';
	import { navigating } from '$app/stores';

	import 'nprogress/nprogress.css';

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
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
