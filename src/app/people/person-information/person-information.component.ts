import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Person } from "../person";

@Component({
  selector: "person-information",
  templateUrl: "./person-information.component.html",
  styleUrls: ["./person-information.component.scss"]
})
export class PersonInformationComponent implements OnInit {
  personInformationForm : FormGroup;
  person: Person;
      ambasador = new FormControl(false);
      client= new FormControl(true);
      firstName= new FormControl();
      lastName= new FormControl();
      email= new FormControl();
      twitter= new FormControl();
      description= new FormControl();
      tags= new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.personInformationForm = new FormGroup({
      ambasador: this.ambasador,
      client: this.client,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      twitter: this.twitter,
      description: this.description,
      tags: this.tags,
    });
  }
  save() {
    console.log(`save firstName=${this.firstName.value}`);
  }
}
