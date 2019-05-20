import { Injectable, Inject } from '@angular/core'
import { switchMap, map } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { TokenClientsService } from '../../scotibank/clients/services/clients.provider'
import { MatSnackBar } from '@angular/material'
import {} from './clients.reducer'
import {
  TypeActionClients as act,
  LoadClientAction,
  IActionClient,
} from './clients.actions'

@Injectable()
export class ClientsEffects {
  constructor(
    private actions: Actions,
    @Inject(TokenClientsService)
    private readonly serviceClient,
  ) {}

  @Effect()
  loadClients$ = this.actions.pipe(ofType(act.LoadClientService)).pipe(
    switchMap((action: IActionClient) => {
      return this.serviceClient.getClients(action.payload)
    }),
  )
}
