import RESTRepository from './restRepository'

import client from './client'

export default function createRESTRepository(): RESTRepository {
  return new RESTRepository({client})
}
