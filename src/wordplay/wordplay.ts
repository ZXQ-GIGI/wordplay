import WordplayConfig from './interface/WordplayConfig';
import Chapter from './chapter';
import ChapterController from './chapterController';
import RenderStart from './render/renderStart';
import Cleaner from './render/cleaner';
import RenderEnd from './render/renderEnd';
import { string } from 'prop-types';

export default class WordPlay {
  private static readonly INIT_NODE_WIDTH = 400;
  private static readonly INIT_NODE_HEIGHT = 300;
  private static readonly INIT_NODE_BACKGROUND_COLOR = 'rgba(123, 123, 123, .5)';

  public rootElement: HTMLElement;
  public chapterController: ChapterController;

  private name: string;
  private author: string;
  private title: string;
  private subTitle?: string;
  private backgroundMusic?: string;
  private backgroundImage?: string;
  private conclusion?: string;
  private chapters?: Chapter[];

  constructor(nodeId = '', wordplay: WordplayConfig) { 
    this.name = wordplay.name;
    this.author = wordplay.author;
    this.title = wordplay.title;
    this.subTitle = wordplay.subTitle;
    this.backgroundMusic = wordplay.backgroundMusic;
    this.backgroundImage = wordplay.backgroundImage;
    this.conclusion = wordplay.conclusion;
    this.chapters = (wordplay.chapters || []).map(chapter => new Chapter(chapter));

    this.init(nodeId);
    this.enter();
  }

  private enter() {
    const renderer = new RenderStart();
    renderer.draw(this.rootElement, {
      author: this.author,
      title: this.title,
      subTitle: this.subTitle,
      backgroundMusic: this.backgroundMusic,
      backgroundImage: this.backgroundImage,
      onStart: () => this.start.apply(this),
    });
  }

  private start() {
    this.clear();
    this.chapterController = new ChapterController(this.rootElement, () => this.end.apply(this), this.chapters);
    this.chapterController.ready();
  }

  private end() {
    this.clear();
    const renderer = new RenderEnd();
    renderer.draw(this.rootElement, {
      conclusion: this.conclusion,
    });
  }

  private clear() {
    const cleaner = new Cleaner();
    cleaner.do(this.rootElement);
  }

  private init(nodeId: string) {
    if (!this.isValidNode(nodeId)) {
      console.error(`[Invalid Node]: '${nodeId}' does not exist.`);
      return;
    }

    this.rootElement = document.getElementById(nodeId) as HTMLElement;

    this.setWidth(WordPlay.INIT_NODE_WIDTH);
    this.setHeight(WordPlay.INIT_NODE_HEIGHT);
    this.setBackgroundColor(WordPlay.INIT_NODE_BACKGROUND_COLOR);
  }

  private isValidNode(id: string) : boolean {
    return !!document.getElementById(id); 
  }

  private setWidth(width: number) {
    if (!this.rootElement.style.width) {
      this.rootElement.style.width = `${width}px`;
    }
  }

  private setHeight(height: number) {
    if (!this.rootElement.style.height) {
      this.rootElement.style.height = `${height}px`;
    }
  }

  private setBackgroundColor(color: string) {  
    if (!this.rootElement.style.backgroundColor) {
      this.rootElement.style.backgroundColor = color;
    }
  }
}