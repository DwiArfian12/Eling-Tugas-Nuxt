import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let task = null
  
  if(body.nama_matkul && body.job && body.jenis && body.deadline && body.status) {
    await prisma.tasks.create({
      data: {
        nama_matkul: body.nama_matkul,
        job: body.job,
        jenis: body.jenis,
        deadline: body.deadline,
        status: body.status
      },
    }).then((response) => {
      task = response
    })
  }

  return {
    task: task
  }
})