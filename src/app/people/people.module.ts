import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { PersonInformationComponent } from './person-information/person-information.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule, ReactiveFormsModule,
    BrowserModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [PersonInformationComponent],
  // providers: [NotesService]
})
export class PeopleModule { }
