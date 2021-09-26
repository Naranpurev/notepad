import { Component, OnInit } from '@angular/core';
import { NotepadService } from 'src/app/services/notepad.service';
import { Notepad } from 'src/app/model/note';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  title:boolean=false;
  noteTitle:string;
  noteDescription:string;
  constructor(private notepadService:NotepadService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.title || !this.noteTitle) {
      alert('Task is empty')
    } else {
    let note:Notepad = {
      title:this.noteTitle,
      description:this.noteDescription
    }
    this.noteTitle = ''
    this.noteDescription = ''
    this.title = false
    this.notepadService.addNote(note)
  }
}
}
