import { getReadingQuestions, getListeningQuestions, getStructureQuestions } from '../data/api';

export default class QuizModel {
  #section;

  constructor(section) {
    this.#section = section;
  }

  async getQuestions() {
    switch (this.#section) {
      case 'reading':
        return await getReadingQuestions();
      case 'listening':
        return await getListeningQuestions();
      case 'structure':
        return await getStructureQuestions();
      default:
        throw new Error('Invalid section');
    }
  }
}
