import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Question} from './question.model';
import {DetailsService} from './details.service';
import {SubQuestion} from './subquestion.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  detailForm: FormGroup;


  listOfQuestions: Question[];

  subQuestion: SubQuestion[];

  indexX = 0;
  indexY = 0;

  disableButton: boolean[][] = [[], []];

  constructor(private listOfQuestionService: DetailsService) {
  }

  ngOnInit() {
    this.listOfQuestions = this.listOfQuestionService.getAllQuestion();
    this.subQuestion = this.listOfQuestionService.getAllSubQuestions();
    this.detailForm = new FormGroup({
      inputQuestion: new FormArray([]),
    });
  }

  initSection() {
    return new FormGroup({
      questions: new FormArray([
        this.initQuestion()
      ])
    });
  }

  initQuestion() {
    const check_y = this.indexY > this.subQuestion[this.indexX].getQuestions().length - 1;
    if (check_y) {
      return new FormGroup({
        questionTitle: new FormControl('Enter desire question'),
        questionType: new FormControl('', Validators.required),
        questionAnswer: new FormControl('', Validators.required)
      });
    } else {
      const innerText = this.subQuestion[this.indexX].getQuestions()[this.indexY].getdesciption();
      const innerType = this.subQuestion[this.indexX].getQuestions()[this.indexY].getInputType();
      return new FormGroup({
        questionTitle: new FormControl(innerText),
        questionType: new FormControl(innerType, Validators.required),
        questionAnswer: new FormControl('', Validators.required)
      });
    }
  }

  addInputQuestion() {
    const control = <FormArray>this.detailForm.controls['inputQuestion'];
    this.indexX = control.length;
    this.indexY = 0;
    control.push(this.initSection());
  }

  addQuestion(i) {
    const control = <FormArray>this.detailForm.get('inputQuestion').controls[i].get('questions');
    this.indexY = control.length;
    this.indexX = i;
    control.push(this.initQuestion());
  }

  getInputQuestion(form) {
    return form.controls.inputQuestion.controls;
  }

  getQuestions(form) {
    console.log(form.controls.questions.controls);
    return form.controls.questions.controls;
  }

  removeQuestion(i, j) {
    const control = <FormArray>this.detailForm.get('inputQuestion').controls[i].get('questions');
    control.removeAt(j);
    this.disableButton[i][j - 1] = false;
  }

  removeSection(i) {
    const control = <FormArray>this.detailForm.get('inputQuestion');
    control.removeAt(i);

  }

  submitSubInput(i: number, j: number) {
    const form = (<FormArray>this.detailForm.get('inputQuestion')).at(i).controls;
    const questionType = form.questions.at(j).get('questionType').value;
    const questionAnswer = form.questions.at(j).get('questionAnswer').value;
    switch (questionType) {
      case 'YES?NO':
        if (questionAnswer === this.subQuestion[i].getQuestions()[j].getCondition()) {
          this.addQuestion(i);
          this.afterAdding(i, j);
        }
        break;
      case 'Number':
        if (questionAnswer > this.subQuestion[i].getQuestions()[j].getCondition()) {
          this.addQuestion(i);
          this.afterAdding(i, j);
        }
        break;
      case 'TEXT':
        if (questionAnswer === this.subQuestion[i].getQuestions()[j].getCondition()) {
          this.addQuestion(i);
          this.afterAdding(i, j);
        }
        break;
      default:
        this.addQuestion(i);
        break;
    }

  }

  private afterAdding(i, j) {
    this.disableButton[i][j] = true;
    this.onSubmit(this.detailForm);
  }

  onSubmit(form) {
    const formInput = form.getRawValue();
    const serializedForm = JSON.stringify(formInput);
  }
}


