import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'
import { makeSearchGymsUseCase } from '@/use-cases/factories/make-search-gyms-use-case'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchGymsQueryBodySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { query, page } = searchGymsQueryBodySchema.parse(request.query)

  const serachGymsUseCase = makeSearchGymsUseCase()
  const { gyms } = await serachGymsUseCase.execute({
    query,
    page,
  })

  return reply.status(200).send({
    gyms,
  })
}
