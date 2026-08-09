<script lang="ts">
	import * as echarts from 'echarts';
	import { onMount } from 'svelte';

	interface Props {
		xAxis: string[];
		data: number[];
	}

	let { xAxis, data }: Props = $props();

	let container: HTMLDivElement;

	onMount(() => {
		const chart = echarts.init(container);

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
					type: 'bar'
				}
			]
		});

		return () => chart.dispose();
	});
</script>

<div bind:this={container} class="h-75 w-full"></div>
