import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const getUserRepos = (username: string, page = 1, per_page = 100) => {
	const url = `${BASE_URL}/users/${username}/repos?page=${page}&per_page=${per_page}`;
	return axios.get(url).then(response => response.data);
};

const getuserData = (username: string) => {
	const url = `${BASE_URL}/users/${username}`;
	return axios.get(url).then(response => response.data);
};

const getuserOrgs = (username: string, page = 1, per_page = 100) => {
	const url = `${BASE_URL}/users/${username}/orgs?page=${page}&per_page=${per_page}`;
	return axios.get(url).then(response => response.data);
};

export { getuserData, getuserOrgs, getUserRepos };
