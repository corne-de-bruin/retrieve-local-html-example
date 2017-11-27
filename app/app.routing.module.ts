import { NgModule } from '@angular/core';
import { SelectivePreloadingStrategy } from './preloading.strategy';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';

export const CORE_ROUTES = {
    FIRST: 'first-page',
    SECOND: 'second-page'
};

@NgModule({
    providers: [
        SelectivePreloadingStrategy
    ],
    imports: [
        NativeScriptRouterModule.forRoot([
                {
                    path: '', redirectTo: CORE_ROUTES.FIRST, pathMatch: 'full'
                },
                {
                    path: CORE_ROUTES.FIRST, component: FirstComponent
                },
                {
                    path: CORE_ROUTES.SECOND, component: SecondComponent
                }
            ],
            {
                preloadingStrategy: SelectivePreloadingStrategy
            })
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
