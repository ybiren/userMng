import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { UserMngComponent } from './user-mng/user-mng.component';
import { UpsertUserModalComponent } from './upsert-user-modal/upsert-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMngComponent,
    UpsertUserModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: false,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UpsertUserModalComponent
  ]
})
export class AppModule { }
