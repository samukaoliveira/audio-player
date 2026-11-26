import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'audioplayer',
    component: AudioPlayerComponent
  },
  {
    path: '',
    redirectTo: 'audioplayer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
