import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() 
  {
    this.profileForm = this.fb.group({
        name: ['',Validators.required],
        email: ['',Validators.required],
        country: ['',Validators.required],
        message:['',Validators.required],
      });

    this.profileForm.valueChanges.subscribe((value) => {console.log(value)} );
  }
  
}