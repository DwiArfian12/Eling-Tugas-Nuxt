<template>
  <div>
    <main>
      <div class="matkul">
        <h1>Daftar Mata Kuliah</h1>
        <div v-if="isShow">
          <button @click="isShow = !isShow" class="tambah">Tutup</button>
        </div>
        <div v-else>
          <button @click="isShow = !isShow" class="tambah">Tambah</button>
        </div>
        <div v-show="isShow" class="addSubject">
          <form>
          <div class="fg">
            <label for="floatingFirstName">Nama Mata Kuliah</label>
            <input v-model="nama_matkul" type="text" class="form-control" id="floatingFirstName" placeholder="Misal: Pemrograman">
          </div>
          <div class="fg">
            <label for="floatingLastName">Nama Dosen</label>
            <input v-model="nama_dosen" type="text" class="form-control" id="floatingLastName" placeholder="Misal: Dwi Arfian, M.Pd">
          </div>
          <div class="fg">
            <label for="floatingEmail">Hari</label>
            <input v-model="hari" type="email" class="form-control" id="floatingEmail" placeholder="Misal: Senin">
          </div>
          <div class="fg">
            <label for="floatingPassword">Jam</label>
            <input v-model="jam" type="text" class="form-control" id="floatingPassword" placeholder="Misal: 09.11 - 12.30">
          </div>                
          <button type="submit" @click.prevent="addSubject(nama_matkul, nama_dosen, hari, jam)" @click="isShow = false" class="loginBtn">Tambah +</button>
        </form>    
        </div>

        <table class="data">
          <tr>
            <th>Matkul</th>
            <th>Dosen</th>
            <th>Hari</th>
            <th>Jam</th>
            <th>Aksi</th>
          </tr>
          <tr v-for="(subject, index) in subjects">
            <td>{{ subject.nama_matkul }}</td>
            <td>{{ subject.nama_dosen }}</td>
            <td>{{ subject.hari }}</td>
            <td>{{ subject.jam }}</td>
            <td>
              <a class="aksi edit" href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="{ editedSubject.id = subject.id; editedSubject.nama_matkul = subject.nama_matkul; editedSubject.nama_dosen = subject.nama_dosen; editedSubject.hari = subject.hari; editedSubject.jam = subject.jam;}">Edit</a>
              <a class="aksi hapus" @click="deleteSubject(subject.id)" href="#">Hapus</a>
            </td>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Data Mata Kuliah</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="fg">
                      <label for="floatingFirstName">Nama Mata Kuliah</label>
                      <input v-model="editedSubject.nama_matkul" type="text" class="form-control" id="floatingFirstName" placeholder="Misal: Pemrograman">
                    </div>
                    <div class="fg">
                      <label for="floatingLastName">Nama Dosen</label>
                      <input v-model="editedSubject.nama_dosen" type="text" class="form-control" id="floatingLastName" placeholder="Misal: Dwi Arfian, M.Pd">
                    </div>
                    <div class="fg">
                      <label for="floatingEmail">Hari</label>
                      <input v-model="editedSubject.hari" type="email" class="form-control" id="floatingEmail" placeholder="Misal: Senin">
                    </div>
                    <div class="fg">
                      <label for="floatingPassword">Jam</label>
                      <input v-model="editedSubject.jam" type="text" class="form-control" id="floatingPassword" placeholder="Misal: 09.11 - 12.30">
                    </div>                
                    <button data-bs-dismiss="modal" type="submit" @click.prevent="editSubject(editedSubject)" @click="isShow = false" class="loginBtn">Edit</button>
                  </form> 
                </div>
              </div>
            </div>
          </div>
          </tr>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ToggleDiv",
  data: function () {
    return {
      isShow: false,
    };
  },

  props: {
    msg: String,
  },
};</script>

<script setup>

const subjects = ref(null)
const id = ref(null)
const nama_matkul = ref(null)
const nama_dosen = ref(null)
const hari = ref(null)
const jam = ref(null)
const editedSubject = ref({
  id: null,
  nama_matkul: null,
  nama_dosen: null,
  hari: null,
  jam: null,
})
subjects.value = await getSubjects()

/**
 * @desc Get subjects
 */
async function getSubjects() {
  return await $fetch('/api/subjects')
}

/**
 * @desc Add subjects
 * @param The fields of subject to add
 */
async function addSubject(nama_matkul, nama_dosen, hari, jam) {
  let addedSubject = null
  addedSubject = await $fetch('/api/subjects', {
    method: 'POST',
    body: {
      nama_matkul: nama_matkul,
      nama_dosen: nama_dosen,
      hari: hari,
      jam: jam
    }
  })

  if (addedSubject) subjects.value = await getSubjects()
}

/**
 * @desc Edit subjects
 * @param The fields of subject to edit
 */
 async function editSubject(editedSubject) {
  let subject = null

  if(editedSubject.id && editedSubject.nama_matkul && editedSubject.nama_dosen && editedSubject.hari && editedSubject.jam)
    subject = await $fetch('/api/subjects', {
      method: 'PUT',
      body: {
        id: editedSubject.id,
        nama_matkul: editedSubject.nama_matkul,
        nama_dosen: editedSubject.nama_dosen,
        hari: editedSubject.hari,
        jam: editedSubject.jam
      }
    })

  if (subject) subjects.value = await getSubjects()
}

/**
 * @desc Delete subjects
 */
async function deleteSubject(id) {

  let deletedSubjectOrError = null

  deletedSubjectOrError = await $fetch('/api/subjects', {
    method: 'DELETE',
    body: {
      id: id
    }
  })

  subjects.value = await getSubjects()
}

useHead({
  title: "Mata Kuliah",
  link: [{
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    type: "text/css",
  }],
  script: [{
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  }],
})
</script>