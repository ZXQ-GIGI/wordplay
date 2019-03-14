export default class Cleaner {

  public do(element: HTMLElement) {
    if (!element) {
      return;
    }
    element.innerHTML = '';
  }
}