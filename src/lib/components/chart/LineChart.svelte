<script lang="ts">
	import { onMount } from 'svelte';
	import echarts from '$lib/utils/echarts';

	interface Props {
		xAxis: string[];
		data: number[];
	}

	let { xAxis, data }: Props = $props();

	let container: HTMLDivElement;
	let chart: echarts.ECharts;
	let resizeTimer: ReturnType<typeof setTimeout>;

	onMount(() => {
		chart = echarts.init(container);

		chart.setOption({
			xAxis: {
				type: 'category',
				data: xAxis
			},

			yAxis: {
				type: 'value'
			},

			series: [
				{
					data,
					type: 'line'
				}
			]
		});

		return () => chart.dispose();
	});

	$effect(() => {
    const handler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => chart?.resize(), 200);
    };
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
      clearTimeout(resizeTimer);
    };
  });
</script>

<div bind:this={container} class="h-75 w-full"></div>
