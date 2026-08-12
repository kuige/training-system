import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import { describe, it, expect, vi } from 'vitest';
import ApplicationCard from '$lib/components/application/ApplicationCard.svelte';
import type { LearningMode } from '$lib/types/course';

const application = {
	id: 'a001',
	courseId: 'c001',
	courseName: '企业培训',
	courseStartTime: '2026-09-01',
	user: {
		name: '张三',
		phone: '13800000000',
		address: '上海'
	},
	training: {
		mode: 'online' as LearningMode,
	},
};

describe('ApplicationCard', () => {
	it('显示报名课程', async () => {
		render(ApplicationCard, {
			application,
			onView: vi.fn(),
			onEdit: vi.fn()
		});
		await expect.element(page.getByText('企业培训')).toBeInTheDocument();
	});

	it('点击查看按钮触发事件', async () => {
		const view = vi.fn();
		render(ApplicationCard, {
			application,
			onView: view,
			onEdit: vi.fn()
		});
		await page.getByText('查看').click();
		expect(view).toHaveBeenCalled();
	});
});
