import {InputType} from './input-type.model';

export class Question {
  private description: string;
  private inputType: InputType;
  private condition: any;

  constructor(private descr: string, private  input: InputType, private con: any) {
    this.description = descr;
    this.inputType = input;
    this.condition = con;
  }

  getdesciption(): string {
    if (!undefined) {
      return this.description;
    }
  }

  getInputType(): InputType {
    return this.inputType;
  }

  getCondition(): any {
    return this.condition;
  }
}
