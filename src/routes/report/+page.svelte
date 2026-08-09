<script lang="ts">
	import { reportData as data } from '$lib/mock/report';
	import LineChart from '$lib/components/chart/LineChart.svelte';
	import BarChart from '$lib/components/chart/BarChart.svelte';
	import PieChart from '$lib/components/chart/PieChart.svelte';
</script>

<svelte:head>
	<title>培训统计报表</title>
</svelte:head>

<div class="mx-auto max-w-6xl p-6">
	<h1 class="mb-6 text-3xl font-bold">培训统计报表</h1>

	<div class="mb-8 grid grid-cols-3 gap-4">
		<div class="rounded border p-5">
			<p>总报名人数</p>
			<h2 class="text-3xl font-bold">
				{data.summary.total}
			</h2>
		</div>

		<div class="rounded border p-5">
			<p>线上报名</p>
			<h2 class="text-3xl font-bold">
				{data.summary.online}
			</h2>
		</div>

		<div class="rounded border p-5">
			<p>线下报名</p>
			<h2 class="text-3xl font-bold">
				{data.summary.offline}
			</h2>
		</div>
	</div>

	<div class="grid gap-8">
		<section class="rounded border p-5">
			<h2 class="mb-4 text-xl font-bold">报名趋势</h2>
			<LineChart
				xAxis={data.trend.map((item) => item.date)}
				data={data.trend.map((item) => item.count)}
			/>
		</section>

		<section class="rounded border p-5">
			<h2 class="mb-4 text-xl font-bold">课程报名统计</h2>
			<BarChart
				xAxis={data.courses.map((item) => item.name)}
				data={data.courses.map((item) => item.count)}
			/>
		</section>

		<section class="rounded border p-5">
			<h2 class="mb-4 text-xl font-bold">学习方式比例</h2>
			<PieChart
				data={[
					{
						name: '线上',
						value: data.summary.online
					},
					{
						name: '线下',
						value: data.summary.offline
					}
				]}
			/>
		</section>
	</div>
</div>
