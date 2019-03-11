import ActionConfig from './interface/ActionConfig';
import { Func } from './type';
import { ActionCallbacks } from './interface/ActionCallbacks';

import RenderAction from './render/renderAction';

export default class Action {
  private static readonly TYPE_NEXT = 'next';
  private static readonly TYPE_JUMP = 'jump';
  private static readonly TYPE_END = 'end';

  public type: string;
  public name: string;
  public jump?: string;
  public onAction: Func | any;

  constructor(action: ActionConfig) {
    this.type = action.type;
    this.name = action.name;
    this.jump = action.jump;
  }

  public start(actionsWrapper: HTMLElement, actionCallbacks: ActionCallbacks) {
    this.bindEvent(actionCallbacks);
    this.render(actionsWrapper);
  }

  private render(actionsWrapper: HTMLElement) {
    const renderer = new RenderAction();
    renderer.draw(actionsWrapper, {
      name: this.name,
      onAction: () => this.onAction(this.jump),
    });
  }

  private bindEvent(actionCallbacks: ActionCallbacks) {
    if (!this.isValid()) {
      return;
    }
    if (this.type === Action.TYPE_NEXT) {
      this.onAction = actionCallbacks.nextTo;
    }
    if (this.type === Action.TYPE_JUMP) {
      this.onAction = actionCallbacks.jumpTo;
    }
    if (this.type === Action.TYPE_END) {
      this.onAction = actionCallbacks.endTo;
    }
  }

  private isValid() {
    const actionTypes = [
      Action.TYPE_NEXT,
      Action.TYPE_JUMP,
      Action.TYPE_END,
    ];
    if (actionTypes.indexOf(this.type) < 0) {
      throw new Error(`[Invalid Action Type]: action type must be between 'next', 'jump' and 'end'.`);
    }
    if (this.type === Action.TYPE_JUMP) {
      if (this.jump === undefined) {
        throw new Error(`[Action Property]: property 'jump' is undefined.`);
      }
    }
    return true;
  }
}