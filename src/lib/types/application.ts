import type { LearningMode } from './course';

export interface UserInfo {
	name: string;
	phone: string;
	address: string;
}

export interface TrainingInfo {
	mode: LearningMode;
	locationId?: string;
	time?: string;
}

export interface ApplicationForm {
	courseId: string;
	user: UserInfo;
	training: TrainingInfo;
	remarks: string;
}

export interface ApplicationRecord {
	id: string;
	courseId: string;
	courseName: string;
	courseStartTime: string;
	user: UserInfo;
	training: TrainingInfo;
}


// 动态表单类型定义

export type FormFieldType = 'input' | 'radio' | 'select';

export interface FormFieldConfig {
	key: string;
	type: FormFieldType;
	label: string;
	placeholder?: string;
	options?: Array<{ value: string; label: string }>;
}
