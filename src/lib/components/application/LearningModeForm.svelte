<script lang="ts">
	import type { TrainingInfo } from '$lib/types/application';

	interface Props {
		training: TrainingInfo;
	}

	let { training = $bindable() }: Props = $props();
</script>

<div class="space-y-4">
	<label class="flex gap-2 items-center">
		<input type="radio" value="online" bind:group={training.mode} />
		线上学习
	</label>
	<label class="flex gap-2 items-center">
		<input type="radio" value="offline" bind:group={training.mode} />
		线下学习
	</label>
</div>
