import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import { describe, it, expect } from 'vitest';
import CourseCard from '$lib/components/course/CourseCard.svelte';
import type { LearningMode } from '$lib/types/course';

const course = {
	id: 'c001',
	name: 'TypeScript高级培训',
	description: 'TS学习',
	mode: 'online' as LearningMode,
	startTime: '2026-09-01',
	endTime: '2026-09-05',
	enrollDeadline: '2026-08-30',
	maxParticipants: 100,
	currentParticipants: 50,
	instructor: '张老师',
	tags: ['TS']
};

describe('CourseCard', () => {
	it('应该显示课程信息', async () => {
		render(CourseCard, {
			course
		});
		await expect.element(page.getByText('TypeScript高级培训')).toBeInTheDocument();
		await expect.element(page.getByText('张老师')).toBeInTheDocument();
	});

	it('应该存在报名按钮', async () => {
		render(CourseCard, {
			course
		});
		await expect.element(page.getByText('立即报名')).toBeInTheDocument();
	});
});
