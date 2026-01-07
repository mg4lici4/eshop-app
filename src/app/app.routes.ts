import { Routes } from '@angular/router';
import { PersonaRegistroComponent } from './features/personas/components/persona-registro-component/persona-registro-component';
import { UserNameComponent } from './features/login/components/user-name-component/user-name-component';
import { authGuard } from './core/auth/auth-guard';
import { UsuarioCredencialesComponent } from './features/usuarios/components/usuario-credenciales-component/usuario-credenciales-component';
import { UsuarioSegundoFAComponent } from './features/usuarios/components/usuario-segundofa-component/usuario-segundofa-component';
import { LoginSegundofaComponent } from './features/login/components/login-segundofa-component/login-segundofa-component';

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
    children: [
      {
        path: 'credenciales/:idPersona',
        component: UsuarioCredencialesComponent
      },
      {
        path: 'credenciales/2fa/:idPersona',
        component: UsuarioSegundoFAComponent
      }
    ]
  },
  {
    path: 'login',
    children: [
      {
        path: 'username',
        component: UserNameComponent

      },
      {
        path: '2fa',
        component: LoginSegundofaComponent
      }
    ]
  },
  { path: '**', redirectTo: '/login/username' }
];