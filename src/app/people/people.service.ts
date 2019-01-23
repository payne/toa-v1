import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable()
export class PeopleService {
  collectionName='people';
  peopleCollection: AngularFirestoreCollection<any>;
  peopleDocument: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.peopleCollection = this.afs.collection(this.collectionName, (ref) => ref.orderBy('lastName').limit(5));
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
    return this.afs.doc<Person>(`${this.collectionName}/${id}`);
  }

  createPerson(person: Person) {
    return this.peopleCollection.add({...person});
  }
}
