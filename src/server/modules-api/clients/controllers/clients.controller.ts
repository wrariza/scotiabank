import {
  Get,
  Controller,
  Post,
  Body,
  createParamDecorator,
  Put,
  Delete,
} from '@nestjs/common'
import { ClientService } from '../services/clients.service'
import { Client } from '../entitys/client.entity'
import { UpdateResult, DeleteResult } from 'typeorm'

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  get(): Promise<Client[]> {
    return this.clientService.findAll()
  }

  @Post()
  async save(@Body() client: Client): Promise<Client> {
    return this.clientService.save(client)
  }

  @Put()
  async update(@Body() client: Client): Promise<UpdateResult> {
    return this.clientService.update(client)
  }

  @Delete()
  async delete(@Body() idClient: number): Promise<DeleteResult> {
    return this.clientService.delete(idClient)
  }
}
