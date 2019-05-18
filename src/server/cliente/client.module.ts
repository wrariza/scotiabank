import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Client } from './client.entity'
import { ClientService } from './client.service'
import { ClientsController } from './client.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
  controllers: [ClientsController],
})
export class ClientModule {}
