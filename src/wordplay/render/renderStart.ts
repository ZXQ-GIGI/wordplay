import Render from './render';
import Music from './music';

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
    onStart: () => void
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

  public drawTitle(parentElement: HTMLElement, title: string) {
    const titleElement = document.createElement('div');
    titleElement.className = 'wp_title';
    const text = document.createElement('span');
    text.innerText = title;
    titleElement.appendChild(text);
    parentElement.appendChild(titleElement);
  }

  public drawSubTitle(parentElement: HTMLElement, subTitle?: string) {
    if (!subTitle) {
      return;
    };
    const subTitleElement = document.createElement('div');
    subTitleElement.className = 'wp_title';
    const text = document.createElement('span');
    text.innerText = subTitle;
    subTitleElement.appendChild(text);
    parentElement.appendChild(subTitleElement);
  } 

  public drawStartButton(parentElement: HTMLElement, onStart: () => void): void {
    const startButton = document.createElement('button');
    startButton.className = 'wp_start';
    startButton.innerText = '开始';
    startButton.style.color = '#fff';
    startButton.onclick = onStart;
    parentElement.appendChild(startButton);
  }

  public drawBackgroundMusic(parentElement: HTMLElement, backgroundMusic?: string) {
    if (!backgroundMusic) {
      return;
    }
    const music = new Music(parentElement, backgroundMusic);
    music.play();
  }

  public drawBackgroundImage(parentElement: HTMLElement, backgroundImage?: string) {
    if (!backgroundImage) {
      return;
    }
    parentElement.style.backgroundImage = `url(${backgroundImage})`;
    parentElement.style.backgroundSize = 'contain';
  }
}