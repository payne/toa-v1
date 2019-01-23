import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable()
export class PeopleService {

  peopleCollection: AngularFirestoreCollection<any>;
  peopleDocument: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.peopleCollection = this.afs.collection('people', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<Person[]> {
    console.log(`in getData()`)
    const stuff= this.peopleCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          console.log(data);
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
    console.log(`getData() returns=${stuff}`);
    console.log(stuff);
    return stuff;
  }

  getPerson(id: string) {
    return this.afs.doc<Person>(`people/${id}`);
  }

  createPerson(person: Person) {
    return this.peopleCollection.add({...person});
  }
}
