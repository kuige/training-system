<script lang="ts">
	interface Step {
		label: string;
	}

	interface Props {
		steps: Step[];
		current: number;
		onChange: (index: number) => void;
	}

	let { steps, current, onChange }: Props = $props();
</script>

<div class="flex items-center justify-between">
	{#each steps as step, index (index)}
		<div class="flex flex-1 items-center">
			<button class="flex flex-col items-center" onclick={() => onChange(index + 1)}>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition
		      {current >= index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}"
				>
					{index + 1}
				</div>
				<span
					class="mt-2 text-sm
		      {current === index + 1 ? 'font-bold text-blue-600' : 'text-gray-500'}"
				>
					{step.label}
				</span>
			</button>
			{#if index < steps.length - 1}
				<div
					class="mx-4 h-0.5 flex-1
          {current > index + 1 ? 'bg-blue-600' : 'bg-gray-200'}"
				></div>
			{/if}
		</div>
	{/each}
</div>
