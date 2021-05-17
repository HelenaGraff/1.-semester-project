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
  get(collectionName){
    return this.firestore.collection(collectionName).snapshotChanges();
  }
  getWithId(collectionName,id){
    return this.firestore.collection(collectionName).doc(id).valueChanges();
  }
  update(collectionName,id,value){
    this.firestore.collection(collectionName).doc(id).update(value);
  }
  delete(collectionName,id){
    this.firestore.collection(collectionName).doc(id).delete();
  }

}
