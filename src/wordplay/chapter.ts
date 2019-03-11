import ChapterConfig from './interface/ChapterConfig';
import Dialogue from './dialogue';
import RenderChapter from './render/renderChapter';
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

  constructor(chapter: ChapterConfig) {
    this.name = chapter.name;
    this.title = chapter.title;
    this.subTitle = chapter.subTitle;
    this.backgroundMusic = chapter.backgroundMusic;
    this.backgroundImage = chapter.backgroundImage;
    this.duration = chapter.duration || 1;
    this.transition = chapter.transition;
    this.dialogues = (chapter.dialogues || []).map(dialogue => new Dialogue(dialogue));
    this.dialogueController = new DialogueController(this.dialogues);
  }

  public start(rootElement: HTMLElement, nextTo: Func) {
    this.rootElement = rootElement;
    this.render(nextTo);
  }

  private render(nextTo: Func) {
    this.chapterElement = document.createElement('div');
    this.chapterElement.setAttribute('style', 'width: 100%; height: 100%; position: relative');
    this.rootElement.appendChild(this.chapterElement);
    this.enter(nextTo);
  }

  /** 章节的入口渲染 */
  private enter(nextTo: Func) {
    const renderer = new RenderChapter();
    renderer.draw(this.chapterElement, {
      title: this.title,
      subTitle: this.subTitle,
      backgroundImage: this.backgroundImage,
      backgroundMusic: this.backgroundMusic,
    });
    this.holdTime(() => this.enterDialogue.apply(this, [nextTo]));
  }

  private clear() {
    if (!this.chapterElement) {
      return;
    }
    this.chapterElement.innerHTML = '';
  }

  private holdTime(callback: Func) {
    setTimeout(() => { callback() }, this.duration * Chapter.MS_1000);
  }

  private enterDialogue(nextTo: Func) {
    this.clear();
    this.dialogueController.start(this.chapterElement, nextTo);
  }
}