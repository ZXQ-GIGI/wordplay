import Dialogue from './dialogue';

export default class DialogueController {
  private dialogues: Dialogue[];
  private current: string;

  constructor(dialogues: Dialogue[]) {
    this.dialogues = dialogues;
  }

  
}