import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesService } from './notes.service';
import { NotesTableComponent } from '../notes-table/notes-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NotesListComponent, NoteDetailComponent, NotesTableComponent],
  providers: [NotesService]
})
export class NotesModule { }
