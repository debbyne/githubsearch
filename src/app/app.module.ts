import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponseDisplayComponent } from './response-display/response-display.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AgeFinderPipe } from './age-finder.pipe';
import { HighlighterDirective } from './highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResponseDisplayComponent,
    UserInputComponent,
    AgeFinderPipe,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
