import Music from './music';

export default class Render {

  public wrapperElement: HTMLElement;

  public initWrapperElement() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.className = 'wp_wrapper';
    this.wrapperElement.setAttribute('style', 'width: 100%; height: 100%; position: relative;');
  }

  public getWrapperElement() {
    return this.wrapperElement;
  }

  public drawTitle(title: string) {
    const titleElement = document.createElement('div');
    titleElement.className = 'wp_title';
    const text = document.createElement('span');
    text.innerText = title;
    titleElement.appendChild(text);
    this.wrapperElement.appendChild(titleElement);
  }

  public drawSubTitle(subTitle?: string) {
    if (!subTitle) {
      return;
    };
    const subTitleElement = document.createElement('div');
    subTitleElement.className = 'wp_subtitle';
    const text = document.createElement('span');
    text.innerText = subTitle;
    subTitleElement.appendChild(text);
    this.wrapperElement.appendChild(subTitleElement);
  } 

  public drawBackgroundImage(backgroundImage?: string) {
    if (!backgroundImage) {
      return;
    }
    this.wrapperElement.style.backgroundImage = `url(${backgroundImage})`;
    this.wrapperElement.style.backgroundSize = 'cover';
  }

  public drawBackgroundMusic(backgroundMusic?: string) {
    if (!backgroundMusic) {
      return;
    }
    const music = new Music(this.wrapperElement, backgroundMusic);
    // music.play();
  }

  public clear() {
    if (!this.wrapperElement) {
      return;
    }
    this.wrapperElement.innerHTML = '';
  }
}