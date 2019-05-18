import { Get, Controller, Param } from '@nestjs/common'
import { ClientService } from './client.service'
import { Client } from './client.entity'

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getProducts(): Promise<Client[]> {
    return this.clientService.findAll()
  }

  @Get(':name')
  getProductByName(@Param() params: any): Promise<Client> {
    return this.clientService.findByName(params.name)
  }
}
