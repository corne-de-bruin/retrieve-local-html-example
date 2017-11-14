import { Component } from "@angular/core";
import 'rxjs/add//operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: "my-app",
    template: `
        <ActionBar title="My App" class="action-bar"></ActionBar>
        <test-cmp></test-cmp>
    `
})
export class AppComponent {
}
