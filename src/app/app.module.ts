// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Common Components
import { AppComponent } from './app.component';
import { FavouriteComponent } from './common/favourite.component';
// Common Providers
import { HelperService } from './common/services/helper.service';
// Common Directive
import { InputDirective } from './directives/input.directive'; 
// Application Components

import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
// Application Models
// Application Providers
import { CourseService } from './courses/services/course.service';
import { AuthorService } from './authors/services/author.service';
// Application Directives


@NgModule({
  declarations: [

    // Common Components
    AppComponent,
    FavouriteComponent,
    
    // Common Directives
    InputDirective,

    // Application Components
    CoursesComponent,
    AuthorsComponent

    // Application Directives
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [

    // Common Providers
    HelperService,
    // Application Models
    
    // Application Providers
     CourseService,
     AuthorService
    

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
