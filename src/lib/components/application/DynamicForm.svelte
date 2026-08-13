<script lang="ts">
  import type { FormFieldConfig } from '$lib/types/application';

	let {
		config = [],
		data = $bindable({})
	}: {
		config: FormFieldConfig[];
		data: Record<string, string>;
	} = $props();
</script>

<div class="mx-auto w-full max-w-md space-y-6 rounded-xl bg-white p-6 shadow-md">
	{#each config as field (field.key)}
		<div class="form-control space-y-1.5">
			<label for={field.key} class="block text-sm font-medium text-gray-700">
				{field.label}
			</label>

			{#if field.type === 'input'}
				<input
					id={field.key}
					type="text"
					bind:value={data[field.key]}
					placeholder={field.placeholder || ''}
					class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
				/>

			{:else if field.type === 'radio'}
				<div class="flex flex-wrap items-center gap-4 pt-1">
					{#each field.options || [] as option (option.value)}
						<label class="inline-flex items-center space-x-2 text-sm text-gray-700">
							<input
								type="radio"
								name={field.key}
								value={option.value}
								bind:group={data[field.key]}
								class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
							/>
							<span>{option.label}</span>
						</label>
					{/each}
				</div>

			{:else if field.type === 'select'}
				<select
					id={field.key}
					bind:value={data[field.key]}
					class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
				>
					<option value="" disabled selected={!data[field.key]}>
						{field.placeholder || '请选择'}
					</option>
					{#each field.options || [] as option (option.value)}
						<option value={option.value}>
							{option.label}
						</option>
					{/each}
				</select>
			{/if}
		</div>
	{/each}
</div>
