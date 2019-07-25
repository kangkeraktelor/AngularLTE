import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppsettingComponent } from './component/appsetting/appsetting.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
