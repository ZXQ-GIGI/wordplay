import DialogueConfig from './interface/DialogueConfig';
import Action from './action';
import RenderDialogue from './render/renderDialogue';
import ActionConfig from './interface/ActionConfig';

export default class Dialogue {
  public parentElement: HTMLElement;

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
    this.actions = (dialogue.actions || []).map(action => new Action(action as ActionConfig));
  }

  public start(parentElement: HTMLElement) {
    this.parentElement = parentElement;
    this.render();
  }

  private render() {
    const renderder = new RenderDialogue();
    this.bindEvents();
    renderder.draw(this.parentElement, {
      narration: this.narration,
      caption: this.caption,
      actions: this.actions,
    });
  }

  private bindEvents() {
    console.log(this.actions);
  }
}