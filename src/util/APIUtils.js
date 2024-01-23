import { ACCESS_TOKEN, API_BASE_URL } from '../constants';
import { SidebarData } from '../constants/SidebarData';

const request = async (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN));
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  const response = await fetch(options.url, options);
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json);
  }
  return json;
};

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject('No access token set.');
  }
  // thie function return Promise objecct.
  return request({
    url: API_BASE_URL + '/user_auth/me',
    method: 'GET',
  });
}

export function removeCurrentUser() {
  localStorage.removeItem(ACCESS_TOKEN);
  return null;
}
export function login(loginRequest) {
  return request({
    url: API_BASE_URL + '/auth/signin',
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + '/auth/signup',
    method: 'POST',
    body: JSON.stringify(signupRequest),
  });
}

export function getMenu(user) {
  return SidebarData;
}
