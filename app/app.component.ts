import { Component } from "@angular/core";
import 'rxjs/add//operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: "my-app",
    template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
}
