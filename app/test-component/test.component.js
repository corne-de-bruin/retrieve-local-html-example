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
            console.log('======= err: ', err);
            console.dir(err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEwQztBQUUxQyxrQ0FBZ0M7QUFDaEMsZ0NBQThCO0FBQzlCLG9EQUFtRDtBQVduRCxJQUFhLGFBQWEsR0FBMUI7SUFHSSxZQUEyQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUZoQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUdoQyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO2FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEdBQWE7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsR0FBYSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQyxTQUFTLENBQUMsQ0FBQyxPQUFlO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUMsR0FBUTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0NBQ0osQ0FBQTtBQXJCWSxhQUFhO0lBVHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUU7Ozs7O0tBS1Q7S0FDSixDQUFDO3FDQUltQyxhQUFNO0dBSDlCLGFBQWEsQ0FxQnpCO0FBckJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkLy9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgeyBOU0h0dHAgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGVzdC1jbXBcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNlZSBiZWxvdyB0aGUgbG9hZGVkIGNvbnRlbnRcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEh0bWxWaWV3IFtodG1sXT1cImh0bWxDb250ZW50XCI+PC9IdG1sVmlldz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBodG1sQ29udGVudDogc3RyaW5nID0gJyc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBOU0h0dHApIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJ34vY29udGVudC90ZXN0LWNvbnRlbnQuaHRtbCcpXG4gICAgICAgICAgICAuZG8oKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6ICcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLnRleHQoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT0gc3VjY2VzOiAnLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09IGVycjogJywgZXJyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=