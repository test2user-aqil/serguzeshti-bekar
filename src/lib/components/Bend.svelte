<script lang="ts">
	export let path: string;
	export let title: string;
	export let date: string;
</script>

<li>
	<h2>
		<a href={path}>
			{title}
		</a>
	</h2>
	<small>{date}</small>
</li>

<style>
	h2 {
		font-size: 32px;
	}

	a {
		color: #101010;
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
