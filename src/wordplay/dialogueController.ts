import Dialogue from './dialogue';
import { Func } from './type';

export default class DialogueController {
  private parentElement: HTMLElement;
  private nextToEnd: Func;
  private end: boolean;

  private dialogues: Dialogue[];
  private current: string;

  constructor(dialogues: Dialogue[]) {
    this.dialogues = dialogues;
    this.current = this.dialogues[0].name;
  }

  public start(parentElement: HTMLElement, nextTo?: Func) {
    if (!this.parentElement) {
      this.parentElement = parentElement;
    }
    if (nextTo) {
      this.nextToEnd = nextTo;
    }
    const currentDialogue = this.getCurrentDialogue();
    currentDialogue.start(parentElement, {
      nextTo: () => this.nextTo.apply(this),
      jumpTo: (name) => this.jumpTo.apply(this, [name]),
      endTo: () => this.endTo.apply(this)
    });
  }  

  private nextTo() {
    const currentIndex = this.dialogues.findIndex(dialogue => dialogue.name === this.current);
    const nextDialogueName = this.dialogues[currentIndex + 1] && this.dialogues[currentIndex + 1].name;
    this.setCurrentDialogue(nextDialogueName);
    this.start(this.parentElement);
  }

  private jumpTo(nextDialogueName: string) {
    this.setCurrentDialogue(nextDialogueName);
    this.start(this.parentElement);
  }

  private endTo() {
    this.nextToEnd();
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
    return this.dialogues.filter(dialogue => dialogue.name === name).length > 0;
  }
}