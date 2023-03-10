<script lang="ts">
	import type { Album } from '../../types/photos.types';

	const albums: Album[] = [
		{
			title: 'Faces',
			description: 'Portraits, poses, candids.',
			photos: []
		},
		{
			title: 'Design',
			description: 'Patterns and architecture.',
			photos: []
		},
		{
			title: 'Tourism',
			description: 'Places around the world.',
			photos: []
		}
	];
</script>

<svelte:head>
	<title>GX: Photos</title>
	<meta name="description" content="Geoffrey Xue's Photos" />
</svelte:head>

<section class="align-left flex flex-col">
	<h2 class="w-full, pl-4 text-xl">A collection of photos taken by me.</h2>
	{#each albums as album}
		<div class="flex h-64 flex-row p-4">
			<div class="flex-[0.4] p-4">
				<h1 class="w-full text-7xl font-bold">{album.title}</h1>
				<div class="h-12" />
				<h2 class="text-xl">{album.description}</h2>
			</div>
			<div class="flex-[0.6]">{album.photos.map((p) => p.name).join(',')}</div>
		</div>
		<hr class="w-3/4" />
	{/each}
</section>
