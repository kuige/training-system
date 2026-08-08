import type { Course } from '$lib/types/course';

export const courses: Course[] = [
	{
		id: 'c001',
		name: 'TypeScript高级培训',
		description: '深入学习TypeScript类型系统和工程实践',
		mode: 'online',
		startTime: '2026-09-01',
		endTime: '2026-09-05',
		enrollDeadline: '2026-08-30',
		maxParticipants: 100,
		currentParticipants: 56,
		instructor: '张老师',
		tags: ['TS', '前端']
	},
	{
		id: 'c002',
		name: '企业前端架构培训',
		description: '线下学习企业级前端架构设计',
		mode: 'offline',
		startTime: '2026-09-10',
		endTime: '2026-09-12',
		enrollDeadline: '2026-09-08',
		maxParticipants: 50,
		currentParticipants: 35,
		instructor: '李老师',
		tags: ['架构', '工程化']
	},
];
