export class Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
  // TODO(MGP): Use map or something fancy for named parameters and/or default values
  constructor(firstName: string, lastName='Smith', email='email@email.com', comments='Default comment, please edit') {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.email = email; this.comments = comments;
  }
}