import Music from './music';

export default class Render {

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
    subTitleElement.className = 'wp_subtitle';
    const text = document.createElement('span');
    text.innerText = subTitle;
    subTitleElement.appendChild(text);
    parentElement.appendChild(subTitleElement);
  } 

  public drawBackgroundImage(parentElement: HTMLElement, backgroundImage?: string) {
    if (!backgroundImage) {
      return;
    }
    parentElement.style.backgroundImage = `url(${backgroundImage})`;
    parentElement.style.backgroundSize = 'cover';
  }

  public drawBackgroundMusic(parentElement: HTMLElement, backgroundMusic?: string) {
    if (!backgroundMusic) {
      return;
    }
    const music = new Music(parentElement, backgroundMusic);
    // music.play();
  }
}