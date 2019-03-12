import Render from './render';

export default class RenderEnd extends Render {
  constructor() {
    super();
  }

  public draw(parentElement: HTMLElement, options: {
    conclusion?: string
  }) {
    this.initWrapperElement();
    parentElement.appendChild(this.wrapperElement);
    this.drawConclusion(options.conclusion);
  }

  private drawConclusion(conclusion?: string) {
    if (!conclusion) {
      return;
    }
    const conclusionElement = document.createElement('div');
    conclusionElement.className = 'wp_conclusion';
    const text = document.createElement('span');
    text.innerText = conclusion;
    conclusionElement.appendChild(text);
    this.wrapperElement.appendChild(conclusionElement);
  }
}