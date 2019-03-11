import DialogueConfig from './interface/DialogueConfig';
import Action from './action';
import RenderDialogue from './render/renderDialogue';
import ActionController from './actionController';
import { ActionCallbacks } from './interface/ActionCallbacks';

export default class Dialogue {
  public parentElement: HTMLElement;
  public actionController: ActionController;

  public name: string;
  public narration?: string;
  public caption?: string;
  public duration?: number;
  public actions?: Action[];

  constructor(dialogue: DialogueConfig) {
    this.name = dialogue.name;
    this.narration = dialogue.narration;
    this.caption = dialogue.caption;
    this.duration = dialogue.duration;
    this.actions = (dialogue.actions || []).map(action => new Action(action));
    this.actionController = new ActionController(this.actions);
  }

  public start(parentElement: HTMLElement, actionCallbacks: ActionCallbacks) {
    this.parentElement = parentElement;
    this.render();
    this.actionController.start(this.parentElement, {
      nextTo: actionCallbacks.nextTo,
      jumpTo: actionCallbacks.jumpTo,
      endTo: actionCallbacks.endTo
    });
  }

  private render() {
    const renderder = new RenderDialogue();
    renderder.draw(this.parentElement, {
      narration: this.narration,
      caption: this.caption,
    });
  }
}