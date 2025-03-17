import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmissorComponent } from './components/emissor/emissor.component';
import { OrcamentoComponent } from './components/orcamento/orcamento.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { ProdutoComponent } from './components/produto-servico/produto-servico.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { guardGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'emissor', component: EmissorComponent , canActivate: [guardGuard]},
  { path: 'cliente', component: ClienteComponent, canActivate: [guardGuard]},
  { path: 'produto-servico', component: ProdutoComponent, canActivate: [guardGuard] },
  { path: 'orcamento', component: OrcamentoComponent , canActivate: [guardGuard]}, 
  { path: 'relatorio', component: RelatorioComponent, canActivate: [guardGuard] },
  { path: 'dashboard', component: DashboardComponent , canActivate: [guardGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]