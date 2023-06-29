import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token || null
  };

  const getUsername = () => {
    const usernameString = localStorage.getItem('username');
    const username = JSON.parse(usernameString);
    return username;
  };

  const [token, setToken] = useState(getToken());
  const [username, setUsername] = useState(getUsername());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    localStorage.setItem('username', JSON.stringify(username));
    setToken(userToken.token);
    setUsername(username);
  };

  return {
    setToken: saveToken,
    token,
    username
  }
}