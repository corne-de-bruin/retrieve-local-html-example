import { Component, OnInit } from "@angular/core";
import { Response } from '@angular/http';
import 'rxjs/add//operator/map';
import 'rxjs/add/operator/do';
import { NSHttp } from 'nativescript-angular/http';
import { RouterExtensions } from 'nativescript-angular';
import { CORE_ROUTES } from '../../app.routing.module';

@Component({
    selector: "second-cmp",
    moduleId: module.id,
    templateUrl: './second.component.html',
})
export class SecondComponent implements OnInit {
    public list: Array<number> = [];
    public constructor(private router: RouterExtensions) {}

    public ngOnInit(): void {
        for(let number = 0; number < 1000; number++) {
            this.list.push(number);
        }
    }

    public goToFirstPage(): void {
        this.router.navigate([CORE_ROUTES.FIRST]);
    }
}
