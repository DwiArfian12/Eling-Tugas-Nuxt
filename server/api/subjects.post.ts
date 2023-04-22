import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let subject = null
  
  if(body.user_id && body.nama_matkul && body.nama_dosen && body.hari && body.jam) {
    await prisma.subjects.create({
      data: {
        user_id: body.user_id,
        nama_matkul: body.nama_matkul,
        nama_dosen: body.nama_dosen,
        hari: body.hari,
        jam: body.jam,
      },
    }).then((response) => {
      subject = response
    })
  }

  return {
    subject: subject
  }
})
  