import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Helland';
      config.map([
        { route: ['','home'], moduleId: 'startpage', nav: true, title:'Welcome' }
      ]);
    });
  }
}
