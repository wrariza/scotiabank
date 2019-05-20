import { Client } from '../../../../domain/models/client.model'
import { reducer } from '../../../utils/reducer'
import { IActionClient, TypeActionClients } from './clients.actions'

export interface IClientsState {
  clients: Client[]
  clientDetail: Client
}

const initClientState: IClientsState = {
  clients: null,
  clientDetail: null,
}

export function clientsReducer(s, a: IActionClient) {
  return reducer(
    {
      LoadClientService: action => ({
        clients: action.payload,
      }),
    },
    TypeActionClients,
    initClientState,
  )(s, a)
}
