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

	onMount(() => {
		const chart = echarts.init(container);

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
</script>

<div bind:this={container} class="h-75 w-full"></div>
