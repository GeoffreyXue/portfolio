<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="align-center flex flex-[0.6] flex-col justify-center">
	<h1 class="w-full">
		<span class="relative block h-0 w-full pt-[calc(100%*495/2048)]">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" class="absolute top-0 block h-full w-full" />
			</picture>
		</span>
		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+pcage.svelte</strong>
	</h2>

	<Counter />
</section>
