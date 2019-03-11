import { Func } from '../type';
import Render from './render';

export default class RenderAction extends Render {
  constructor() {
    super();
  }
  public draw(parentElement: HTMLElement, options: {
    name: string,
    onAction: Func,
  }) {
    this.drawActionButton(parentElement, options.name, options.onAction);
  }

  private drawActionButton(parentElement: HTMLElement, name: string, onAction: Func) {
    const nameElement  = document.createElement('div');
    nameElement.setAttribute('style', 'display: inline-block; height: 50px;');
    const textElement = document.createElement('span');
    textElement.innerText = name;
    nameElement.onclick = onAction;
    nameElement.appendChild(textElement);
    parentElement.appendChild(nameElement);
  }
}