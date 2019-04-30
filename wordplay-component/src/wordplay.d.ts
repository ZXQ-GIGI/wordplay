// / <reference path="./interface/WordplayConfig.d.ts" />
import ChapterController from './chapterController';
import Chapter from './chapter';
import WordplayConfig from './interface/WordplayConfig';

declare class WordPlay {
  constructor(nodeId: string, wordplay: WordplayConfig);

  INIT_NODE_WIDTH: number;
  INIT_NODE_HEIGHT: number;
  INIT_NODE_BACKGROUND_COLOR: string;

  rootElement: HTMLElement;
  chapterController: ChapterController;
  author: string;
  title: string;
  subTitle?: string;
  backgroundMusic?: string;
  backgroundImage?: string;
  conclusion?: string;
  chapters: Chapter[];
}
