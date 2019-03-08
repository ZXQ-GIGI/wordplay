import Render from './render';
import { Func } from '../type';

export default class RenderStart extends Render{
  constructor() {
    super();
  }

  public draw(parentElement: HTMLElement, options: {
    author: string,
    title: string,
    subTitle?: string,
    backgroundMusic?: string,
    backgroundImage?: string,
    onStart: Func
  }) {
    this.drawTitle(parentElement, options.title);
    this.drawSubTitle(parentElement, options.subTitle);
    this.drawStartButton(parentElement, options.onStart);
    this.drawAuthor(parentElement, options.author);
    this.drawBackgroundMusic(parentElement, options.backgroundMusic);
    this.drawBackgroundImage(parentElement, options.backgroundImage);
  }

  public drawAuthor(parentElement: HTMLElement, author: string) {
    const authorElement = document.createElement('div');
    authorElement.className = 'wp_author';
    const text = document.createElement('span');
    text.innerText = author;
    authorElement.appendChild(text);
    parentElement.appendChild(authorElement);
  }

  public drawStartButton(parentElement: HTMLElement, onStart: Func): void {
    const startButton = document.createElement('button');
    startButton.className = 'wp_start';
    startButton.innerText = '开始';
    startButton.style.color = '#fff';
    startButton.onclick = onStart;
    parentElement.appendChild(startButton);
  }
}