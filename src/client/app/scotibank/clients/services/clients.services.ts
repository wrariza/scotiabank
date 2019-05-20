import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Client } from '../../../../../domain/models/client.model'

@Injectable()
export class ClientsService {
  constructor(private readonly http: HttpClient) {}

  private readonly baseURL = 'scotiabank/api/clients'

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL)
  }
}
