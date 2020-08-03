import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID nG1IW_yWpmfqvhLZTvSB-XEZWwQbqw4ZhFipjlhzO7Y',
	},
});
