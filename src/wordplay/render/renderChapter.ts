import Render from './render';

export default class RenderChapter extends Render {
  constructor() {
    super();
  }
  public draw(parentElement: HTMLElement, options: {
    title: string,
    subTitle?: string,
    backgroundMusic?: string,
    backgroundImage?: string,
  }) {
    this.clear(parentElement);
    this.drawTitle(parentElement, options.title);
    this.drawSubTitle(parentElement, options.subTitle);
    this.drawBackgroundMusic(parentElement, options.backgroundMusic);
    this.drawBackgroundImage(parentElement, options.backgroundImage);
  }
}