import { Component, Input, OnInit, ViewEncapsulation,EventEmitter,Output } from '@angular/core';
import * as moment from 'moment';
import { ActivityCreateArg } from './activitycreatearg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Output() createactivity = new EventEmitter<ActivityCreateArg>();

  public date = moment();

  public daysArr;

  constructor() {
    
  }
  


  public ngOnInit() {
    this.daysArr = this.createCalendar(this.date);
  }

  public todayCheck(day) {
    if (!day) {
      return false;
    }
    return moment().format('L') === day.format('L');
  }

  public createCalendar(month) {
    let firstDay = moment(month).startOf('M'); //Primer día
    let days = Array.apply(null, { length: month.daysInMonth() }) //Total de días del mes
      .map(Number.call, Number)
      .map(n => {
        return moment(firstDay).add(n, 'd');
      });

      //Encontrar el día de la semana en el que empieza el mes
      for (let n = 0; n < firstDay.weekday(); n++) {
        days.unshift(null);
      }

    return days;
  }
  public nextMonth() {
    this.date.add(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }

  public previousMonth() {
    this.date.subtract(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }

  onCreateActivity(args: ActivityCreateArg) {
    this.createactivity.emit(args);
  }

}
