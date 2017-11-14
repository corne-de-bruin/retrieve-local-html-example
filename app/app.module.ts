import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule, NSFileSystem } from 'nativescript-angular';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { NSHttp, nsHttpFactory } from 'nativescript-angular/http';
import { XHRBackend, RequestOptions } from "@angular/http";
import { TestComponent } from './test-component/test.component';

@NgModule({
    declarations: [AppComponent, TestComponent],
    providers: [
        {
            provide: NSHttp,
            useFactory: nsHttpFactory,
            deps: [XHRBackend, RequestOptions, NSFileSystem]
        }],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
