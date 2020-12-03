import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
// import { ContactsComponent } from './contacts/components/contacts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { DemoIfDirective } from './concepts/directives/demo-if.directive';
// import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
// import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';
import { ProductsModule } from './products/products.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { ContactsModule } from './contacts/contacts.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    // ContactsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    DemoIfDirective,
    // AddContactComponent,
    // ContactDetailsComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    ContactsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // interceptors

  ],
  bootstrap: [AppComponent] // AppModule should bootstrap AppComponent
})
export class AppModule { }
