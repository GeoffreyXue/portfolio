<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	console.log($page.url.pathname);
	console.log(base);
</script>

<header class="justify-left m-auto flex w-full max-w-5xl p-4 pt-16">
	<nav class="flex justify-center">
		<ul
			class="align-center relative m-0 flex h-12 list-none justify-center gap-2 bg-white bg-contain p-0"
		>
			<li aria-current={$page.url.pathname === base ? 'page' : undefined}>
				<a href="{base}/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === base + '/photos' ? 'page' : undefined}>
				<a href="{base}/photos">Photos</a>
			</li>
			<li aria-current={$page.url.pathname === base + '/resume' ? 'page' : undefined}>
				<a href="{base}/resume">Resume</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-bottom: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 600;
		font-size: 1.4rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	li[aria-current='page'] > a {
		color: var(--color-theme-1-alt);
	}
</style>
