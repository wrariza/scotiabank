import { Client } from '../../server/modules-api/clients/entitys/client.entity'

export const clientCreate: Client = new Client()
clientCreate.name = 'nombre1'
clientCreate.adress = 'direccion1'
clientCreate.phone = 99999999

export const ClientsJson = [
  {
    id: 1,
    name: 'william ariza',
    adress: 'diagonal 79b # 71b-22',
    phone: 3195854646,
  },
  {
    id: 2,
    name: 'sebastian ariza',
    adress: 'diagonal 79b # 71b-22',
    phone: 3195854646,
  },
]

export const ClientsJsonUpdate = [
  {
    id: 1,
    name: 'william ariza new',
    adress: 'diagonal 79b # 71b-22',
    phone: 3195854646,
  },
]

export const pc = new Promise(resolve => {
  console.log('Initial')
  resolve()
}).then()
