<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div>
	<ul>
		<li aria-current={$page.url.pathname === `/${base}` ? 'page' : undefined}>
			<a href={`${base}/`}>Ana Səhifə</a>
		</li>
		<li aria-current={$page.url.pathname === `${base}/bendler` ? 'page' : undefined}>
			<a href={`${base}/bendler`}>Bəndlər</a>
		</li>
		<li aria-current={$page.url.pathname === `${base}/haqqinda` ? 'page' : undefined}>
			<a href={`${base}/haqqinda`}>Haqqında</a>
		</li>
	</ul>
</div>

<style>
	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 20px 0;
	}

	li {
		border-radius: 4px;
		padding: 6px 12px;
		transition: 0.2s ease-in-out;
	}
	li:hover,
	li:focus {
		background-color: var(--accent-1);
	}

	a {
		color: #222;
		text-decoration: none;
	}

	li[aria-current='page'] {
		background: var(--accent-1);
	}

	li[aria-current='page'] a {
		color: black;
	}
</style>
