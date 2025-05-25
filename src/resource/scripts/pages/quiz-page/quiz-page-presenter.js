import { quizMapper } from "../../data/quiz-mapper";

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
      const response = await this.#model.getAllQuiz();

      if (!response.ok) {
        this.#view.showError(response.message || "Failed to fetch quiz");
        return;
      }

      this.#quizList = response.data.map(quizMapper);
      this.renderCurrentQuiz();
    } catch (error) {
      this.#view.showError(error.message || "An error occurred");
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
