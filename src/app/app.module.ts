import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

export function IpValidator(control: any): any {
  console.log(control.value)
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(control.value) ? null : { 'ip': true };
}

@NgModule({
  imports:
  [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    FormlyModule.forRoot({
      validators: [{ name: 'ip', validation: IpValidator }]
    }),
    FormlyBootstrapModule,
  ],
  exports:
  [
    FormlyBootstrapModule,
    FormlyModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [ AppComponent, NameEditorComponent, ProfileEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
