import type { FormFieldConfig } from '$lib/types/application';

export const extraFields: FormFieldConfig[] = [
	{
		key: 'hotel',
		type: 'radio',
		label: '住宿',
		options: [
			{ value: '1', label: '需要' },
			{ value: '0', label: '不需要' }
		],
	},
	{ key: 'remarks', type: 'input', label: '备注', placeholder: '请输入备注' },
];
