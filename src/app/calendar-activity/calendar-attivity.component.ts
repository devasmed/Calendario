import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivityCreateArg } from '../activitycreatearg';
import { StepHours } from '../datemanager';

@Component({
  selector: 'app-activity',
  templateUrl: './calendar-attivity.component.html',
  styleUrls: ['./calendar-attivity.component.css']
})
export class CalendarAttivityComponent implements OnInit  {
  @Input() date: string;
  @Input() hour: StepHours;

  @Output() createactivity = new EventEmitter<ActivityCreateArg>();

  constructor() {
  }

  ngOnInit() { }

  onCreateActivityClick(event: Event) {
    event.stopPropagation();
    const args = new ActivityCreateArg(this.date, this.hour.startTime, this.hour.endTime);
    this.createactivity.emit(args);
  }



  
}
