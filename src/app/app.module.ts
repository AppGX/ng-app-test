import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.componet';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { post4Component } from './post4/post4.componet';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component,
    post4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
