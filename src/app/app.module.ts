// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Common Components
import { FavouriteComponent } from './common/components/favourite.component'

// Common Providers
import { HelperService } from './common/services/helper.service';

// Common Directive 
import { ButtonDirective } from './common/directives/button.directive';
import { FavouriteDirective } from './common/directives/favourite.directive';

// Application Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';

// Application Models
import { AuthorsModel } from './authors/models/authors.model';

// Application Service Providers
import { CoursesModel } from './courses/models/courses.model';

// Application Directives
import { AutoGrowDirective } from './directives/auto-grow.directive';


@NgModule({
  declarations: [

    // Common Components
    AppComponent,
    FavouriteComponent,

    // Common Directives
    ButtonDirective,
    FavouriteDirective,

    // Application Components
    AuthorsComponent,
    CoursesComponent,    
    
    // Application Directives
    AutoGrowDirective

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
    AuthorsModel,
    CoursesModel  
    
    // Application Providers
    
    

   ],
  bootstrap: [AppComponent, CoursesComponent]
})
export class AppModule { }
