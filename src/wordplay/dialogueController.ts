import Dialogue from './dialogue';

export default class DialogueController {
  private dialogues: Dialogue[];
  private current: string;

  constructor(dialogues: Dialogue[]) {
    this.dialogues = dialogues;
    this.current = this.dialogues[0].name;
  }

  public start(parentElement: HTMLElement) {
    const currentDialogue = this.getCurrentDialogue();
    currentDialogue.start(parentElement);
  }  

  private toNext() {
    const currentIndex = this.dialogues.findIndex(dialogue => dialogue.name === this.current);
    const nextDialogueName = this.dialogues[currentIndex] && this.dialogues[currentIndex].name;
    this.setCurrentDialogue(nextDialogueName);
  }

  private jumpToNext(nextDialogueName: string) {
    this.setCurrentDialogue(nextDialogueName);
  }

  private getCurrentDialogue() {
    return this.dialogues.filter(dialogue => dialogue.name === this.current)[0];
  }

  private setCurrentDialogue(dialogueName: string) {
    if (!this.existName(dialogueName)) {
      throw new Error(`'${dialogueName}' is invalid dialogue name.`)
    }
    this.current = dialogueName;
  }

  private existName(name: string): boolean {
    return this.dialogues.filter(dialogue => dialogue.name === this.current).length > 0;
  }
}