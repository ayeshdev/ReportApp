import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER,TuiButtonModule,TuiTextfieldControllerModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';

// taiga UI
import {TuiTabsModule,TuiIslandModule,TuiInputModule,TuiInputNumberModule,TuiInputCountModule,TuiTagModule} from '@taiga-ui/kit';
import { HomeComponent } from './components/home/home.component';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { AddReportComponent } from './components/add-report/add-report.component';
import { ViewReportComponent } from './components/view-report/view-report.component';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    AddReportComponent,
    ViewReportComponent,
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
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
