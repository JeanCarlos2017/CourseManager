import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
//icones bootstrap 
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { houseFill, envelopeFill} from 'ngx-bootstrap-icons';

const icons = {
    houseFill, 
    envelopeFill
  };
//fim icones bootstrap

@NgModule({
  declarations: [
    AppComponent, 
    CourseListComponent, 
    StarComponent, 
    ReplacePipe, 
    NavBarComponent, 
    Error404Component
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component
      }
    ]),
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
