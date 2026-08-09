<script lang="ts">
	import { locations } from '$lib/mock/location';
	import type { TrainingInfo } from '$lib/types/application';

	interface Props {
		training: TrainingInfo;
	}

	let { training = $bindable() }: Props = $props();
</script>

{#if training.mode === 'offline'}
	<div class="space-y-4">
		<select
		  class="w-full rounded-lg border p-3"
			bind:value={training.locationId}
		>
			<option value=""> 请选择培训地点 </option>
			{#each locations as location (location.id)}
				<option value={location.id}>
					{location.name}
				</option>
			{/each}
		</select>
		<input
			type="datetime-local"
			class="w-full rounded-lg border p-3"
			bind:value={training.time}
		/>
	</div>
{:else}
	<div class="rounded-lg bg-gray-50 p-4 text-gray-500">
		线上课程无需选择地点
	</div>
{/if}
