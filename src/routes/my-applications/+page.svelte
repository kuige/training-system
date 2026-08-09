<script lang="ts">
	import { applications } from '$lib/mock/applications';
	import ApplicationCard from '$lib/components/application/ApplicationCard.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import type { ApplicationRecord } from '$lib/types/application';
	import { modeText } from '$lib/utils/textMapping';

	let selected = $state<ApplicationRecord | null>(null);
	let modalType = $state<'view' | 'edit' | null>(null);

	function openView(item: ApplicationRecord) {
		selected = item;
		modalType = 'view';
	}

	function openEdit(item: ApplicationRecord) {
		selected = item;
		modalType = 'edit';
	}

	function canEdit(item: ApplicationRecord) {
		const start = new Date(item.courseStartTime);
		const now = new Date();
		const diff = start.getTime() - now.getTime();
		return diff > 24 * 60 * 60 * 1000;
	}
</script>

<div class="mx-auto max-w-7xl px-6 py-10">
	<h1 class="mb-8 text-3xl font-bold">我的报名</h1>
	<div class="grid gap-6 md:grid-cols-3">
		{#each applications as item (item.id)}
			<ApplicationCard
				application={item}
				onView={() => openView(item)}
				onEdit={() => openEdit(item)}
			/>
		{/each}
	</div>
</div>

<Modal
	open={modalType !== null}
	title={modalType === 'view' ? '报名详情' : '修改报名信息'}
	onClose={() => {
		modalType = null;
		selected = null;
	}}
>
	{#if selected}
		{#if modalType === 'view'}
			<div class="space-y-3">
				<p>
					姓名：
					{selected.user.name}
				</p>
				<p>
					电话：
					{selected.user.phone}
				</p>
				<p>
					地址：
					{selected.user.address}
				</p>
				<p>
					学习方式：
					{modeText[selected.training.mode]}
				</p>
				{#if selected.training.mode === 'offline'}
					<p>
						培训地点：
						{selected.training.locationId}
					</p>
				{/if}
			</div>
		{:else}
			{#if canEdit(selected)}
				<div class="space-y-4">
					<input class="w-full border p-2" bind:value={selected.user.phone} />
					<input class="w-full border p-2" bind:value={selected.user.address} />
					<button class="rounded bg-blue-600 px-4 py-2 text-white">
						保存
					</button>
				</div>
			{:else}
				<p class="text-red-500">课程开始前一天不可修改</p>
			{/if}
		{/if}
	{/if}
</Modal>
