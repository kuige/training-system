<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';

	interface Props {
		title: string;
		description: string;
		icon: string;
		path: string;
	}

	let { title, description, icon, path }: Props = $props();
</script>

<a
	href={resolve(path as Pathname)}
	class="block rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
	<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
		{icon}
	</div>
	<h3 class="text-lg font-bold">
		{title}
	</h3>
	<p class="mt-2 text-sm text-gray-500">
		{description}
	</p>
</a>
