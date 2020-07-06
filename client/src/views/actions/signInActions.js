import { SIGN_IN } from "./types";

export const loginUser = (postData) => (dispatch) => {
  fetch("http://localhost:5000/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      // 'x-auth-token': localStorage.getItem('  ')
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: SIGN_IN,
        payload: post,
      })
    );
};
