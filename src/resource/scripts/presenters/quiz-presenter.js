export default class QuizPagePresenter {
  #view;
  #model;
  #quizList = [];
  #currentIndex = 0;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async start() {
    this.#view.showLoading();
    try {
      const data = await this.#model.getQuestions();
      console.log('[DEBUG] Data quiz:', data);

      this.#quizList = data.data.questions;
      this.#view.showQuiz(this.#quizList, this.#currentIndex);
    } catch (err) {
      console.error('[ERROR]', err);
      this.#view.showError('Failed to load questions');
    }
  }


  renderCurrentQuiz() {
    if (this.#quizList.length === 0) return;

    this.#view.showQuiz(this.#quizList, this.#currentIndex);
  }

  prevQuestion() {
    if (this.#currentIndex > 0) {
      this.#currentIndex--;
      this.renderCurrentQuiz();
    }
  }

  nextQuestion() {
    if (this.#currentIndex < this.#quizList.length - 1) {
      this.#currentIndex++;
      this.renderCurrentQuiz();
    }
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.#quizList.length) {
      this.#currentIndex = index;
      this.renderCurrentQuiz();
    }
  }

  getCurrentIndex() {
    return this.#currentIndex;
  }

  getQuizCount() {
    return this.#quizList.length;
  }
}
