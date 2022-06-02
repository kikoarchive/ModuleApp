import { Injectable } from '@angular/core';
import { Fraction } from '../my-form/my-form.component';

@Injectable({
  providedIn: 'root'
})
export class FractionsService {
  num: number
  denum: number
  constructor() { }
  gcf(a: number, b: number){}
  lcm(a:number, b:number){}
  add(other: Fraction){}
  sub(other: Fraction){}
  mult(other: Fraction){}
  div(other: Fraction){}
}
