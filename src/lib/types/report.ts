export interface SummaryReport {
	total: number;
	online: number;
	offline: number;
}

export interface CourseReport {
	name: string;
	count: number;
}

export interface LocationReport {
	name: string;
	count: number;
}

export interface TrendReport {
	date: string;
	count: number;
}

export interface TrainingReport {
	summary: SummaryReport;
	courses: CourseReport[];
	locations: LocationReport[];
	trend: TrendReport[];
}
