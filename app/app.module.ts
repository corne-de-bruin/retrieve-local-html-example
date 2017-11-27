import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule, NSFileSystem } from 'nativescript-angular';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { NSHttp, nsHttpFactory } from 'nativescript-angular/http';
import { XHRBackend, RequestOptions } from "@angular/http";
import { TestComponent } from './test-component/test.component';
import { AppRoutingModule } from './app.routing.module';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        FirstComponent,
        SecondComponent,
        ButtonComponent
    ],
    providers: [
        {
            provide: NSHttp,
            useFactory: nsHttpFactory,
            deps: [XHRBackend, RequestOptions, NSFileSystem]
        }],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptHttpModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
