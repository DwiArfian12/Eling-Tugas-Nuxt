import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let task = null
  
  if(body.subject_id && body.job && body.jenis && body.deadline && body.status) {
    await prisma.tasks.create({
      data: {
        job: body.job,
        subject_id: body.subject_id,
        jenis: body.jenis,
        deadline: body.deadline,
        status: body.status,
      },
    }).then((response) => {
      task = response
    })
  }

  return {
    task: task
  }
})