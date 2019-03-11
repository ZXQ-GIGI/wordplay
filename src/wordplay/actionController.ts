import Action from './action';
import { ActionCallbacks } from './interface/ActionCallbacks';

export default class ActionController {
  private actions?: Action[];
  constructor(actions: Action[]) {
    this.actions = actions;
  }

  public start(parentElement: HTMLElement, actionCallbacks: ActionCallbacks) {
    this.render(parentElement, actionCallbacks);
  }

  private render(parentElement: HTMLElement, actionCallbacks: ActionCallbacks) {
    if (!this.actions) {
      return;
    }
    const actionsWrapper = document.createElement('div');
    actionsWrapper.setAttribute('style', 'position: absolute; right: 0; bottom: 0; display: inline-block');
    this.actions.forEach(action => {
      action.start(actionsWrapper, actionCallbacks);
    });
    parentElement.appendChild(actionsWrapper);
  }
}