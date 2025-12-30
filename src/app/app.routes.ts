import { Routes } from '@angular/router';
import { PersonaRegistroComponent } from './features/personas/components/persona-registro-component/persona-registro-component';
import { UserNameComponent } from './features/login/components/user-name-component/user-name-component';
import { authGuard } from './core/auth/auth-guard';
import { UsuarioCredencialesComponent } from './features/usuarios/components/usuario-credenciales-component/usuario-credenciales-component';
import { UsuarioComponent } from './features/usuarios/components/usuario-component/usuario-component';

export const routes: Routes = [
  { path: 'home', component: PersonaRegistroComponent, canActivate: [authGuard] },
  {
    path: 'persona',
    children: [
      {
        path: 'registro',
        component: PersonaRegistroComponent
      }
    ]
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {
        path: 'credenciales/:personaId',
        component: UsuarioCredencialesComponent
      }
    ]
  },
  { path: 'login', component: UserNameComponent },
  { path: '**', redirectTo: '/login' }
];