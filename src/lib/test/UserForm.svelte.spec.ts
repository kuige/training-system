import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';

import UserForm from '$lib/components/application/UserForm.svelte';

describe('UserForm', () => {
	it('应该显示用户信息输入框', async () => {
		render(UserForm, {
			user: {
				name: '',
				phone: '',
				address: ''
			}
		});
		await expect.element(page.getByPlaceholder('姓名')).toBeInTheDocument();
		await expect.element(page.getByPlaceholder('联系电话')).toBeInTheDocument();
		await expect.element(page.getByPlaceholder('地址')).toBeInTheDocument();
	});

	it('应该显示已有用户信息', async () => {
		render(UserForm, {
			user: {
				name: '张三',
				phone: '13800138000',
				address: '上海'
			}
		});
		await expect.element(page.getByTestId('name')).toHaveValue('张三');
		await expect.element(page.getByTestId('phone')).toHaveValue('13800138000');
		await expect.element(page.getByTestId('address')).toHaveValue('上海');
	});
});
