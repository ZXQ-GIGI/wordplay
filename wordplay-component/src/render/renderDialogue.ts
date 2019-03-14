import Render from './render';

export default class RenderDialogue extends Render {
  constructor() {
    super();
  }
  public draw(parentElement: HTMLElement, options: {
    backgroundImage?: string,
    narration?: string,
    caption?: string,
  }) {
    this.clear();
    this.initWrapperElement();
    parentElement.appendChild(this.wrapperElement);

    this.drawBackgroundImage(options.backgroundImage);
    this.drawNarration(options.narration);
    this.drawCaption(options.caption);
  }

  private drawNarration(narration?: string) {
    this.drawBackgroundMusic(narration);
  }

  private drawCaption(caption?: string) {
    if (!caption) {
      return;
    }
    const captionElement = document.createElement('div');
    captionElement.className = 'wp_caption';
    captionElement.setAttribute('style', 'position: absolute; left: 0; bottom: 0');
    const text = document.createElement('span');
    text.innerText = caption;
    captionElement.appendChild(text);
    this.wrapperElement.append(captionElement);
  }
}