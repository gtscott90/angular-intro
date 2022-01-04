import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

// the NgModule decorator notes, see below
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})

// creating and exporting the class
export class AppModule { }

// This is the root Module of the application, called AppModule by default
// features the whole application
// feature modules are imported here to extend the app with those features 
// app module is the root module of all Angular apps
// NgModule decorator NOTES: 
  
  // The declarations array
    // identifies the list of components that belong to this module 
    // components can only be decalred in one module
    // also include Directives and custom pipes by the declared components, unless already available from an imported module
    // in this code...
        // AppComponent (which is the root component) and WelcomeComponent// the root module (app) will always import via the imports array:
      
  // The IMPORTS array
    // the modules that this module needs, such as
    // modules that provide components, directives, and pipes needed by templates associated with components declared in the module
    // modules that provide system or third-party servcies (HttpClientModule) are usually imported to the AppModule 
    // feature modules, such as ProductModule
    // In this code...
        // BrowserModule - 
            // required for every browswer application
            // registers critical application service providers
            // imports and exports CommonModule, which declares and exports directive such as ngIf and ngFor
            // these directives are then available to any of the app modules components, templates
        // HttpClientModule - 
            // registers Angular Http Client server provider
        // RouterModule and call for Root - 
            // pass in the configured routes for the root of the application
            // include the default route { path: '' }, and wild card route { path: '**' }
        // any feature Module, ProductModule in this case
  // The EXPORTS array
    // often only included in shared modules
    // pieces to share such as
    // modules, components, directives, and pipes, 
          // Seen in the SharedModule 
          // StarComponent and ConvertToSpacesPipe (need to be declared in SharedModule as well as exported)
          // CommonModule and FormsModule (only need to be inlcuded in the exports of SharedModule)
  // The BOOTSTRAP array
    // identifies what the index.html file needs to start up the application 
    // it will point to the component (root component) with the selector used in the index.html
        // <pm-root></pm-root> in our case
    // ONLY used by the AppModule
    // identifies the root component (AppComponent) as the bootstrap component 
    // when the application launches, Angular it loads this component and displays its template

// If building a small application, it's possible to only need the root application module (AppModule) and no feature modules