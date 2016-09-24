/**
 * Created by phanquan on 5/2/16.
 */
import {Component,} from '@angular/core';
import {PackageComponent} from "components/setup/package.component";
import {SetupService} from '../../services/setup.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SearchComponent} from '../../control-component/input/search.component';
import {InputComponent} from '../../control-component/input/input.component';
import {SelectComponent} from '../../control-component/select.component';

@Component({
    templateUrl:'/views/setup/package.html',
    directives: [SelectComponent,SearchComponent,InputComponent],
})

export class PackageComponent {
    constructor(private router:Router,
                private setupService:SetupService,
                private authService:AuthService
    ){
        this.authService.setPageTitle('Packages');
    }

    packageSelete={};
    packageFileter='';
    addActive=false;

    onSearch(){

    }

    onClick(item){
        this.packageSelete=item;
    }

    edit(item){
        this.packageSelete=item;
        this.addActive=true;
    }
    newPackage(){
        this.packageSelete={};
        this.addActive=true;
    }

    doneSubmit()
    {
        this.addActive=false;
    }

    onSubmit(){

    }

}