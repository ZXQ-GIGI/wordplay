import Render from './render';

export default class RenderDialogue extends Render {
  constructor() {
    super();
  }
  public draw(parentElement: HTMLElement, options: {
    narration?: string,
    caption?: string,
  }) {
    this.clear(parentElement);
    this.drawNarration(parentElement, options.narration);
    this.drawCaption(parentElement, options.caption);
  }

  private drawNarration(parentElement: HTMLElement, narration?: string) {
    this.drawBackgroundMusic(parentElement, narration);
  }

  private drawCaption(parentElement: HTMLElement, caption?: string) {
    if (!caption) {
      return;
    }
    const captionElement = document.createElement('div');
    captionElement.className = 'wp_caption';
    captionElement.setAttribute('style', 'position: absolute; left: 0; bottom: 0');
    const text = document.createElement('span');
    text.innerText = caption;
    captionElement.appendChild(text);
    parentElement.appendChild(captionElement);
  }
}