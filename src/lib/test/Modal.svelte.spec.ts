import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import { describe, it, expect, vi } from 'vitest';
import Modal from '$lib/components/ui/Modal.svelte';
import { createRawSnippet } from 'svelte';

describe('Modal', () => {
	it('应该显示标题和内容', async () => {
		render(Modal, {
			open: true,
			title: '测试弹窗',
			onClose: vi.fn(),
			children: createRawSnippet(() => ({
        render: () => '<div>测试内容</div>'
      })),
		});
		await expect.element(page.getByText('测试弹窗')).toBeInTheDocument();
		await expect.element(page.getByText('测试内容')).toBeInTheDocument();
	});

	it('点击关闭按钮应该触发关闭', async () => {
		const close = vi.fn();
		render(Modal, {
			open: true,
			title: '关闭测试',
			onClose: close
		});
		await page.getByRole('button').click();
		expect(close).toHaveBeenCalled();
	});
});
