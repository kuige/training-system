<script lang="ts">
	import type { UserInfo } from '$lib/types/application';

	interface Props {
		user: UserInfo;
	}

	let { user = $bindable() }: Props = $props();
</script>

<div class="space-y-4">
	<input class="w-full rounded-lg border p-3" placeholder="姓名" bind:value={user.name} />
	<input class="w-full rounded-lg border p-3" placeholder="联系电话" bind:value={user.phone} />
	<input class="w-full rounded-lg border p-3" placeholder="地址" bind:value={user.address} />
</div>
