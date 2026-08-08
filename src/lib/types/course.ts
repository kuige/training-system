export type LearningMode = 'online' | 'offline';

export interface Course {
	id: string;
	name: string;
	description: string;
	mode: LearningMode;
	startTime: string;
	endTime: string;
	enrollDeadline: string;
	maxParticipants: number;
	currentParticipants: number;
	instructor: string;
	tags: string[];
}
