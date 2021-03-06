import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';

import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.scss']
})
export class NotesTableComponent implements AfterViewInit {

  displayedColumns = ['name', 'age', 'email', 'content', 'edit'];
  dataSource: MatTableDataSource<any>;
  notes: Observable<any[]>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private notesService: NotesService) { }


  ngAfterViewInit() {
    this.notes = this.notesService.getData();
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