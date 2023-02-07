<script lang="ts">
	export let path: string;
	export let title: string;
	export let date: string;
</script>

<a href={path}>
	<h2>
		{title}
	</h2>
	<small>{date}</small>
</a>

<style>
	h2 {
		font-size: 26px;
	}

	a {
		color: #101010;
		padding: 1rem 2rem;
		border-radius: 1rem;
		background-color: var(--accent-2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid rgba(0, 0, 0, 0.25);
		filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
		transition: 0.2s ease-out;
	}
	a:hover {
		transform: translateY(-1px);
	}

	@media only screen and (max-width: 460px) {
		a small {
			display: none;
		}
		a h2 {
			margin: 0 auto;
			min-width: fit-content;
		}
		a {
			padding: 1rem;
		}
	}
</style>
