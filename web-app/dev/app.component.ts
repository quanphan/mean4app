
import {Component} from '@angular/core';
import {AppComponent} from "./app.component";
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'my-app',
    templateUrl: 'views/public/index.html',
    provider:[AuthService]
})

export class AppComponent {
    constructor(public authService:AuthService ){

    }
    authentication=this.authService;

    toggleMenu()
    {
        this.authService.setSideBar(!this.authService.isSidebar);
    }
}
