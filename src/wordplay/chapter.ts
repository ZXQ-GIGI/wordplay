import ChapterConfig from './interface/ChapterConfig';
import Dialogue from './dialogue';
import RenderChapter from './render/renderChapter';
import Cleaner from './render/cleaner';
import DialogueController from './dialogueController';
import { Func } from './type';

export default class Chapter {
  private static readonly MS_1000 = 1000;

  public rootElement: HTMLElement;
  public chapterElement: HTMLElement;
  public dialogueController: DialogueController;

  public name: string;
  public title: string;
  public subTitle?: string;
  public backgroundMusic?: string;
  public backgroundImage?: string;
  public duration: number;
  public transition?: string;
  public dialogues?: Dialogue[];

  private onNext: Func;

  constructor(chapter: ChapterConfig) {
    this.name = chapter.name;
    this.title = chapter.title;
    this.subTitle = chapter.subTitle;
    this.backgroundMusic = chapter.backgroundMusic;
    this.backgroundImage = chapter.backgroundImage;
    this.duration = chapter.duration || 1;
    this.transition = chapter.transition;
    this.dialogues = (chapter.dialogues || []).map(dialogue => new Dialogue(dialogue));
  }

  public start(rootElement: HTMLElement, onNext: Func) {
    this.rootElement = rootElement;
    this.onNext = onNext;
    this.enter();
  }

  /** 章节的入口渲染 */
  private enter() {
    const renderer = new RenderChapter();
    renderer.draw(this.rootElement, {
      title: this.title,
      subTitle: this.subTitle,
      backgroundImage: this.backgroundImage,
      backgroundMusic: this.backgroundMusic,
    });
    this.holdTime(() => this.enterDialogue.apply(this));
  }

  private clear() {
    const cleaner = new Cleaner();
    cleaner.do(this.rootElement);
  }

  private holdTime(callback: Func) {
    setTimeout(() => { callback() }, this.duration * Chapter.MS_1000);
  }

  private enterDialogue() {
    this.clear();
    this.dialogueController = new DialogueController(this.rootElement, this.onNext, this.dialogues);
    this.dialogueController.ready();
  }
}