import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';

@Component({
    selector: 'giphy-search-manual',
    templateUrl: './giphy-search-manual.component.html'
})
export class GiphySearchManualComponent implements OnInit {

    gifs: any[] = [];

    limit: string;
    term: string;

    constructor(private giphySearchService: GiphySearchService) { 
    }

    ngOnInit(): void { }

    pesquisarGiphy(){
        this.giphySearchService.pesquisarGiphy(this.limit ,this.term)
            .subscribe((response: Response) => {
                this.gifs = response['data'];
            });
    }
}