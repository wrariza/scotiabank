import { ShellComponent } from './components/shell/shell.component'
import { RouterModule } from '@angular/router'
import { ClientsService } from './services/clients.services'
import { NgModule } from '@angular/core'
import { TokenClientsService } from './services/clients.provider'
import { HttpClientModule } from '@angular/common/http'

const components = [ShellComponent]

@NgModule({
  imports: [RouterModule, HttpClientModule],
  declarations: [...components],
  exports: [ShellComponent],
  entryComponents: [...components],
  providers: [
    ClientsService,
    {
      provide: TokenClientsService,
      useFactory: (...deps) => deps[0],
      deps: [ClientsService],
      multi: false,
    },
  ],
})
export class ClientsModule {}
