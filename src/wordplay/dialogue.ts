import DialogueConfig from './interface/DialogueConfig';

export default class Dialogue {
  public name: string;
  public narration?: string;
  public caption?: string;
  public duration?: number;
  public actions?: string[];
  public actionsGoTo?: string[];

  constructor(dialogue: DialogueConfig) {
    this.name = dialogue.name;
    this.narration = dialogue.narration;
    this.caption = dialogue.caption;
    this.duration = dialogue.duration;
    this.actions = dialogue.actions;
    this.actionsGoTo = dialogue.actionsGoTo;
  }
}