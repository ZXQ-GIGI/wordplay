import Render from './render';
import RenderAction from './renderAction';
import Action from '../action';
import { Func } from '../type';

export default class RenderDialogue extends Render {
  public draw(parentElement: HTMLElement, options: {
    narration?: string,
    caption?: string,
    actions?: Action[],
  }) {
    this.drawNarration(parentElement, options.narration);
    this.drawCaption(parentElement, options.caption);
    this.drawActions(parentElement, options.actions);
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

  private drawActions(parentElement: HTMLElement, actions?: Action[]) {
    const onAction = () => 0;
    if (!actions) {
      return;
    }
    const actionsWrapper = document.createElement('div');
    actionsWrapper.setAttribute('style', 'position: absolute; right: 0; bottom: 0; display: inline-block');
    actions.forEach(action => {
      this.drawOneAction(actionsWrapper, action, onAction);
    });
    parentElement.appendChild(actionsWrapper);
  }

  private drawOneAction(actionsWrapper: HTMLElement, action: Action, onAction: Func) {
    const renderer = new RenderAction();
    renderer.draw(actionsWrapper, {
      // type: action.type,
      name: action.name,
      onAction,
    });
  }
}