export class Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  tags: string;
  // TODO(MGP): Use map or something fancy for named parameters and/or default values
  constructor(firstName: string, lastName='Smith', email='email@email.com', description='Default comment, please edit',tags='') {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.email = email; 
    this.description = description;
    this.tags=tags;
  }
}