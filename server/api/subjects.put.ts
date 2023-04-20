import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const id = body.id
  const nama_matkul = body.nama_matkul
  const nama_dosen = body.nama_dosen
  const hari = body.hari
  const jam = body.jam

  if (!(id && nama_matkul && nama_dosen && hari && jam)) return createError({ statusCode: 400, statusMessage: "Missing ID and soon "});

  let subject
  
  if(id && nama_matkul && nama_dosen && hari && jam) {
    subject = await prisma.subjects.update({
      where: {
        id: id,
      },
      data: {
        nama_matkul: nama_matkul,
        nama_dosen: nama_dosen,
        hari: hari,
        jam: jam,
      },
    })
  }

  return subject
})
  