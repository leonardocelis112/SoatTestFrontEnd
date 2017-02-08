import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main';
import { HomeComponent } from './components/home/home';

const appRoutes: Routes = [
  { path: 'crisis-center', component: MainComponent },
  { path: 'hero/:id',      component: MainComponent },
  {
    path: 'heroes',
    component: MainComponent,
    data: { title: 'Heroes List' }
  },
  { path: '', component: HomeComponent},
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRouter { }
