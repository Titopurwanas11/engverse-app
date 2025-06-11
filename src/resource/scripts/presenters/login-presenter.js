export default class LoginPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async getLogin({ email, password }) {
    this.#view.showSubmitLoadingButton();

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!email || !password) {
        this.#view.loginFailed('Email and password are required.');
        return;
      }
      const response = await this.#model.login({ email, password });
      console.log('response from API:', response);

      const { token, user } = response.data;
      this.#model.putAccessToken(token);
      this.#model.saveUserProfile(user);
      console.log('token-presenter:', token);

      window.dispatchEvent(new CustomEvent('user-logged-in'));

      this.#view.loginSuccessfully();
    } catch (error) {
      this.#view.loginFailed(error.message);
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }
}
