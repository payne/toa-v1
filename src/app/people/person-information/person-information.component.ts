import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Person } from "../person";
import { PeopleService } from "../people.service";

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

  constructor(private peopleService: PeopleService) {}

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
    this.person = new Person(this.firstName.value,this.lastName.value,this.email.value,this.description.value,this.tags.value);
    this.peopleService.createPerson(this.person);
    console.log(`save firstName=${this.firstName.value}`);
  }
}
