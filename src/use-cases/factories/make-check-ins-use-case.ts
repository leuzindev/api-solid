import { PrismaGymsInsRepository } from '@/repositorys/prisma/prisma-gyms-repository'
import { CheckInUseCase } from '../check-in-usecase'
import { PrismaCheckInsRepository } from '@/repositorys/prisma/prisma-check-ins-repository'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsInsRepository()
  const useCase = new CheckInUseCase(checkInsRepository, gymsRepository)

  return useCase
}
