import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, EventRenderedArgs, View, EventSettingsModel, ScheduleComponent  } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { extend } from '@syncfusion/ej2-base';
import {scheduleData} from './datasource';

@Component({
  selector: 'app-agenda',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  templateUrl: './agenda.component.html',
  //templateUrl: 'events.html',
  /* custom code start*/
  styles: [`
  #EventLog b {
      color: #388e3c;
  }
  hr {
      margin: 1px 10px 1px 0px;
      border-top: 1px solid #eee;
  }`],
  /* custom code end*/
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./agenda.component.css']

})
export class AgendaComponent implements OnInit {

  informations='helloChelly';
  public selectedDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('scheduleObj', { static: true })
  public scheduleObj: ScheduleComponent;
  @ViewChild('addButtonObj', { static: true })
  public addButtonObj: ButtonComponent;
  @ViewChild('editButtonObj', { static: true })
  public editButtonObj: ButtonComponent;
  @ViewChild('deleteButtonObj', { static: true })
  public deleteButtonObj: ButtonComponent;

  public data: object [] = [{
      Id: 3,
      Subject: 'Testing',
      StartTime: new Date(2021, 4, 12, 9, 0),
      EndTime: new Date(2021, 4, 12, 10, 0),
      IsAllDay: false
      },{
      Id: 4,
      Subject: 'Vacation',
      StartTime: new Date(2021, 4, 12, 10, 0),
      EndTime: new Date(2021, 4, 12, 11, 0),
      IsAllDay: false
  }];
  

  //public data: Object[] = [] = <Object[]>extend([], scheduleData, null, true);
  //public selectedDate: Date = new Date(2021, 4, 12);
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  public currentView: View = 'Week';

  delete(): void {
    console.log(this.scheduleObj);
    this.scheduleObj.deleteEvent(4);
    this.deleteButtonObj.element.setAttribute('disabled','true');
  }


  actionComplete(): void{
      console.log();
  }

  destroyed():void{
      
  }

  onClear(): void {
      document.getElementById('EventLog').innerHTML = '';
  }
  onCreate(): void {
      this.appendElement('Schedule <b>Load</b> event called<hr>');
  }
  onActionBegin(): void {
      this.appendElement('Schedule <b>Action Begin</b> event called<hr>');
  }
  onActionComplete(): void {
      this.appendElement('Schedule <b>Action Complete</b> event called<hr>');
      console.log(this.eventSettings.dataSource);
  }
  onActionFailure(): void {
      this.appendElement('Schedule <b>Action Failure</b> event called<hr>');
  }
  onCellDoubleClick(): void {
      this.appendElement('SChedule <b>Cell Double Click</b> event called<hr>');
  }
  onCellClick(): void {
      this.appendElement('Schedule <b>Cell Click</b> event called<hr>');
  }
  onNavigating(): void {
      this.appendElement('Schedule <b>Navigating</b> event called<hr>');
  }
  onDestroyed(): void {
      this.appendElement('Schedule <b>Destroyed</b> event called<hr>');
      console.log(this.eventSettings);
  }
  onEventClick(): void {
      this.appendElement('Schedule <b>Event Click</b> event called<hr>');
  }
  onPopupOpen(): void {
      this.appendElement('Schedule <b>Popup Open</b> event called<hr>');

  }
  public appendElement(html: string): void {
      let span: HTMLElement = document.createElement('span');
      span.innerHTML = html;
      let log: HTMLElement = document.getElementById('EventLog');
      if (log !== null) {
          log.insertBefore(span, log.firstChild);
      }
  }
  oneventRendered(args: EventRenderedArgs): void {
      let categoryColor: string = args.data.CategoryColor as string;
      if (!args.element || !categoryColor) {
          return;
      }
      if (this.currentView === 'Agenda') {
          (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
      } else {
          args.element.style.backgroundColor = categoryColor;
      }
  }

}
