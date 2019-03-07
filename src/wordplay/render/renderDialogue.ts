import Render from './render';
import Action from '../action';

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
    console.log('drawCaption');
  }

  private drawActions(parentElement: HTMLElement, actions?: Action[]) {
    console.log('drawActions');
  }

  private drawOneAction(action: Action) {
    // const action = 
    console.log('drawOneAction');
  }
}