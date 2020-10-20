import { Routes, RouterModule } from '@angular/router'
import { LoginComponent} from './login/login.component'
import { RegisterComponent} from './register/register.component'

const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent,}
];
export const RoutingModule = RouterModule.forRoot(routes);