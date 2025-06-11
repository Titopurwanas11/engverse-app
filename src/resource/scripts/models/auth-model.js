import { login as loginRequest } from '../data/api';
import { logout as logoutApi } from '../data/api';

const ACCESS_TOKEN_KEY = 'access_token';
const USER_PROFILE_KEY = 'user_profile';

export function getAccessToken() {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!accessToken || accessToken === 'null' || accessToken === 'undefined') {
      return null;
    }
    return accessToken;
  } catch (error) {
    console.error('getAccessToken: error:', error);
    return null;
  }
}

export function putAccessToken(token) {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return true;
  } catch (error) {
    console.error('putAccessToken: error:', error);
    return false;
  }
}

export function removeAccessToken() {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    return true;
  } catch (error) {
    console.error('removeAccessToken: error:', error);
    return false;
  }
}

export function saveUserProfile(profile) {
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
    return true;
  } catch (error) {
    console.error('saveUserProfile: error:', error);
    return false;
  }
}

export function getUserProfile() {
  try {
    const profile = localStorage.getItem(USER_PROFILE_KEY);
    return profile ? JSON.parse(profile) : null;
  } catch (error) {
    console.error('getUserProfile: error:', error);
    return null;
  }
}

export function clearUserProfile() {
  try {
    localStorage.removeItem(USER_PROFILE_KEY);
    return true;
  } catch (error) {
    console.error('clearUserProfile: error:', error);
    return false;
  }
}

export async function login({ email, password }) {
  return await loginRequest({ email, password });
}


export async function logoutAll() {
  const token = getAccessToken();
  if (token) {
    try {
      await logoutApi(token);
    } catch (e) {
      console.error('Gagal logout di server:', e.message);
    }
  }

  removeAccessToken();
  clearUserProfile();
}