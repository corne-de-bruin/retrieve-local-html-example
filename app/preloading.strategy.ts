import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

  public preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && (route.data as any).preload) {
      return load();
    } else {
      return Observable.of(null);
    }
  }
}
