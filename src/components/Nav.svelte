<script lang="ts">
	export let active: string = 'home';
</script>

<nav class="flex justify-center gap-2">
	<a class="text-sm hover:underline {active == 'home' ? 'text-orange-500' : undefined}" href="/"
		>Home</a
	>
	<a
		class="text-sm hover:underline {active == 'about' ? 'text-orange-500' : undefined}"
		href="/about">About</a
	>
</nav>
