<script lang="ts">
	import type { ApplicationRecord } from '$lib/types/application';

	interface Props {
		application: ApplicationRecord;
		onView: () => void;
		onEdit: () => void;
	}

	let { application, onView, onEdit }: Props = $props();
</script>

<div class="rounded-xl border bg-white p-5 shadow-sm">
	<h2 class="text-lg font-bold">
		{application.courseName}
	</h2>
	<p class="mt-2 text-sm text-gray-500">
		开始时间：
		{application.courseStartTime}
	</p>
	<div class="mt-5 flex gap-3">
		<button class="rounded-lg border px-4 py-2" onclick={onView}> 查看 </button>
		<button
			class="rounded-lg bg-blue-600 px-4 py-2 text-white"
			onclick={onEdit}
		>
			修改
		</button>
	</div>
</div>
