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
    this.clear();
    this.initWrapperElement();
    // console.log(this.wrapperElement);
    parentElement.appendChild(this.wrapperElement);

    this.drawTitle(options.title);
    this.drawSubTitle(options.subTitle);
    this.drawBackgroundMusic(options.backgroundMusic);
    this.drawBackgroundImage(options.backgroundImage);
  }
}