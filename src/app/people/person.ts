export class Person {
  id: number;
  name: string;
  email: string;
  comments: string;
  constructor(name: string, email: string, comments: string) {
    this.name = name; this.email = email; this.comments = comments;
  }
}