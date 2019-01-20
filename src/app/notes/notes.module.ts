import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesService } from './notes.service';
import { NotesTableComponent } from './notes-table/notes-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, BrowserAnimationsModule,
    RouterModule, ReactiveFormsModule,
    BrowserModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [NotesListComponent, NoteDetailComponent, NotesTableComponent],
  providers: [NotesService]
})
export class NotesModule { }
