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
    this.initWrapperElement();
    parentElement.appendChild(this.wrapperElement);
    
    this.drawTitle(options.title);
    this.drawSubTitle(options.subTitle);
    this.drawStartButton(options.onStart);
    this.drawAuthor(options.author);
    this.drawBackgroundMusic(options.backgroundMusic);
    this.drawBackgroundImage(options.backgroundImage);
  }

  public drawAuthor(author: string) {
    const authorElement = document.createElement('div');
    authorElement.className = 'wp_author';
    const text = document.createElement('span');
    text.innerText = author;
    authorElement.appendChild(text);
    this.wrapperElement.appendChild(authorElement);
  }

  public drawStartButton(onStart: Func): void {
    const startButton = document.createElement('button');
    startButton.className = 'wp_start';
    startButton.innerText = '开始';
    startButton.style.color = '#fff';
    startButton.onclick = onStart;
    this.wrapperElement.appendChild(startButton);
  }
}