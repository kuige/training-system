<script lang="ts">
  import { type Snippet } from 'svelte';

  let { children }: { children?: Snippet } = $props();
</script>

<div class="rounded-xl border bg-white p-5 shadow-sm">
	{@render children?.()}
</div>
