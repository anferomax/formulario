import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IpValidator } from '../app.module';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent
{
  public form = new FormGroup({});
  public model: any = {};
  public options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Please enter a value',
        required: true,
      },
    },

    {
      key: 'sex',
      type: 'radio',
      templateOptions: {
        label: 'Sex',
        placeholder: 'Please select a value',
        required: true,
        options: [
          { label: 'Male', value: 'M' },
          { label: 'Female', value: 'F' }
        ]
      },
    },

    {
      key: 'pass',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Please enter a value',
        required: true,
        type: 'password' 
      },
    },

    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Please enter a value',
        required: true,  
      },
      validators:{
        validation: [IpValidator],
      }
    },

    {
      key: 'country',
      type: 'select',
      defaultValue: '',
      templateOptions: {
        label: 'Country',
        required: true,
        placeholder: 'Please seelct a value',
        options: [
          { label: 'Argentina', value: '1' },
          { label: 'Brasil', value: '2' },
          { label: 'Bolivia', value: '3' },
          { label: 'Chile', value: '4' },
          { label: 'Colombia', value: '5' },
          { label: 'Ecuador', value: '6' },
          { label: 'Paraguay', value: '7' },
          { label: 'Perú', value: '8' },
          { label: 'Uruguay', value: '9' },
          { label: 'Venezuela', value: '10' },
        ],
      },
    },

    {
      key: 'message',
      type: 'textarea',
      templateOptions: {
        label: 'Message',
        rows: 5,
        placeholder: 'Please enter a text',
        required: true,  
      },
      validators:{
        validation: [IpValidator],
      }
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

}