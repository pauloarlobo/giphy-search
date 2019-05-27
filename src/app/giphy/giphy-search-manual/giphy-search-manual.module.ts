import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ GiphySearchManualComponent],
    exports: [GiphySearchManualComponent],
    imports: [ CommonModule, FormsModule ],    
    providers: [GiphySearchService],
})
export class GiphySearchManualComponentModule {}