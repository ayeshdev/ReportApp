import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER,TuiButtonModule,TuiTextfieldControllerModule, TuiLoaderModule,tuiSvgOptionsProvider, TuiHintModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';

// taiga UI
import {TuiTabsModule,TuiIslandModule,TuiInputModule,TuiInputNumberModule,TuiInputCountModule,TuiTagModule,TuiProgressModule, TuiInputPasswordModule,} from '@taiga-ui/kit';
import { HomeComponent } from './components/home/home.component';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { AddReportComponent } from './components/add-report/add-report.component';
import { ViewReportComponent } from './components/view-report/view-report.component';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';
import { TestComponent } from './components/test/test.component';
import { SearchPipe } from './pipes/search.pipe';
import { NoDataComponent } from './components/no-data/no-data.component';
import {TuiBlockStatusModule} from '@taiga-ui/layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TuiMobileTabsModule } from "@taiga-ui/addon-mobile";
import { LoginComponent } from './components/login/login.component';

// taiga dialog box
// import {ALL_TAIGA_UI_MODULES} from './@stackblitz/all-taiga-modules';


@NgModule({
  
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    AddReportComponent,
    ViewReportComponent,
    TestComponent,
    SearchPipe,
    NoDataComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiTabsModule,
      TuiIslandModule,
      TuiButtonModule,
      TuiTableModule,
      TuiInputModule,
      ReactiveFormsModule,
      TuiTextfieldControllerModule,
      TuiInputNumberModule,
      TuiArcChartModule,
      TuiInputCountModule,
      TuiTagModule,
      FormsModule,
      TuiBlockStatusModule,
      TuiLoaderModule,
      TuiProgressModule,
      TuiRootModule,
      TuiDialogModule,
      TuiMobileTabsModule,
      TuiHintModule,
      TuiInputPasswordModule,
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
