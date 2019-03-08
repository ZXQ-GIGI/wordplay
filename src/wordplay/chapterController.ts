import Chapter from './chapter';

export default class ChapterController {
  
  private chapters: Chapter[];

  private current: string;
  private isEnd: boolean;

  constructor(chapters: Chapter[]) {
    this.chapters = chapters;
    this.current = this.chapters[0].name;
  }

  public start(rootElement: HTMLElement) {
    const currentChapter = this.getCurrentChapter();
    currentChapter.start(rootElement);
  }

  public end() {
    this.isEnd = true;
  }

  private toNext() {
    const currentIndex = this.chapters.findIndex(chapter => chapter.name === this.current);
    const nextChapterName = this.chapters[currentIndex] && this.chapters[currentIndex].name;
    this.setCurrentChapter(nextChapterName);
  }

  // private jumpToNext(nextChapterName: string) {
  //   this.setCurrentChapter(nextChapterName);
  // }

  private getCurrentChapter(): Chapter {
    return this.chapters.filter(chapter => chapter.name === this.current)[0];;
  }

  private setCurrentChapter(chapterName: string) {
    if (!this.existName(chapterName)) {
      throw new Error(`'${chapterName}' is invalid chapter name.`)
    }
    this.current = chapterName;
  }

  private existName(name: string): boolean {
    return this.chapters.filter(chapter => chapter.name === this.current).length > 0;
  }

  private isFirstChapter(name: string) {
    return this.chapters[0].name === name;
  }

  private isLastChapter(name: string) {
    return this.chapters[this.chapters.length - 1].name === name;
  }
}