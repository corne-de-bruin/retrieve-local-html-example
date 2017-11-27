import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular';
import 'rxjs/add//operator/map';
import 'rxjs/add/operator/do';
import { CORE_ROUTES } from '../../app.routing.module';

@Component({
    selector: "first-cmp",
    moduleId: module.id,
    templateUrl: './first.component.html',
})
export class FirstComponent {
    public constructor(private router: RouterExtensions) {}

    public goToSecondPage() {
        this.router.navigate([CORE_ROUTES.SECOND]);
    }
}
