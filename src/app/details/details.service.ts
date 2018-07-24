import {Injectable} from '@angular/core';
import {Question} from './question.model';
import {InputType} from './input-type.model';
import {SubQuestion} from './subquestion.model';


@Injectable()

export class DetailsService {
  private listQuestions: Question[] = [
    new Question('Do you own a car?', InputType.RADIO, 'YES'),
    new Question('What is your cars model ? ', InputType.TEXT, 'Ford'),
    new Question('What color is your car?', InputType.TEXT, 'Ford'),
    new Question('How many wheels on your car?', InputType.NUMBER, 3),
    new Question('Has your car been recalled?', InputType.RADIO, 'NO'),
    new Question('What year was your building built?', InputType.NUMBER, 4),
    new Question('What is your year date of birth?', InputType.TEXT, 1990),

  ];

  subQuestion: SubQuestion[] = [
    new SubQuestion([
      new Question('Do you own a car?', InputType.RADIO, 'YES'),
      new Question('What is your cars model ? ', InputType.TEXT, 'Ford'),
      new Question('What color is your car?', InputType.TEXT, 'Ford'),
      new Question('How many wheels on your car?', InputType.NUMBER, 3),
      new Question('Has your car been recalled?', InputType.RADIO, 'NO'),
      new Question('What year was your building built?', InputType.NUMBER, 4),
      new Question('What is your year date of birth?', InputType.TEXT, 1990),

    ]),
    new SubQuestion([
      new Question('How many wheels on your car?', InputType.NUMBER, 3),
      new Question('Has your car been recalled?', InputType.RADIO, 'NO'),
      new Question('What year was your building built?', InputType.NUMBER, 4),
      new Question('What is your year date of birth?', InputType.TEXT, 1990),
    ]),
    new SubQuestion([
      new Question('Whats your company name?', InputType.TEXT, ''),
      new Question('Do you own a car?', InputType.RADIO, 'YES'),
      new Question('What is your cars model ? ', InputType.TEXT, 'Ford'),
      new Question('What color is your car?', InputType.TEXT, 'Ford')
    ])
  ];

  getAllQuestion(): Question[] {
    return this.listQuestions.slice();
  }

  getAllSubQuestions(): SubQuestion[] {
    return this.subQuestion.slice();
  }
}
