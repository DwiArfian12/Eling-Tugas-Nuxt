<template>
    <div v-show="showModal" @close-modal="showModal = false" class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
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
          <button type="submit" @click.prevent="$event => addSubject(nama_matkul, nama_dosen, hari, jam)" class="loginBtn">Tambah +</button>
        </form>     
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="/img/close.png" alt="" />
      </div>
    </div>
  </template>

<script setup>

const subjects = ref(null)
const nama_matkul = ref(null)
const nama_dosen = ref(null)
const hari = ref(null)
const jam = ref(null)
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

</script>