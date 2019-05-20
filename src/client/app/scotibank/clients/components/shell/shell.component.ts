import { OnInit, Component } from '@angular/core'
import { Client } from '../../../../../../domain/models/client.model'
import { IScotyState } from '../../../../store/index.store'
import { selectClientsState } from '../../../../store/index.store'
import { select, Store } from '@ngrx/store'
import { LoadClientService } from '../../../../store/clients/clients.actions'

@Component({
  selector: 'scoty-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  clients: Client[]

  constructor(private store: Store<IScotyState>) {}

  ngOnInit() {
    this.store
      .pipe(select(selectClientsState))
      .subscribe(clients => (this.clients = clients))
    this.store.dispatch(new LoadClientService(null))
  }
}
