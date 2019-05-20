import { ClientsModule } from './clients/clients.module'
import { ScotyBankComponent } from './scotibank.component'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [ClientsModule],
  declarations: [ScotyBankComponent],
  exports: [ScotyBankComponent],
  entryComponents: [ScotyBankComponent],
})
export class ScotiBankModule {}
