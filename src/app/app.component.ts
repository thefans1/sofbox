import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {PluginsService} from './plugins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {

  constructor(private plugins: PluginsService, private router: Router) { }

  title = 'sofbox-dashboard-angular';

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
