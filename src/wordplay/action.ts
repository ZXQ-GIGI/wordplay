import ActionConfig from './interface/ActionConfig';
import { ActionTypes } from './type';

export default class Action {
  public type: ActionTypes;
  public name: string;
  public next?: string;

  constructor(action: ActionConfig) {
    this.type = 'end';
    this.name = action.name;
    this.next = action.next; 
  }
}