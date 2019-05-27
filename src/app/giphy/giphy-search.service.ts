
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class GiphySearchService {

    constructor(private http: HttpClient){
    }

    pesquisarGiphy(limit: string, term: string) {
        const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=90L6dl3bWeXAgS1gqx223PjKmUOtMsxi&limit=' + limit;
        return this.http.get(url);        
    }
}