import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  form: FormGroup;
  @Output() item: EventEmitter<any> = new EventEmitter();

  arrayInput = new Array(FormGroup);

  constructor(
    public formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group ({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      this.item.emit(this.form.value);
      console.log('works');
    } else {
      this.form.markAllAsTouched();
    }
  }

  get emailField() {
    return this.form.get('email');
  }

  get textField() {
    return this.form.get('text');
  }
}

