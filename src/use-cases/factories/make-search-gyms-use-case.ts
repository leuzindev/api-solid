import { SearchGymsUseCase } from '../search-gyms-usecase'
import { PrismaGymsInsRepository } from '@/repositorys/prisma/prisma-gyms-repository'

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsInsRepository()
  const useCase = new SearchGymsUseCase(gymsRepository)

  return useCase
}
