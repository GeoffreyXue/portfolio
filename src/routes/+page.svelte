<script>
	import Counter from './Counter.svelte';
	import portrait from '$lib/images/portrait.jpg';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Geoffrey Xue's portfolio" />
</svelte:head>

<section class="align-left flex flex-[0.6] flex-col p-4">
	<div class="flex flex-row gap-4">
		<div class="flex-[0.7]">
			<h1 class="w-full text-6xl font-bold">Hi, I'm Geoffrey Xue.</h1>
			<br />
			<h2 class="text-xl">Interested in programming, photography, and competitive typing.</h2>
			<h2 class="text-xl">Contact me at xuegeoff@gmail.com, or 262-765-1864.</h2>
		</div>
		<picture class="flex-[0.3]">
			<img src={portrait} alt="Portrait" class="aspect-square w-full rounded-md object-cover" />
			<!-- <source srcset={portrait} type="image/jpg" /> -->
			<!-- <source srcset={portrait} type="image/webp" /> -->
			<!-- <img src={welcome_fallback} alt="Welcome" /> -->
		</picture>
	</div>
	<h1 class="w-full text-4xl font-bold">Timeline</h1>
	<h2 class="text-xl">Where I've been</h2>
	<h1 class="w-full text-4xl font-bold">Projects</h1>
	<h2 class="text-xl">A list of hacks and experiments</h2>
	<!-- Grab stuff from previous website to here -->
</section>
