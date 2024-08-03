export interface HhResponse {
	items: Vacancy[];
	found: number;
	pages: number;
	page: number;
	per_page: number;
	clusters: Cluster[];
	arguments: any;
	fixes: any;
	suggests: any;
	alternate_url: string;
}

export interface Vacancy {
	id: string;
	premium: boolean;
	name: string;
	department: any;
	has_test: boolean;
	response_letter_required: boolean;
	area: Area;
	salary?: Salary;
	type: Type;
	address?: Address;
	response_url: any;
	sort_point_distance: any;
	published_at: string;
	created_at: string;
	archived: boolean;
	apply_alternate_url: string;
	branding?: Branding;
	show_logo_in_search?: boolean;
	insider_interview?: InsiderInterview;
	url: string;
	alternate_url: string;
	relations: any[];
	employer: Employer;
	snippet: Snippet;
	contacts: any;
	schedule: Schedule;
	working_days: any[];
	working_time_intervals: WorkingTimeInterval[];
	working_time_modes: WorkingTimeMode[];
	accept_temporary: boolean;
	professional_roles: ProfessionalRole[];
	accept_incomplete_resumes: boolean;
	experience: Experience;
	employment: Employment;
	adv_response_url: any;
	is_adv_vacancy: boolean;
	adv_context: any;
}

export interface Area {
	id: string;
	name: string;
	url: string;
}

export interface Salary {
	from: number;
	to?: number;
	currency: string;
	gross: boolean;
}

export interface Type {
	id: string;
	name: string;
}

export interface Address {
	city?: string;
	street?: string;
	building?: string;
	lat?: number;
	lng?: number;
	description: any;
	raw?: string;
	metro?: Metro;
	metro_stations: MetroStation[];
	id: string;
}

export interface Metro {
	station_name: string;
	line_name: string;
	station_id: string;
	line_id: string;
	lat: number;
	lng: number;
}

export interface MetroStation {
	station_name: string;
	line_name: string;
	station_id: string;
	line_id: string;
	lat: number;
	lng: number;
}

export interface Branding {
	type: string;
	tariff?: string;
}

export interface InsiderInterview {
	id: string;
	url: string;
}

export interface Employer {
	id: string;
	name: string;
	url: string;
	alternate_url: string;
	logo_urls?: LogoUrls;
	vacancies_url: string;
	accredited_it_employer: boolean;
	trusted: boolean;
}

export interface LogoUrls {
	'240': string;
	'90': string;
	original: string;
}

export interface Snippet {
	requirement: string;
	responsibility?: string;
}

export interface Schedule {
	id: string;
	name: string;
}

export interface WorkingTimeInterval {
	id: string;
	name: string;
}

export interface WorkingTimeMode {
	id: string;
	name: string;
}

export interface ProfessionalRole {
	id: string;
	name: string;
}

export interface Experience {
	id: string;
	name: string;
}

export interface Employment {
	id: string;
	name: string;
}

export interface Cluster {
	name: string;
	id: string;
	items: ClassterElement[];
}

export interface ClassterElement {
	name: string;
	url: string;
	count: number;
}
