import { FactoryProvider } from '@angular/core'
import { Client } from '../../../../../domain/models/client.model'
import { IService } from '../../../../../domain/interfaces/core/IService'
import { ClientsService } from './clients.services'

export const TokenClientsService = 'clients.service'

// todo, verify why broken in build
export class PromocodeServiceProvider implements FactoryProvider {
  public deps: any[] = [ClientsService]
  public multi = false
  public provide: string = TokenClientsService
  public useFactory = (...deps: IService<Client>[]) => deps[0]
}
