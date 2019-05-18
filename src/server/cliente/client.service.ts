import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Client } from './client.entity'

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {
    const pr1 = new Client()
    pr1.name = 'william ariza'
    pr1.adress = 'diagonal 79b # 71b-22'
    pr1.phone = 3195854646
    this.clientRepository.save(pr1)
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find()
  }

  async findByName(name: string) {
    const result = await this.clientRepository.find({ name })
    return result[0]
  }
}
