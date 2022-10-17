import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  query = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    // stop the event from refreshing the page.
    event.preventDefault();
    this.submitted.emit(this.query);
    //console.log('form:', this.query);
  }

}
