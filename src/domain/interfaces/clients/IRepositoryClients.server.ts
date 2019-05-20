import { IRepository } from '../core/IRepository'
import { Client } from '../../models/client.model'

export interface IRepositoryClientsServer extends IRepository<Client> {}
