import Chapter from './chapter';
import Cleaner from './render/cleaner';
import { Func } from './type';

export default class ChapterController {
  
  private rootElement: HTMLElement;
  private chapters: Chapter[];

  private current: string;
  private onEnd: Func;

  constructor(rootElement: HTMLElement, onEnd: Func, chapters?: Chapter[]) {
    this.rootElement = rootElement;
    this.chapters = chapters || [];
    this.current = this.chapters[0].name;
    this.onEnd = onEnd;
  }

  public ready() {
    this.clear();
    const currentChapter = this.getCurrentChapter();
    currentChapter.start(this.rootElement, () => this.onNext.apply(this));
  }

  private onNext() {
    const currentIndex = this.chapters.findIndex(chapter => chapter.name === this.current);
    const nextChapterIndex = currentIndex + 1;
    if (nextChapterIndex === this.chapters.length) {
      this.onEnd();
      return;
    }
    const nextChapterName = this.chapters[nextChapterIndex] && this.chapters[nextChapterIndex].name;
    this.setCurrentChapter(nextChapterName);
    this.ready();
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
    const cleaner = new Cleaner();
    cleaner.do(this.rootElement);
  }
}