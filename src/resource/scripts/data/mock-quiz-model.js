const mockQuizData = [
  {
    id: 1,
    question: 'What is your favorite season?',
    options: ['Summer', 'Winter', 'Spring', 'Autumn'],
    correct_answer: 'Spring',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    correct_answer: 'Mars',
  },
  {
    id: 3,
    question: 'What is the capital of Japan?',
    options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
    correct_answer: 'Tokyo',
  },
  {
    id: 4,
    question: 'What gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correct_answer: 'Carbon Dioxide',
  },
  {
    id: 5,
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Mark Twain', 'Jane Austen', 'Leo Tolstoy'],
    correct_answer: 'William Shakespeare',
  },
];

export default class MockQuizModel {
  async getAllQuiz() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          data: mockQuizData,
          message: 'Mock quiz loaded successfully',
        });
      }, 500); // simulasi delay 500ms
    });
  }
}
