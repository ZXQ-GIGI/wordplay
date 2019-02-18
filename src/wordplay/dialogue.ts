import DialogueConfig from './interface/DialogueConfig';
import Action from './action';

export default class Dialogue {
  private name: string;
  private narration?: string;
  private caption?: string;
  private duration?: number;
  private actions?: Action[];

  constructor(dialogue: DialogueConfig) {
    this.name = dialogue.name;
    this.narration = dialogue.narration;
    this.caption = dialogue.caption;
    this.duration = dialogue.duration;
    this.actions = (dialogue.actions || []).map(action => new Action(action));
  }

  public render() {
    return;
  }
}