import { Injectable, createParamDecorator } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult, DeleteResult } from 'typeorm'
import { Client } from '../entitys/client.entity'

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find()
  }

  async save(client: Client): Promise<Client> {
    const c = new Client()
    c.name = client.name
    c.adress = client.adress
    c.phone = client.phone

    return await this.clientRepository.save(c)
  }

  async update(client: Client): Promise<UpdateResult> {
    return await this.clientRepository.update(client.id, client)
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.clientRepository.delete(id)
  }
}
