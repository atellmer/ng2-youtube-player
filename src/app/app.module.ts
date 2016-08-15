import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule  } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { SearchBarComponent } from './components/search-bar';
import { VideoDetailComponent } from './components/video-detail';
import { VideoListComponent } from './components/video-list';
import { SearchService } from './shared/services/search/search.service';

@NgModule({
    imports: [
		BrowserModule, 
		HttpModule,
		ReactiveFormsModule,
	],
	providers: [
		SearchService,
	],
	declarations: [
		AppComponent, 
		SearchBarComponent, 
		VideoDetailComponent, 
		VideoListComponent
	],
    bootstrap: [AppComponent],
})
export class AppModule { }