System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CompanylistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let CompanylistComponent = class CompanylistComponent {
                constructor() {
                    this.companyList = [
                        { name: " Success software" },
                        { name: " Aperia Solutions software" },
                        { name: " Kobe" },
                        { name: " Apple Computer" },
                    ];
                    this.selectItem = { name: '' };
                }
                onItemClick(item) {
                    this.selectItem = item;
                }
                onAddItem(item) {
                    this.companyList.push({ name: item.value });
                }
                onDeleteItem(item) {
                    this.companyList.splice(this.companyList.indexOf(this.selectItem), 1);
                    this.selectItem = { name: '' };
                }
            };
            CompanylistComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], CompanylistComponent);
            exports_1("CompanylistComponent", CompanylistComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVjbGljL2NvbXBhbnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ1csZ0JBQVcsR0FBQzt3QkFDZixFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQzt3QkFDMUIsRUFBQyxJQUFJLEVBQUMsNEJBQTRCLEVBQUM7d0JBQ25DLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQzt3QkFDZCxFQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQztxQkFDM0IsQ0FBQztvQkFDSyxlQUFVLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7Z0JBYWxDLENBQUM7Z0JBWEcsV0FBVyxDQUFDLElBQUk7b0JBQ1osSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsU0FBUyxDQUFDLElBQUk7b0JBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QsWUFBWSxDQUFDLElBQUk7b0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQztZQXJDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlUO2lCQUNKLENBQUM7O29DQUFBO1lBRUYsdURBb0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wdWNsaWMvY29tcGFueS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wYW55LWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIFRoaXMgaXMgQ29tcGFueTogXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9IFwiI2NvbXBhbnkgb2YgY29tcGFueUxpc3RcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKGNvbXBhbnkpXCJcbiAgICAgICAgICAgID57e2NvbXBhbnkubmFtZX19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJzZWxlY3RJdGVtLm5hbWVcIiAjY29tcGFueS8+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlSXRlbShjb21wYW55KVwiPkRlbGV0ZUl0ZW08L2J1dHRvbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29tcGFueS8+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkSXRlbShjb21wYW55KVwiPkFkZCBOZXcgSXRlbTwvYnV0dG9uPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wYW55bGlzdENvbXBvbmVudCB7XG4gICAgcHVibGljIGNvbXBhbnlMaXN0PVtcbiAgICAgICAge25hbWU6XCIgU3VjY2VzcyBzb2Z0d2FyZVwifSxcbiAgICAgICAge25hbWU6XCIgQXBlcmlhIFNvbHV0aW9ucyBzb2Z0d2FyZVwifSxcbiAgICAgICAge25hbWU6XCIgS29iZVwifSxcbiAgICAgICAge25hbWU6XCIgQXBwbGUgQ29tcHV0ZXJcIn0sXG4gICAgXTtcbiAgICBwdWJsaWMgc2VsZWN0SXRlbSA9IHtuYW1lOicnfTtcbiAgICBcbiAgICBvbkl0ZW1DbGljayhpdGVtKXtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtPWl0ZW07XG4gICAgfVxuICAgIFxuICAgIG9uQWRkSXRlbShpdGVtKXtcbiAgICAgICAgdGhpcy5jb21wYW55TGlzdC5wdXNoKHtuYW1lOml0ZW0udmFsdWV9KTtcbiAgICB9XG4gICAgb25EZWxldGVJdGVtKGl0ZW0pe1xuICAgICAgICB0aGlzLmNvbXBhbnlMaXN0LnNwbGljZSh0aGlzLmNvbXBhbnlMaXN0LmluZGV4T2YodGhpcy5zZWxlY3RJdGVtKSwxKTtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtPXtuYW1lOicnfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
