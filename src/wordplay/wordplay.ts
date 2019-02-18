import WordplayConfig from './interface/WordplayConfig';
// import ChapterConfig from './interface/ChapterConfig';

import Chapter from './chapter';

export default class WordPlay {
  public node: HTMLElement;

  private name: string;
  private author: string;
  private title: string;
  private subTitle?: string;
  private backgroundMusic?: string;
  private backgroundImage?: string;
  private duration?: number;
  private chapters?: Chapter[];

  constructor(nodeId = '', wordplay: WordplayConfig) { 
    this.name = wordplay.name;
    this.author = wordplay.author;
    this.title = wordplay.title;
    this.subTitle = wordplay.subTitle;
    this.backgroundMusic = wordplay.backgroundMusic;
    this.backgroundImage = wordplay.backgroundImage;
    this.duration = wordplay.duration;
    this.chapters = (wordplay.chapters || []).map(chapter => new Chapter(chapter));
    this.initNode(nodeId);
  }

  public play() {
    console.log('this is play')
    return;
  }

  private initNode(nodeId: string) {
    if (!this.isValidNode(nodeId)) {
      console.error(`[Valid Node]: ${nodeId} does not exist.`)
    }
    this.node = document.getElementById(nodeId) as HTMLElement;
    console.log(this.node);
  }

  private isValidNode(id: string) : boolean {
    return !!document.getElementById(id); 
  }

  private render() {
    return;
  }
}