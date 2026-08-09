import type { ApplicationForm } from '$lib/types/application';

export const application = $state<ApplicationForm>({
	courseId: '',

	user: {
		name: '',
		phone: '',
		address: ''
	},

	training: {
		mode: 'online'
	},

	remarks: '',
});
