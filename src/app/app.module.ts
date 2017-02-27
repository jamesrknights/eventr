// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Common Components

// Common Providers
import { HelperService } from './common/util/helper.service';

// Common Directive 
import { ButtonDirective } from './common/directives/button.directive';

// Application Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';

// Application Service Providers
import { CoursesService } from './courses/courses.service';
import { AuthorsService } from './authors/authors.service';

// Application Directives
import { AutoGrowDirective } from './directives/auto-grow.directive';


@NgModule({
  declarations: [

    // Common Components
    AppComponent,

    // Common Directives
    ButtonDirective,

    // Application Components
    AuthorsComponent,
    CoursesComponent,    
    
    // Application Directives
    AutoGrowDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

    // Common Providers
    HelperService,
    
    // Application Providers
    CoursesService, 
    AuthorsService 

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
