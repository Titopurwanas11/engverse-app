
export function quizMapper(quiz) {
  return {
    id: quiz.id,
    question: quiz.question,
    options: quiz.options,
    correctAnswer: quiz.correct_answer,
  };
}
