import Chapter from './chapter';

export default class ChapterController {
  
  private rootElement: HTMLElement;
  private chapters: Chapter[];

  private current: string;
  private isEnd: boolean;

  constructor(chapters: Chapter[]) {
    this.chapters = chapters;
    this.current = this.chapters[0].name;
  }

  public start(rootElement: HTMLElement) {
    if (!this.rootElement) {
      this.rootElement = rootElement;
    }
    const currentChapter = this.getCurrentChapter();
    currentChapter.start(rootElement, () => this.nextTo.apply(this));
  }

  public end() {
    this.isEnd = true;
  }

  private nextTo() {
    const currentIndex = this.chapters.findIndex(chapter => chapter.name === this.current);
    const nextChapterName = this.chapters[currentIndex + 1] && this.chapters[currentIndex + 1].name;
    this.setCurrentChapter(nextChapterName);
    this.clear();
    this.start(this.rootElement);
  }

  private getCurrentChapter(): Chapter {
    return this.chapters.filter(chapter => chapter.name === this.current)[0];;
  }

  private setCurrentChapter(chapterName: string) {
    if (!this.existName(chapterName)) {
      throw new Error(`[Invalid Chapter Name]: '${chapterName}' is invalid chapter name.`)
    }
    this.current = chapterName;
  }

  private existName(name: string): boolean {
    return this.chapters.filter(chapter => chapter.name === name).length > 0;
  }

  private clear() {
    if (!this.rootElement) {
      return;
    }
    this.rootElement.innerHTML = '';
  }
}