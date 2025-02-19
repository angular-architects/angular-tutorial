import { booleanAttribute, Component, input, numberAttribute, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-edit',
  imports: [],
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.css'
})
export class FlightEditComponent implements OnInit {

  id = input.required({ transform: numberAttribute });
  showDetails = input.required({ transform: booleanAttribute });

  ngOnInit(): void {
    console.log('id', this.id())
  }
}
