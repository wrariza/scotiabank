import { IClientsState, clientsReducer } from './clients/clients.reducer'
import { createSelector, ActionReducerMap } from '@ngrx/store'

export interface IScotyState {
  clients: IClientsState
}

export const selectClientsState = createSelector(
  (state: IScotyState) => state.clients,
  (state: IClientsState) => state.clients,
)

export const reducers: ActionReducerMap<IScotyState> = {
  clients: clientsReducer,
}
