import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientService } from './services/clients.service'
import { ClientsController } from './controllers/clients.controller'
import { Client } from './entitys/client.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
  controllers: [ClientsController],
})
export class ClientModule {}
