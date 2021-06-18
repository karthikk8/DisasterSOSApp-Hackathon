import { Component } from '@angular/core';
import { RouterserviceService } from './routerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Disaster SSO App';
  constructor(private router: RouterserviceService) {
    this.router.tologin();
  }
}
