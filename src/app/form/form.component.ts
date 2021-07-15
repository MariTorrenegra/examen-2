import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  // form: FormGroup;
  // @Output() item = new EventEmitter<string>();

  arrayInput = new Array(FormGroup);
  // console.log(arrayInput);

  @Input() form: FormGroup

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
    } else {
      this.form.markAllAsTouched();
    }
  }

  clickSave(form: FormGroup) {
    console.log('works');
    // this.item.emit(form.value);
  }

  get emailField() {
    return this.form.get('email');
  }

  get textField() {
    return this.form.get('text');
  }
}

