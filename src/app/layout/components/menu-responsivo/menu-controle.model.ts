export class MenuControle {
  readonly existe: () => boolean;
  display: Displayers;

  constructor(display: Displayers) {
    this.display = display;
    this.existe = function () {
      return this.display === Displayers.none ? false : true;
    };
  }

  setDisplay(display: Displayers): MenuControle {
    this.display = display;
    return this;
  }
}

export enum Displayers {
  none = 'd-none',
  flex = 'd-flex',
}
