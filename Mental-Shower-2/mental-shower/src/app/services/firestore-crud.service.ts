import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreCrudService {

  constructor(private firestore: AngularFirestore) { }
  create(collectionName,something){
    return this.firestore.collection(collectionName).add(something);
  }
}
