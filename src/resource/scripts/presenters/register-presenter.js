import { register } from '../data/api'; 

export default class RegisterPresenter {
  constructor(view) {
    this.view = view;
  }

  async handleRegister({ name, email, password, confirmPassword }) {
    this.view.clearError();

    if (!name || !email || !password || !confirmPassword) {
      return this.view.showError('Please fill out all fields.');
    }

    if (password.length < 6) {
      return this.view.showError('Password must be at least 6 characters.');
    }

    if (password !== confirmPassword) {
      return this.view.showError('Passwords do not match.');
    }

    try {
      await register({ name, email, password });
      this.view.showSuccess();
    } catch (error) {
      this.view.showError(error.message || 'Registration failed. Please try again.');
    }
  }
}