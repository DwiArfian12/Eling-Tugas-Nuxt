import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const id = body.id
  const job = body.job
  const subject_id = body.subject_id
  const jenis = body.jenis
  const deadline = body.deadline
  const status = body.status

  if (!(id && subject_id && job && jenis && deadline && status)) return createError({ statusCode: 400, statusMessage: "Missing ID and soon "});

  let subject
  
  if(id && subject_id && job && jenis && deadline && status) {
    subject = await prisma.tasks.update({
      where: {
        id: id,
      },
      data: {
        job: job,
        subject_id: subject_id,
        jenis: jenis,
        deadline: deadline,
        status: status,
      },
    })
  }

  return subject
})
  