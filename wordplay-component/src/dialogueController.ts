import Dialogue from './dialogue';
import Cleaner from './render/cleaner';
import { Func } from './type';

export default class DialogueController {
  private parentElement: HTMLElement;
  private onEnd: Func;

  private dialogues: Dialogue[];
  private current: string;

  constructor(parentElement: HTMLElement, dialogues: Dialogue[], onNext: Func) {
    this.parentElement = parentElement;
    this.dialogues = dialogues;
    this.current = this.dialogues[0].name;
    this.onEnd = onNext;
  }

  public ready() {
    if (!this.canReady()) {
      console.warn(`The property 'dialogues' is []`);
      return;
    }
    this.clear();
    const currentDialogue = this.getCurrentDialogue();
    currentDialogue.start(this.parentElement, {
      onNext: () => this.onNext.apply(this),
      onJump: (name) => this.onJump.apply(this, [name]),
      onEnd: () => this.onEnd.apply(this)
    });
  }  

  private onNext() {
    const currentIndex = this.dialogues.findIndex(dialogue => dialogue.name === this.current);
    const nextDialogueName = this.dialogues[currentIndex + 1] && this.dialogues[currentIndex + 1].name;
    this.setCurrentDialogue(nextDialogueName);
    this.ready();
  }

  private onJump(nextDialogueName: string) {
    this.setCurrentDialogue(nextDialogueName);
    this.ready();
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

  private clear() {
    const cleaner = new Cleaner();
    cleaner.do(this.parentElement);
  }

  private canReady() {
    return !!this.dialogues.length;
  }
}