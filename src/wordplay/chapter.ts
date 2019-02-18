import ChapterConfig from './interface/ChapterConfig';
import Dialogue from './dialogue';

export default class Chapter {
  public name: string;
  public title: string;
  public subTitle?: string;
  public backgroundMusic?: string;
  public backgroundImage?: string;
  public duration?: number;
  public transition?: string;
  public dialogues?: Dialogue[];

  constructor(chapter: ChapterConfig) {
    this.name = chapter.name;
    this.title = chapter.title;
    this.subTitle = chapter.subTitle;
    this.backgroundMusic = chapter.backgroundMusic;
    this.backgroundImage = chapter.backgroundImage;
    this.duration = chapter.duration;
    this.transition = chapter.transition;
    this.dialogues = (chapter.dialogues || []).map(dialogue => new Dialogue(dialogue));
  }
}