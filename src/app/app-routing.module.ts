import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotepadComponent } from './components/notepad/notepad.component';
const routes: Routes = [
  {path: '', component: DesktopComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
