import type { TrainingReport } from '$lib/types/report';

export const reportData: TrainingReport = {
	summary: {
		total: 156,
		online: 90,
		offline: 66
	},

	courses: [
		{
			name: 'TypeScript高级培训',
			count: 60
		},
		{
			name: '企业前端架构培训',
			count: 50
		},
		{
			name: 'AI开发实践',
			count: 46
		}
	],

	locations: [
		{
			name: '上海培训中心',
			count: 35
		},
		{
			name: '北京培训中心',
			count: 31
		}
	],

	trend: [
		{
			date: '08-01',
			count: 20
		},
		{
			date: '08-05',
			count: 35
		},
		{
			date: '08-10',
			count: 60
		},
		{
			date: '08-15',
			count: 41
		}
	]
};
