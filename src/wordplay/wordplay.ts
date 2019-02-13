import ChapterConfig from './interface/ChapterConfig';
import WordplayConfig from './interface/WordplayConfig';

export default class WordPlay {
  public name: string;
  public author: string;
  public title: string;
  public subTitle?: string;
  public backgroundMusic?: string;
  public backgroundImage?: string;
  public duration?: number;
  public chapters?: ChapterConfig[];

  constructor(wordplay: WordplayConfig) {
    this.name = wordplay.name;
    this.author = wordplay.author;
    this.title = wordplay.title;
    this.subTitle = wordplay.subTitle;
    this.backgroundMusic = wordplay.backgroundMusic;
    this.backgroundImage = wordplay.backgroundImage;
    this.duration = wordplay.duration;
    this.chapters = wordplay.chapters;
  }
}