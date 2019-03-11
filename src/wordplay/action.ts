import ActionConfig from './interface/ActionConfig';

export default class Action {
  public type: string;
  public name: string;
  public next?: string;

  constructor(action: ActionConfig) {
    this.type = action.type;
    this.name = action.name;
    this.next = action.next; 
  }
}