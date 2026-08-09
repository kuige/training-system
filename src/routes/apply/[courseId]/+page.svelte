<script lang="ts">
	import { page } from '$app/state';
	import { application } from '$lib/stores/application.svelte';
	import { locations } from '$lib/mock/location';
  import { modeText } from '$lib/utils/textMapping';
	import Stepper from '$lib/components/application/Stepper.svelte';
	import UserForm from '$lib/components/application/UserForm.svelte';

	const steps = [
		{ label:'个人信息' },
		{ label:'学习方式' },
		{ label:'地点时间' },
		{ label:'扩展信息' },
		{ label:'确认提交' }
	];

	application.courseId = page.params.courseId || '';

	let step = $state(1);

	function next() {
		step++;
	}

	function prev() {
		step--;
	}

	function changeStep(index: number) {
		step = index;
	}

  function getLocationName(locationId: string) {
    const location = locations.find((loc) => loc.id === locationId);
    return location ? location.name : '';
  }
</script>

<div class="mx-auto max-w-3xl p-6">
	<h1 class="mb-6 text-3xl font-bold">课程报名</h1>
	<Stepper steps={steps} current={step} onChange={changeStep} />
	<div class="mb-6"></div>
	{#if step === 1}
		<h2 class="mb-4 text-xl">个人信息</h2>
		<UserForm bind:user={application.user} />
	{/if}

	{#if step === 2}
		<h2 class="mb-4 text-xl">学习方式</h2>
		<label>
			<input type="radio" value="online" bind:group={application.training.mode} />
			线上学习
		</label>
		<label class="ml-5">
			<input type="radio" value="offline" bind:group={application.training.mode} />
			线下学习
		</label>
	{/if}

	{#if step === 3}
		<h2 class="mb-4 text-xl">培训地点和时间</h2>
		{#if application.training.mode === 'offline'}
			<select class="w-full border p-2" bind:value={application.training.locationId}>
				<option value=""> 选择地点 </option>
				{#each locations as location (location.id)}
					<option value={location.id}>
						{location.name}
					</option>
				{/each}
			</select>
			<input
				class="mt-4 w-full border p-2"
				type="datetime-local"
				bind:value={application.training.time}
			/>
		{:else}
			<p>线上学习无需选择地点</p>
		{/if}
	{/if}

	{#if step === 4}
		<h2 class="mb-4 text-xl">其他信息</h2>
		<input class="mb-3 w-full border p-2" bind:value={application.remarks} />
	{/if}

	{#if step === 5}
		<h2 class="mb-4 text-xl">信息确认</h2>
		<div class="space-y-2 border p-4">
			<p>
				姓名：
				{application.user.name}
			</p>
			<p>
				电话：
				{application.user.phone}
			</p>
			<p>
				学习方式：
				{modeText[application.training.mode]}
			</p>
			<p>
				地点：
				{getLocationName(application.training.locationId || '')}
			</p>
			<p>
				时间：
				{application.training.time}
			</p>
		</div>
	{/if}

	<div class="mt-8 flex gap-4">
		{#if step > 1}
			<button class="border px-4 py-2 rounded-lg" onclick={prev}> 上一步 </button>
		{/if}
		{#if step < 5}
			<button class="bg-black px-4 py-2 text-white rounded-lg" onclick={next}> 下一步 </button>
		{:else}
			<button class="bg-green-600 px-4 py-2 text-white rounded-lg"> 提交报名 </button>
		{/if}
	</div>
</div>
