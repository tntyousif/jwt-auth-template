// src/services/authService.js

const BACKEND_URL = 'http://localhost:3000'; // this is our Express API url

const signup = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (json.err) {
      throw new Error(json.err);
    }
    return json;
  } catch (err) {
    console.log(err);
    throw err;
  }
};


const signin = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const json = await res.json();

    if (json.error) {
      localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage
    }

    if (json.token) {
      const user = JSON.parse(atob(json.token.split('.')[1]));
      return user;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const signout = () => {
  localStorage.removeItem('token');
};

export { signup, signin, getUser, signout };

export { signup, signin };