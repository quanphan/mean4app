import {Component} from '@angular/core';

@Component({
    selector: 'company-list',
    template: `
        This is Company: 
        <ul>
            <li *ngFor= "#company of companyList"
            (click)="onItemClick(company)"
            >{{company.name}}</li>
        </ul>
        <input type="text" [(ngModel)]="selectItem.name" #company/>
        <button (click)="onDeleteItem(company)">DeleteItem</button>
        <br>
        <input type="text" #company/>
        <button (click)="onAddItem(company)">Add New Item</button>
    `
})

export class CompanylistComponent {
    public companyList=[
        {name:" Success software"},
        {name:" Aperia Solutions software"},
        {name:" Kobe"},
        {name:" Apple Computer"},
    ];
    public selectItem = {name:''};
    
    onItemClick(item){
        this.selectItem=item;
    }
    
    onAddItem(item){
        this.companyList.push({name:item.value});
    }
    onDeleteItem(item){
        this.companyList.splice(this.companyList.indexOf(this.selectItem),1);
        this.selectItem={name:''};
    }
}