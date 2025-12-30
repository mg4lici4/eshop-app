import { Routes } from '@angular/router';
import { PersonaRegistroComponent } from './features/personas/components/persona-registro-component/persona-registro-component';
import { PersonaComponent } from './features/personas/components/persona-component/persona-component';
import { UserNameComponent } from './features/login/components/user-name-component/user-name-component';
import { authGuard } from './core/auth/auth-guard';
import { UsuarioGenerarSecretoComponent } from './features/usuarios/components/usuario-generar-secreto-component/usuario-generar-secreto-component';

export const routes: Routes = [
  { path: 'home', component: PersonaRegistroComponent, canActivate: [authGuard] },
  {
    path: 'persona',
    component: PersonaComponent, // componente padre (layout)
    children: [
      {
        path: 'registro',
        component: PersonaRegistroComponent
      }
    ]
  },
  { path: 'usuarios', component: UsuarioGenerarSecretoComponent },
  { path: 'login', component: UserNameComponent },
  { path: '**', redirectTo: '/login' }
];