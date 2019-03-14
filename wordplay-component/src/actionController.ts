import Action from './action';
import { ActionCallbacks } from './interface/ActionCallbacks';

export default class ActionController {
  private parentElement: HTMLElement;
  private actions: Action[];

  private actionCallbacks: ActionCallbacks;

  constructor(parentElement: HTMLElement, actions: Action[], actionCallbacks: ActionCallbacks) {
    this.parentElement = parentElement;
    this.actions = actions;
    this.actionCallbacks = actionCallbacks;
  }

  public ready() {
    this.render(this.actionCallbacks);
  }

  private render(actionCallbacks: ActionCallbacks) {
    if (!this.actions) {
      return;
    }
    const actionsWrapper = document.createElement('div');
    actionsWrapper.setAttribute('style', 'position: absolute; right: 0; bottom: 0; display: inline-block');
    this.actions.forEach(action => {
      action.start(actionsWrapper, actionCallbacks);
    });
    this.parentElement.appendChild(actionsWrapper);
  }
}