<script>
	import Header from './Header.svelte';
	import './styles.css';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="m-auto box-border flex w-full max-w-5xl flex-1 flex-col p-4">
		<slot />
	</main>

	<footer
		class="flex w-full justify-end gap-4 p-4 pr-16 [&>a]:flex [&>a]:aspect-square [&>a]:h-full [&>a]:items-center [&_img]:h-8 [&_img]:w-8 [&_img]:object-contain"
	>
		<a href="https://github.com/GeoffreyXue">
			<img src={github} alt="GitHub" />
		</a>
		<a href="http://linkedin.com/geoffreyxue">
			<img src={linkedin} alt="Linkedin" />
		</a>
		<a href="https://github.com/sveltejs/kit">
			<img src={logo} alt="Resume" />
		</a>
	</footer>
</div>
