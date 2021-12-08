import { TUser } from 'types/TUser';

export type TRepository = {
	name: string;
	full_name: string;
	owner: TUser;
	html_url: string;
	description: string;
	language: string;
	forks: number;
	stargazers_count: number;
	updated_at: string;
	pushed_at: string;
};
