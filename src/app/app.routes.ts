import {Routes} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';

export const ROUTES: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'usuarios', component: UsuariosPageComponent}
];
