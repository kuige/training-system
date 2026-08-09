<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  
	const menus = [
		{
			name: '课程中心',
			path: '/courses'
		},
		{
			name: '我的报名',
			path: '/my-applications'
		},
		{
			name: '统计报表',
			path: '/report'
		}
	];
</script>

<header class="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<a href={resolve('/')} class="flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white"
			>
				T
			</div>

			<div>
				<h1 class="font-bold text-gray-900">Training Hub</h1>
				<p class="text-xs text-gray-500">企业培训管理平台</p>
			</div>
		</a>

		<nav class="flex gap-8">
			{#each menus as menu (menu.path)}
				<a href={resolve(menu.path as Pathname)} class="text-sm text-gray-600 transition hover:text-blue-600">
					{menu.name}
				</a>
			{/each}
		</nav>
	</div>
</header>
