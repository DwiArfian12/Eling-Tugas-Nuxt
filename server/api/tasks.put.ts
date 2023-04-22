import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const id = body.id
  const nama_matkul = body.nama_matkul
  const job = body.job
  const jenis = body.jenis
  const deadline = body.deadline
  const status = body.status

  if (!(id && nama_matkul && job && jenis && deadline && status)) return createError({ statusCode: 400, statusMessage: "Missing ID and soon "});

  let task
  
  if(id && nama_matkul && job && jenis && deadline && status) {
    task = await prisma.tasks.update({
      where: {
        id: id
      },
      data: {
        nama_matkul: nama_matkul,
        job: job,
        jenis: jenis,
        deadline: deadline,
        status: status
      },
    })
  }

  return task
})
  