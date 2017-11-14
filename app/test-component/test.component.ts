import { Component } from "@angular/core";
import { Response } from '@angular/http';
import 'rxjs/add//operator/map';
import 'rxjs/add/operator/do';
import { NSHttp } from 'nativescript-angular/http';

@Component({
    selector: "test-cmp",
    template: `
        <StackLayout>
            <Label text="See below the loaded content"></Label>
            <HtmlView [html]="htmlContent"></HtmlView>
        </StackLayout>
    `
})
export class TestComponent {
    public htmlContent: string = '';

    public constructor(private http: NSHttp) {
    }

    public ngOnInit(): void {
        this.http.get('~/content/test-content.html')
            .do((res: Response) => {
                console.log('Response: ');
                console.dir(res);
            })
            .map((res: Response) => res.text())
            .subscribe((content: string) => {
                console.log('====== succes: ', content);
                this.htmlContent = content;
            }, (err: any) => {
                console.log('======= error: ', err);
                console.dir(err);
                this.htmlContent = "Error! " + err.toString();
            })
    }
}
