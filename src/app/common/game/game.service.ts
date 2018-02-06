import { Injectable } from '@angular/core';
import { Jsonp, Response, Http, Headers, RequestOptions } from '@angular/http';
import { Store } from '@ngrx/store';
import * as fromRoot from '../index';
@Injectable()
export class GameService {

    public page: number;
    constructor(private jsonp: Jsonp, private store: Store<fromRoot.AppState>) {
        store.select(fromRoot.getGamesPage).subscribe((page) => {
            this.page = page;
        });
    }

    query() {
        const pagination = this.paginate(this.page);
        const url = 'http://www.giantbomb.com/api/games/?api_key=ba65dcaf71b0ebd52a2c2fb9ddfb81fbc3a232c0?&offset=${pagination.offset}&limit=${pagination.limit}&format=jsonp&json_callback=JSONP_CALLBACK';
        return this.jsonp.request(url, { method: 'GET' }).map((res) => {
            return res['_body'];
        });
    }

    paginate(page: number) {
        let beginItem: number;
        // let endItem: number;
        const itemsPerPage = 10;
        if (page === 1) {
            beginItem = 0;
        } else {
            beginItem = (page - 1) * itemsPerPage;
        }
        return {
            offset: beginItem,
            limit: itemsPerPage
        };
    }
}
