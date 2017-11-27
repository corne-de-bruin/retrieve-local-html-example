"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const nativescript_angular_1 = require("nativescript-angular");
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const app_component_1 = require("./app.component");
const http_1 = require("nativescript-angular/http");
const http_2 = require("@angular/http");
const test_component_1 = require("./test-component/test.component");
const app_routing_module_1 = require("./app.routing.module");
const first_component_1 = require("./pages/first/first.component");
const second_component_1 = require("./pages/second/second.component");
const button_component_1 = require("./button/button.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            test_component_1.TestComponent,
            first_component_1.FirstComponent,
            second_component_1.SecondComponent,
            button_component_1.ButtonComponent
        ],
        providers: [
            {
                provide: http_1.NSHttp,
                useFactory: http_1.nsHttpFactory,
                deps: [http_2.XHRBackend, http_2.RequestOptions, nativescript_angular_1.NSFileSystem]
            }
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            app_routing_module_1.AppRoutingModule,
            nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptHttpModule
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkQ7QUFDM0QsK0RBQTRFO0FBQzVFLGtGQUE4RTtBQUU5RSxtREFBK0M7QUFDL0Msb0RBQWtFO0FBQ2xFLHdDQUEyRDtBQUMzRCxvRUFBZ0U7QUFDaEUsNkRBQXdEO0FBQ3hELG1FQUErRDtBQUMvRCxzRUFBa0U7QUFDbEUsZ0VBQTREO0FBd0I1RCxJQUFhLFNBQVMsR0FBdEI7Q0FDQyxDQUFBO0FBRFksU0FBUztJQXRCckIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWiw4QkFBYTtZQUNiLGdDQUFjO1lBQ2Qsa0NBQWU7WUFDZixrQ0FBZTtTQUNsQjtRQUNELFNBQVMsRUFBRTtZQUNQO2dCQUNJLE9BQU8sRUFBRSxhQUFNO2dCQUNmLFVBQVUsRUFBRSxvQkFBYTtnQkFDekIsSUFBSSxFQUFFLENBQUMsaUJBQVUsRUFBRSxxQkFBYyxFQUFFLG1DQUFZLENBQUM7YUFDbkQ7U0FBQztRQUNOLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTyxFQUFFO1lBQ0wscUNBQWdCO1lBQ2hCLHdDQUFrQjtZQUNsQiw2Q0FBc0I7U0FDekI7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSwgTlNGaWxlU3lzdGVtIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTlNIdHRwLCBuc0h0dHBGYWN0b3J5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXN0LWNvbXBvbmVudC90ZXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmlyc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZpcnN0L2ZpcnN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWNvbmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3NlY29uZC9zZWNvbmQuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFRlc3RDb21wb25lbnQsXG4gICAgICAgIEZpcnN0Q29tcG9uZW50LFxuICAgICAgICBTZWNvbmRDb21wb25lbnQsXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5TSHR0cCxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IG5zSHR0cEZhY3RvcnksXG4gICAgICAgICAgICBkZXBzOiBbWEhSQmFja2VuZCwgUmVxdWVzdE9wdGlvbnMsIE5TRmlsZVN5c3RlbV1cbiAgICAgICAgfV0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZVxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19