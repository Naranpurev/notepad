import { Component, OnInit} from '@angular/core';
import { NotepadService } from 'src/app/services/notepad.service';
import { Notepad } from 'src/app/model/note';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  notepads:Notepad[]=[];
  modal:boolean=false;
  selectedNote:Notepad= {
    id:'',
    title: '',
    description: ''
  };
  constructor(private notepadService:NotepadService) { 
  }
  
  ngOnInit(): void {
    this.notepadService.getNotepads().subscribe(notepad=> {
      this.notepads=notepad
    })
  }

  onSelect(note:Notepad){
    this.modal = !this.modal
    this.selectedNote = note;
    console.log(this.selectedNote.id)
  }

  onSubmit(reg:NgForm) {
    const note = reg.value;
    note.id = this.selectedNote.id
    this.notepadService.updateNote(note)
    this.modal = false

  }
  removeNote() {
    if(confirm('Are you sure?')) {
      this.notepadService.deleteNote(this.selectedNote)
      this.modal = false
    }
    this.modal = false

  }

}
