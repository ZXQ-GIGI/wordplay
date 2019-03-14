import DialogueConfig from './interface/DialogueConfig';
import Action from './action';
import RenderDialogue from './render/renderDialogue';
import ActionController from './actionController';
import { ActionCallbacks } from './interface/ActionCallbacks';

export default class Dialogue {
  public parentElement: HTMLElement;
  public dialogueElement: HTMLElement;
  public actionController: ActionController;

  public name: string;
  public narration?: string;
  public caption?: string;
  public duration?: number;
  public backgroundImage?: string;
  public actions?: Action[];

  constructor(dialogue: DialogueConfig) {
    this.name = dialogue.name;
    this.narration = dialogue.narration;
    this.caption = dialogue.caption;
    this.duration = dialogue.duration;
    this.backgroundImage = dialogue.backgroundImage;
    this.actions = (dialogue.actions && dialogue.actions.map(action => new Action(action))) || [];
  }

  public start(parentElement: HTMLElement, actionCallbacks: ActionCallbacks) {
    this.parentElement = parentElement;
    this.render();

    if (!this.actions || !this.actions.length) {
      return;
    }

    this.actionController = new ActionController(this.dialogueElement, this.actions, {
      onNext: actionCallbacks.onNext,
      onJump: actionCallbacks.onJump,
      onEnd: actionCallbacks.onEnd
    });
    this.actionController.ready();
  }

  private render() {
    const renderder = new RenderDialogue();
    renderder.draw(this.parentElement, {
      backgroundImage: this.backgroundImage,
      narration: this.narration,
      caption: this.caption,
    });
    this.dialogueElement = renderder.getWrapperElement();
  }
}