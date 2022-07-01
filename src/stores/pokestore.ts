import { writable } from 'svelte/store';

export const pokemon = writable<[{ id: number; name: string }]>([]);

async function fetchPokemon(): Promise<void> {
	const apiHttp = 'https://pokeapi.co/api/v2/pokemon?limit=20';
	const response = await fetch(apiHttp).then((res) => res.json());
	console.log(response);
	const data: [{ id: number; name: string }] = response.results.map(
		(value: { name: string; url: string }, index: number) => {
			return {
				id: index + 1,
				name: value.name
			};
		}
	);

	// set data to the store
	pokemon.set(data);
}

fetchPokemon();
