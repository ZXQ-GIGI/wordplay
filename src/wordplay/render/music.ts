export default class Music {
  private musicElement: HTMLElement;

  constructor(parentElement: HTMLElement, music: string) {
    this.init(parentElement, music);
  }

  public play() {
    this.musicElement.setAttribute("autoplay", "autoplay");
  }

  public pause() {
    this.musicElement.setAttribute("autoplay", "");
  }

  private init(parentElement: HTMLElement, music: string) {
    this.musicElement = document.createElement('audio');
    this.musicElement.setAttribute("src", music);
    parentElement.appendChild(this.musicElement);
  }
}