import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//for order by
import { Ng2OrderModule } from 'ng2-order-pipe';


import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './forms/forms.component';
import { HttpComponent } from './http/http.component';
import { TeamComponent } from './team/team.component';
import { AgeComponent } from './age/age.component';
import { FilterPipe } from './age/filter.pipe';
import { DepartmentComponent } from './department/department.component';
import { DepPipePipe } from './dep-pipe.pipe';
import { DesignationComponent } from './designation/designation.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight';
import { UserEvents } from './directives/user-events';
import { PickColor } from './directives/pickcolor';
import { TabsComponent } from './tabs/tabs.component';



const appRoutes: Routes = [

    
    { path: 'about',  component: AboutComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'http', component: HttpComponent },
    { path: 'team', component: TeamComponent},
    { path: 'age', component: AgeComponent},
    { path: 'department', component: DepartmentComponent},
    { path: 'designation', component: DesignationComponent},
    { path: 'directives', component: DirectivesComponent},
    { path: 'tabs', component: TabsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent,
    FormsComponent,
    HttpComponent,
    TeamComponent,
    AgeComponent,
    FilterPipe,
    DepartmentComponent,
    DepPipePipe,
    DesignationComponent,
    DirectivesComponent,
    HighlightDirective,
    UserEvents,
    PickColor,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2OrderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
