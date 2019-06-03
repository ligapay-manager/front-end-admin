import {Routes} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';
import { UsuarioPageComponent } from './usuario-page/usuario-page.component';

export const ROUTES: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'usuarios', component: UsuariosPageComponent},
  {path: 'usuario/:id', component: UsuarioPageComponent}
];
