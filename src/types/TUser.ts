export type TUser = {
	login: string;
	avatar_url: string;
	html_url: string;
	name?: string;
	company?: string;
	location?: string;
	email?: string;
	hireable?: boolean;
	bio?: string;
	public_repos?: number;
	public_gists?: number;
	followers?: number;
	following?: number;
	created_at?: string;
	updated_at?: string;
};
