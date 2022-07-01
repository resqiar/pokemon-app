<script>
	import Nav from '../components/Nav.svelte';
	import { pokemon } from '../stores/pokestore';
</script>

<svelte:head>
	<title>Pokemon Reference Page</title>
</svelte:head>

<header class="flex flex-col gap-2 pt-8">
	<h1 class="text-center text-4xl font-bold uppercase">Pokemon Reference</h1>

	<p class="text-center">
		Pokemon is an endangered creatures that every single individual has to be protected by the law.
	</p>

	<Nav />
</header>

<main>
	{#each $pokemon as individual}
		<p>{individual.name}</p>
	{/each}
</main>
