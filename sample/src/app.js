import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Demo Pages';
    config.map([
      { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Plugin test' },
  	]);

    this.router = router;
  }
}
