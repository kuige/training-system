<script lang="ts">
  import { resolve } from '$app/paths';
	import FeatureCard from '$lib/components/home/FeatureCard.svelte';

	const features = [
		{
			icon: '📚',
			title: '课程中心',
			description: '浏览培训课程，选择适合自己的学习计划',
			path: '/courses'
		},

		{
			icon: '📝',
			title: '在线报名',
			description: '支持线上、线下培训快速申请',
			path: '/courses'
		},

		{
			icon: '📊',
			title: '数据报表',
			description: '查看培训报名趋势和统计分析',
			path: '/report'
		}
	];
</script>

<section class="relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 py-24">
		<div class="max-w-3xl">
			<div
				class="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600">
				企业数字化学习平台
			</div>
			<h1 class="mt-6 text-5xl leading-tight font-bold text-gray-900">
				打造高效的企业培训与学习管理体系
			</h1>
			<p class="mt-6 text-lg text-gray-500">
				统一管理课程、培训报名、 学习计划以及培训数据分析， 帮助企业提升人才培养效率。
			</p>
			<div class="mt-8 flex gap-4">
				<a
					href={resolve('/courses')}
					class="rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg transition hover:bg-blue-700"
        >
					开始学习
				</a>
				<a
					href={resolve('/report')}
					class="rounded-xl border bg-white px-6 py-3"
			  >
					查看数据
				</a>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 pb-20">
	<h2 class="mb-8 text-3xl font-bold">
		平台能力
	</h2>
	<div class="grid gap-6 md:grid-cols-3">
		{#each features as item (item.title)}
			<FeatureCard {...item} />
		{/each}
	</div>
</section>
