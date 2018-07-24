import {Question} from './question.model';

export class SubQuestion {
  private questions: Question[];

  constructor(private inputQuestion: Question[]) {
    this.questions = inputQuestion;
  }

  getQuestions(): Question[] {
    return this.questions;
  }
}
