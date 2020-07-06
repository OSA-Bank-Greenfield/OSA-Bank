import {SIGN_UP } from './types';

export const createUser = postData => dispatch => {
  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // 'x-auth-token': localStorage.getItem('  ')
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: SIGN_UP,
        payload: post
      })
    );
};
