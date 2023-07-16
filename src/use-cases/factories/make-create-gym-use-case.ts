import { CreateGymUseCase } from '../create-gym-usecase'
import { PrismaGymsInsRepository } from '@/repositorys/prisma/prisma-gyms-repository'

export function makeCreateGymUseCase() {
  const gymsRepository = new PrismaGymsInsRepository()
  const useCase = new CreateGymUseCase(gymsRepository)

  return useCase
}
