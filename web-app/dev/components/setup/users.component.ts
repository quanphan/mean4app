/**
 * Created by phanquan on 5/2/16.
 */
import {Component,} from '@angular/core';
import {SetupService} from '../../services/setup.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SelectComponent} from '../../control-component/select.component';
import {SearchComponent} from '../../control-component/input/search.component';

@Component({
    templateUrl:'/views/setup/users.html',
    directives: [SelectComponent,SearchComponent],
})

export class UserComponent {
    constructor(private router:Router, private setupService:SetupService,
                private authService:AuthService){
        this.setupService = SetupService;
        this.authService.setPageTitle('Users');
    }

}