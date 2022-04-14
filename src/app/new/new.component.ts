import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.reactiveForm=this.fb.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
    
  }
  onFormSubmit(){

console.log(this.reactiveForm.value);

  }
}
