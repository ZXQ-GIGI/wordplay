import WordplayConfig from './interface/WordplayConfig';
import Chapter from './chapter';
import ChapterController from './chapterController';
import RenderStart from './render/renderStart';
import Music from './render/music';

export default class WordPlay {
  public rootElement: HTMLElement;
  public wordplayElement: HTMLElement;
  public music: Music;
  public chapterController: ChapterController;

  private name: string;
  private author: string;
  private title: string;
  private subTitle?: string;
  private backgroundMusic?: string;
  private backgroundImage?: string;
  private duration?: number;
  private chapters?: Chapter[];

  private INIT_NODE_WIDTH = 400;
  private INIT_NODE_HEIGHT = 300;
  private INIT_NODE_BACKGROUND_COLOR = 'rgba(123, 123, 123, .5)';

  constructor(nodeId = '', wordplay: WordplayConfig) { 
    const self: WordPlay = this;

    this.name = wordplay.name;
    this.author = wordplay.author;
    this.title = wordplay.title;
    this.subTitle = wordplay.subTitle;
    this.backgroundMusic = wordplay.backgroundMusic;
    this.backgroundImage = wordplay.backgroundImage;
    this.duration = wordplay.duration;
    this.chapters = (wordplay.chapters || []).map(chapter => new Chapter(chapter));

    this.init(nodeId);
    this.render(self);
    this.chapterController = new ChapterController(this.chapters);

  }

  public start(self: WordPlay) {
    self.clear();
    this.chapterController.start();
  }

  private end() {
    console.log('end');
  }

  private render(self: WordPlay) {
    this.wordplayElement = document.createElement('div');
    this.wordplayElement.style.width = '100%';
    this.wordplayElement.style.height = '100%';
    this.rootElement.appendChild(this.wordplayElement);

    const renderer = new RenderStart();
    renderer.draw(this.wordplayElement, {
      author: this.author,
      title: this.title,
      subTitle: this.subTitle,
      backgroundMusic: this.backgroundMusic,
      backgroundImage: this.backgroundImage,
      onStart: () => self.start(self),
    });
  }


  private clear() {
    if (!this.wordplayElement) {
      return;
    }
    this.rootElement.removeChild(this.wordplayElement);
  }

  private init(nodeId: string) {
    if (!this.isValidNode(nodeId)) {
      console.error(`[Valid Node]: '${nodeId}' does not exist.`);
      return;
    }

    this.rootElement = document.getElementById(nodeId) as HTMLElement;

    this.setWidth(this.INIT_NODE_WIDTH);
    this.setHeight(this.INIT_NODE_HEIGHT);
    this.setBackgroundColor(this.INIT_NODE_BACKGROUND_COLOR);
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

  private isValidNode(id: string) : boolean {
    return !!document.getElementById(id); 
  }
}