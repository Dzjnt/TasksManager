import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarComponent} from './calendar/calendar.component'
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { ApiAuthorizationModule } from './api-authorization/api-authorization.module';
import { AuthorizeGuard } from './api-authorization/authorize.guard';
import { AuthorizeInterceptor } from './api-authorization/authorize.interceptor';
import { TasksService } from './tasks-list/services/tasks.service';
import { HttpTasksBackendService } from '../services/http-tasks-backend.service';
import { TaskBackendService } from '../services/tasks-backend.service';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule,
  NbDatepickerModule,
  NbMediaBreakpoint,
  NbInputModule,
  
} from '@nebular/theme';

import { DARK_THEME } from './theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReminderComponent } from './reminder/reminder.component';
import { HistoryComponent } from './history/history.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksComponent } from './tasks-list/tasks/tasks.component';
import { SpaceComponent } from './tasks-list/space/space.component';
const mediaBreakpoints: NbMediaBreakpoint[] = [
  {
    name: 'xs',
    width: 0,
  },
  {
    name: 'sm',
    width: 320,
  },
  {
    name: 'md',
    width: 480,
  },
  {
    name: 'lg',
    width: 768,
  },
  {
    name: 'xl',
    width: 1024,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CalendarComponent,
    TasksListComponent,
    TasksComponent,
    HistoryComponent,
    ReminderComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    ApiAuthorizationModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbCheckboxModule,
    FullCalendarModule,
    NbThemeModule.forRoot({ name: 'dark' }, [DARK_THEME], mediaBreakpoints),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'calendar', component: CalendarComponent},
      { path: 'reminder', component: ReminderComponent },
      { path: 'tasks-list', component: TasksListComponent },
      { path: 'history', component: HistoryComponent },
    ]),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    TasksService, { provide: TaskBackendService, useClass: HttpTasksBackendService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
