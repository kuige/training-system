import type { ApplicationRecord } from '$lib/types/application';

export const applications: ApplicationRecord[] = [
	{
		id: 'a001',
		courseId: 'c001',
		courseName: 'TypeScript高级培训',
		courseStartTime: '2026-09-01',
		user: {
			name: '张三',
			phone: '13800138000',
			address: '上海浦东'
		},
		training: {
			mode: 'online'
		},
	},
	{
		id: 'a002',
		courseId: 'c002',
		courseName: '企业前端架构培训',
		courseStartTime: '2026-08-10',
		user: {
			name: '李四',
			phone: '13900139000',
			address: '北京'
		},
		training: {
			mode: 'offline',
			locationId: '上海培训中心',
			time: '2026-08-20 09:00'
		},
	}
];
