import { getAccessToken } from "../models/auth-model";

const BASE_URL = 'https://engverse-api-production.up.railway.app';
// const BASE_URL = 'http://localhost:3000';

const ENDPOINTS = {
  LOGIN: `${BASE_URL}/login`,
  REGISTER: `${BASE_URL}/register`,
  LOGOUT: `${BASE_URL}/logout`,
  READING: `${BASE_URL}/practice/reading`,
  STRUCTURE: `${BASE_URL}/practice/structure`,
  LISTENING: `${BASE_URL}/practice/listening`,
};

export async function login({ email, password }) {
  const response = await fetch(ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login gagal');
  }

  return await response.json();
}

export async function register({ name, email, password }) {
  const response = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Register gagal');
  }

  return await response.json();
}

export async function logout(token) {
  const response = await fetch(ENDPOINTS.LOGOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Logout gagal');
  }

  return await response.json();
}

export async function getReadingQuestions() {
  const token = getAccessToken();
  console.log('[DEBUG] Token:', token);
  const response = await fetch(ENDPOINTS.READING, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Gagal mengambil soal reading');
  }

  return response.json();
}

export async function getStructureQuestions() {
  const token = getAccessToken();
  const response = await fetch(ENDPOINTS.STRUCTURE, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Gagal mengambil soal structure');
  }
  return response.json();
}

export async function getListeningQuestions() {
  const token = getAccessToken();
  const response = await fetch(ENDPOINTS.LISTENING, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Gagal mengambil soal listening');
  }
  return response.json();
}
