import { PrismaUsersRepository } from '@/repositorys/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate-usecase'

export function makeAuthenticateUserCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(prismaUsersRepository)

  return authenticateUseCase
}
