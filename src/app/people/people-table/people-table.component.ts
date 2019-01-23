import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';

import { Observable } from 'rxjs';
import { PeopleService } from '../people.service';

@Component({
  selector: 'people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements AfterViewInit {

  displayedColumns = ['firstName','lastName','email','twitter','description','tags'];
  dataSource: MatTableDataSource<any>; //TODO(MGP): User Person instead of any
  notes: Observable<any[]>;//TODO(MGP): User Person instead of any

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private peopleService: PeopleService) { }


  ngAfterViewInit() {
    this.notes = this.peopleService.getData();
    this.notes.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(data): void {
    /*
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: data
    });
    */
  }

  trackByUid(index, item) {
    return item.uid
  }

}