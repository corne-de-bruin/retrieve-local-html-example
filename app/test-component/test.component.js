"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("rxjs/add//operator/map");
require("rxjs/add/operator/do");
const http_1 = require("nativescript-angular/http");
let TestComponent = class TestComponent {
    constructor(http) {
        this.http = http;
        this.htmlContent = '';
    }
    ngOnInit() {
        this.http.get('~/content/test-content.html')
            .do((res) => {
            console.log('Response: ');
            console.dir(res);
        })
            .map((res) => res.text())
            .subscribe((content) => {
            console.log('====== succes: ', content);
            this.htmlContent = content;
        }, (err) => {
            console.log('======= error: ', err);
            console.dir(err);
            this.htmlContent = "Error!";
        });
    }
};
TestComponent = __decorate([
    core_1.Component({
        selector: "test-cmp",
        template: `
        <StackLayout>
            <Label text="See below the loaded content"></Label>
            <HtmlView [html]="htmlContent"></HtmlView>
        </StackLayout>
    `
    }),
    __metadata("design:paramtypes", [http_1.NSHttp])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEwQztBQUUxQyxrQ0FBZ0M7QUFDaEMsZ0NBQThCO0FBQzlCLG9EQUFtRDtBQVduRCxJQUFhLGFBQWEsR0FBMUI7SUFHSSxZQUEyQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUZoQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUdoQyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO2FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEdBQWE7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsR0FBYSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQyxTQUFTLENBQUMsQ0FBQyxPQUFlO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUMsR0FBUTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7Q0FDSixDQUFBO0FBdEJZLGFBQWE7SUFUekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRTs7Ozs7S0FLVDtLQUNKLENBQUM7cUNBSW1DLGFBQU07R0FIOUIsYUFBYSxDQXNCekI7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCB7IE5TSHR0cCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0ZXN0LWNtcFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU2VlIGJlbG93IHRoZSBsb2FkZWQgY29udGVudFwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SHRtbFZpZXcgW2h0bWxdPVwiaHRtbENvbnRlbnRcIj48L0h0bWxWaWV3PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudCB7XG4gICAgcHVibGljIGh0bWxDb250ZW50OiBzdHJpbmcgPSAnJztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IE5TSHR0cCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnfi9jb250ZW50L3Rlc3QtY29udGVudC5odG1sJylcbiAgICAgICAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTogJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMudGV4dCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoY29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PSBzdWNjZXM6ICcsIGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT0gZXJyb3I6ICcsIGVycik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxDb250ZW50ID0gXCJFcnJvciFcIjtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuIl19