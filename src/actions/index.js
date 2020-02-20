import axios from 'axios';

import { types } from './types.js';

export const fetchPosts = () => async dispatch => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    dispatch({
        type: types.GET_POSTS,
        payload: posts.data
    });
};
