import { PrismaUsersRepository } from '@/repositorys/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register-usecase'

export function makeRegisterUserCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(prismaUsersRepository)

  return registerUseCase
}
