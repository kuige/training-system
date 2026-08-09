<script lang="ts">
  import { type Snippet } from 'svelte';

	interface Props {
		open: boolean;
		title: string;
    onClose: () => void;
    children?: Snippet;
	}

	let { open, title, onClose, children }: Props = $props();

  function handleKeydown(
		event: KeyboardEvent
	) {
		if (event.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
		<div class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl relative">
			<h2 class="mb-5 text-xl font-bold">
				{title}
			</h2>
      <button
        class="rounded-lg p-2 text-gray-400 transition hover:text-gray-700 absolute cursor-pointer right-2 top-0"
	      onclick={onClose}
	      aria-label="关闭"
      >
        ✕
      </button>
			{@render children?.()}
		</div>
	</div>
{/if}
