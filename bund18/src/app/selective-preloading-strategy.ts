import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        console.log('jjjjjjjjjjjjjjjjj');
        return route.data.preload===false ? of(null) : load() ;
    }

}