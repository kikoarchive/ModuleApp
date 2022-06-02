import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class Fraction{
  num: number
  denum: number
  constructor(num, denum){
      this.num=num;
      this.denum=denum;
  }
}
export class MyFormComponent implements OnInit {
  fractionForm: FormGroup;
  fraction: Fraction;
  constructor(private fb: FormBuilder) {
    this.fractionForm=fb.group({
      num: [1, [Validators.required,
      Validators.pattern(/^[1-9]*$/)]],
      denum: [1, [Validators.required,
        Validators.pattern(/^[1-9]*$/)]]
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    this.fraction=new Fraction(this.fractionForm.value.num, this.fractionForm.value.denum)
  }
}
