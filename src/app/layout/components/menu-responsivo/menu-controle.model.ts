export class MenuControle {
  readonly existe: () => boolean;
  display: Displayers;
  readonly visivel: () => boolean;

  constructor(display: Displayers, visivel: boolean = true) {
    this.display = display;
    this.existe = function () {
      return this.display === Displayers.none ? false : true;
    };
    this.visivel = function () {
      return visivel ? true : false;
    };
  }
}

export enum Displayers {
  none = 'd-none',
  flex = 'd-flex',
}
