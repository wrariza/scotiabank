import { Action } from '@ngrx/store'
import { Client } from '../../../../domain/models/client.model'

export enum TypeActionClients {
  LoadClientService = '[CLIENTS] service',
  LoadClienthAction = '[CLIENTS] action',
}

export interface IActionClient extends Action {
  type: TypeActionClients
  payload: any
}

export class LoadClientService implements IActionClient {
  public readonly type: TypeActionClients = TypeActionClients.LoadClientService

  constructor(public payload: null) {}
}

export class LoadClientAction implements IActionClient {
  public readonly type: TypeActionClients = TypeActionClients.LoadClienthAction

  constructor(public payload: Client[]) {}
}
