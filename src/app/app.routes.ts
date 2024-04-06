import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', title: 'Task', component: HomeComponent },
  { path: 'tasks', title: 'Tasks', component: TasksComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'user', title: 'User Dashboard', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'register', title: 'Register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
]
