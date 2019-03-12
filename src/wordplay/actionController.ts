import Action from './action';
import { ActionCallbacks } from './interface/ActionCallbacks';
// import { Func } from './type';

export default class ActionController {
  private parentElement: HTMLElement;
  private actions?: Action[];

  // private onNext: Func;
  // private onJump: (name: string) => Func;
  // private onEnd: Func;

  private actionCallbacks: ActionCallbacks;

  constructor(parentElement: HTMLElement, actions: Action[], actionCallbacks: ActionCallbacks) {
    this.parentElement = parentElement;
    this.actions = actions || [];
    // this.initEvents(actionCallbacks);
    this.actionCallbacks = actionCallbacks;
  }

  public ready() {
    this.render(this.actionCallbacks);
  }

  // private initEvents(actionCallbacks: ActionCallbacks) {
  //   if (actionCallbacks.onNext) {
  //     this.onNext = actionCallbacks.onNext;
  //   }
  //   if (actionCallbacks.onJump) {
  //     this.onJump = (name: string) => actionCallbacks.onJump(name);
  //   }
  //   if (actionCallbacks.onEnd) {
  //     this.onEnd = actionCallbacks.onEnd;
  //   }
  // }

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