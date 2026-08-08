<script lang="ts">
  import CourseCard from '$lib/components/course/CourseCard.svelte';
	import { courses } from '$lib/mock/courses';
</script>

<svelte:head>
	<title>课程列表</title>
</svelte:head>

<div class="mx-auto max-w-6xl p-6">
	<h1 class="mb-6 text-3xl font-bold">培训课程</h1>

	<div class="grid gap-6 md:grid-cols-3">
		{#each courses as course (course.id)}
			<CourseCard {course} />
		{/each}
	</div>
</div>
