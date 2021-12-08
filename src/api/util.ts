import axios from 'axios';

export const fetchImage = async (url: string) =>
	axios
		.get(url, { responseType: 'blob' })
		.then(imageBlob => URL.createObjectURL(imageBlob.data));
