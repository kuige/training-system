<script lang="ts">
	import echarts from '$lib/utils/echarts';
	import { onMount } from 'svelte';

	interface Props {
		data: {
			name: string;
			value: number;
		}[];
	}

	let { data }: Props = $props();

	let container: HTMLDivElement;
	let chart: echarts.ECharts;
	let resizeTimer: ReturnType<typeof setTimeout>;

	onMount(() => {
		chart = echarts.init(container);

		chart.setOption({
			series: [
				{
					type: 'pie',
					data
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
