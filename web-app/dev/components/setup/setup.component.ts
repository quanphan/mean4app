/**
 * Created by phanquan on 3/5/16.
 */
import {Router, RouterOutlet} from '@angular/router';
import {Component} from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {SetupService} from '../../services/setup.service';

@Component({
    templateUrl: './views/setup/setup.html',
    providers: [SetupService],
    directives: [RouterOutlet],
})

export class SetupComponent {
    constructor(private router:Router, private authService:AuthService,
                private setupService:SetupService
    ){
        this.authService.setPageTitle('Set up system');
    }
}