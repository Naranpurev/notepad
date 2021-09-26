import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notepad } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  notepadsCollection:AngularFirestoreCollection<Notepad>;
  notepadsDoc:AngularFirestoreDocument<Notepad>;
  notepads:Observable<Notepad[]>;
  notepad:Observable<Notepad>

  constructor(private afs:AngularFirestore) {
    this.notepadsCollection = afs.collection<Notepad>('notes');
   
  }
  getNotepads(){
    this.notepads = this.notepadsCollection.snapshotChanges().pipe(
      map(actions=>actions.map(a=> {
        const data = a.payload.doc.data() as Notepad;
        data.id = a.payload.doc.id;
        return data
      }))
    )
     return this.notepads
   }

   addNote(note:Notepad) {
     this.notepadsCollection.add(note);
   }
   updateNote(note:Notepad) {
    console.log(note,"services")
    this.notepadsDoc = this.afs.doc(`notes/${note.id}`)
    this.notepadsDoc.update(note)
   }
   deleteNote(note:Notepad) {
    this.notepadsDoc = this.afs.doc(`notes/${note.id}`)
    this.notepadsDoc.delete()
   }
}
