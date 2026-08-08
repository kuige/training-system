<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import type { Course } from '$lib/types/course';

	let { course }: { course: Course } = $props();

	const modeText = {
		online: '线上',
		offline: '线下'
	};
</script>

<Card>
	<h2 class="text-xl font-bold">
		{course.name}
	</h2>

	<p class="mt-2 text-gray-600">
		{course.description}
	</p>

	<div class="mt-4 space-y-2 text-sm">
		<div>
			学习方式：
			{modeText[course.mode]}
		</div>

		<div>
			讲师：
			{course.instructor}
		</div>

		<div>
			时间：
			{course.startTime}
			~
			{course.endTime}
		</div>

		<div>
			人数：
			{course.currentParticipants}
			/
			{course.maxParticipants}
		</div>
	</div>

	<div class="mt-4 flex gap-2">
		{#each course.tags as tag (tag)}
			<span class="rounded bg-gray-100 px-2 py-1 text-xs">
				{tag}
			</span>
		{/each}
	</div>

	<button class="mt-5 rounded bg-black px-4 py-2 text-white"> 查看详情 </button>
</Card>
