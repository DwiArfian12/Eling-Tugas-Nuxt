import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  
  const body = await readBody(event)
  let task = null
  let error = null

  if (body.id) {
    await prisma.tasks.delete({
      where: {
        id: body.id
      }
    }).then((response) => {
      task = response
    }).catch(async (e) => {
      error = e
    })
  }

  if(error) return createError({ statusCode: 500, statusMessage: "Server error"});

  return task

})
  