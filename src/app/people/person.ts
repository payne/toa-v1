export class Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  twitter: string;
  description: string;
  tags: string;
  constructor(firstName: string, lastName='Smith', email='email@email.com', twitter='', description='Default comment, please edit',tags='') {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.email = email; 
    this.twitter = twitter;
    this.description = description;
    this.tags=tags;
  }
}