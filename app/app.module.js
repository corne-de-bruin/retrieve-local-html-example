"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const nativescript_angular_1 = require("nativescript-angular");
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const app_component_1 = require("./app.component");
const http_1 = require("nativescript-angular/http");
const http_2 = require("@angular/http");
const test_component_1 = require("./test-component/test.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, test_component_1.TestComponent],
        providers: [
            {
                provide: http_1.NSHttp,
                useFactory: http_1.nsHttpFactory,
                deps: [http_2.XHRBackend, http_2.RequestOptions, nativescript_angular_1.NSFileSystem]
            }
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptHttpModule
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkQ7QUFDM0QsK0RBQTRFO0FBQzVFLGtGQUE4RTtBQUU5RSxtREFBK0M7QUFDL0Msb0RBQWtFO0FBQ2xFLHdDQUEyRDtBQUMzRCxvRUFBZ0U7QUFpQmhFLElBQWEsU0FBUyxHQUF0QjtDQUNDLENBQUE7QUFEWSxTQUFTO0lBZnJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUUsOEJBQWEsQ0FBQztRQUMzQyxTQUFTLEVBQUU7WUFDUDtnQkFDSSxPQUFPLEVBQUUsYUFBTTtnQkFDZixVQUFVLEVBQUUsb0JBQWE7Z0JBQ3pCLElBQUksRUFBRSxDQUFDLGlCQUFVLEVBQUUscUJBQWMsRUFBRSxtQ0FBWSxDQUFDO2FBQ25EO1NBQUM7UUFDTixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw2Q0FBc0I7U0FDekI7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSwgTlNGaWxlU3lzdGVtIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTlNIdHRwLCBuc0h0dHBGYWN0b3J5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXN0LWNvbXBvbmVudC90ZXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBUZXN0Q29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTlNIdHRwLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogbnNIdHRwRmFjdG9yeSxcbiAgICAgICAgICAgIGRlcHM6IFtYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgTlNGaWxlU3lzdGVtXVxuICAgICAgICB9XSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=