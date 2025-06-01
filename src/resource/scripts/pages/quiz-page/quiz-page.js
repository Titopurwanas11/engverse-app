import QuizPagePresenter from "./quiz-page-presenter";
import MockQuizModel from "../../data/mock-quiz-model";

export default class QuizPage {
  #presenter;
  #timerInterval;
  #timeRemaining = 20 * 60;
  #answeredQuestions = new Set();
  #answers = {};

  constructor() {
    this.#presenter = new QuizPagePresenter({
      view: this,
      model: new MockQuizModel(),
    });
  }

  async render() {
    return `
      <section class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-6">
          <button class="text-blue-600 font-semibold">&larr; Back</button>
          <div class="text-right text-blue-600 font-semibold text-sm">
            Timer <span id="timer" class="ml-2 bg-gray-100 border border-blue-400 px-2 py-1 rounded">20:00</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-1">
            <div class="bg-white shadow rounded p-4 mb-4">
              <h2 class="font-bold text-blue-600 mb-2">Quiz Navigation</h2>
              <div id="nav-buttons" class="flex flex-wrap gap-2">
                <!-- Navigation Buttons -->
              </div>
            </div>
            <button class="bg-blue-600 text-white font-semibold px-4 py-2 rounded">Back</button>
          </div>

          <div class="col-span-2 flex flex-col space-y-4">
            <div class="bg-gray-50 shadow rounded p-4">
              <h3 class="font-bold" id="question-number">Question 1</h3>
              <p class="text-gray-500 text-sm" id="answer-status">Not yet answered</p>
              <p class="text-gray-500 text-sm">Marked out of 1.00</p>
            </div>

            <div class="bg-blue-100 rounded p-6 shadow">
              <p class="font-medium mb-4" id="question-text">Loading...</p>
              <div class="space-y-2" id="options-container"></div>
            </div>

            <div class="flex justify-end space-x-2">
              <button id="prev-btn" class="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded font-semibold">Previous</button>
              <button id="next-btn" class="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Next</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter.start();
    this.#startTimer();
     this.bindNavigation(
    () => this.#presenter.prevQuestion(),
    () => this.#presenter.nextQuestion()
  );
  }

  #startTimer() {
    const timerEl = document.getElementById("timer");
    this.#updateTimerDisplay(timerEl);

    this.#timerInterval = setInterval(() => {
      if (this.#timeRemaining <= 0) {
        clearInterval(this.#timerInterval);
        timerEl.textContent = "00:00";
        alert("Time's up! Submitting quiz...");
        return;
      }

      this.#timeRemaining--;
      this.#updateTimerDisplay(timerEl);
    }, 1000);
  }

  #updateTimerDisplay(timerEl) {
    const minutes = String(Math.floor(this.#timeRemaining / 60)).padStart(2, "0");
    const seconds = String(this.#timeRemaining % 60).padStart(2, "0");
    timerEl.textContent = `${minutes}:${seconds}`;
  }

  showLoading() {
    document.getElementById("question-text").textContent = "Loading...";
    document.getElementById("options-container").innerHTML = "";
  }

  showError(message) {
    document.getElementById("question-text").textContent = `Error: ${message}`;
    document.getElementById("options-container").innerHTML = "";
  }

  showQuiz(quizList, currentIndex) {
    const quiz = quizList[currentIndex];
    const questionText = document.getElementById("question-text");
    const questionNumber = document.getElementById("question-number");
    const answerStatus = document.getElementById("answer-status");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");

    questionNumber.textContent = `Question ${currentIndex + 1}`;
    questionText.textContent = `${quiz.question}`;
    optionsContainer.innerHTML = quiz.options
      .map(
        (option) => `
      <label class="flex items-center space-x-2">
        <input type="radio" name="option" value="${option}" class="accent-blue-600"
          ${this.#answers[currentIndex] === option ? "checked" : ""} />
        <span>${option}</span>
      </label>
    `
      )
      .join("");

    answerStatus.textContent = this.#answeredQuestions.has(currentIndex)
      ? "Answered"
      : "Not yet answered";

    if (this.#answeredQuestions.size === quizList.length) {
      nextBtn.textContent = "Submit";
      nextBtn.classList.remove("bg-blue-600");
      nextBtn.classList.add("bg-green-600");
    } else {
      nextBtn.textContent = "Next";
      nextBtn.classList.add("bg-blue-600");
      nextBtn.classList.remove("bg-green-600");
    }

    this.#renderNavButtons(quizList.length, currentIndex);
    this.bindOptionSelect(quiz);
  }

  #renderNavButtons(total, currentIndex) {
    const container = document.getElementById("nav-buttons");
    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
      const btn = document.createElement("button");
      btn.textContent = i + 1;
      btn.dataset.index = i;
      btn.className = `w-8 h-8 rounded text-sm ${
        i === currentIndex
          ? "bg-blue-600 text-white"
          : this.#answeredQuestions.has(i)
          ? "bg-blue-500 text-white"
          : "border border-blue-600 text-blue-600"
      }`;
      btn.addEventListener("click", () => this.#presenter.goToQuestion(i));
      container.appendChild(btn);
    }
  }

  bindNavigation(prevHandler, nextHandler) {
    document.getElementById("prev-btn").addEventListener("click", prevHandler);

    document.getElementById("next-btn").addEventListener("click", () => {
      const nextBtn = document.getElementById("next-btn");

      if (nextBtn.textContent === "Submit") {
        alert("Quiz submitted!");
        clearInterval(this.#timerInterval);
        console.log("Answers:", this.#answers);
        return;
      }

      nextHandler();
    });
  }

  bindOptionSelect(quiz) {
    const optionsContainer = document.getElementById("options-container");

    optionsContainer.querySelectorAll('input[name="option"]').forEach((radio) => {
      radio.addEventListener("change", (event) => {
        const currentIndex = this.#presenter.getCurrentIndex();
        const selectedValue = event.target.value;

        if (quiz.options.includes(selectedValue)) {
          this.#answers[currentIndex] = selectedValue;
          this.#answeredQuestions.add(currentIndex);

          document.getElementById("answer-status").textContent = "Answered";

          const nextBtn = document.getElementById("next-btn");
          if (this.#answeredQuestions.size === this.#presenter.getQuizCount()) {
            nextBtn.textContent = "Submit";
            nextBtn.classList.remove("bg-blue-600");
            nextBtn.classList.add("bg-blue-600");
          }

          this.#renderNavButtons(this.#presenter.getQuizCount(), currentIndex);
        }
      });
    });
  }
}
