import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'
import { PrismaGymsInsRepository } from '@/repositorys/prisma/prisma-gyms-repository'

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsInsRepository()
  const useCase = new FetchNearbyGymsUseCase(gymsRepository)

  return useCase
}
