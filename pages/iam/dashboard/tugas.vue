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
          <div v-show="isShow" class="addTask">
            <form>
                <div class="fg">
                    <label class="mt-5">Pilih Mata Kuliah</label>
                    <select v-model="nama_matkul">
                      <option value="" disabled selected>Pilih:</option>
                      <template v-for="subject in subjects">
                        <template v-if="subject.user_id == profile.id">
                          <option :value="subject.nama_matkul">{{subject.nama_matkul}}</option>
                        </template>
                      </template>
                    </select>
                </div>
                <div class="fg">
                    <label for="floatingLastName">Job</label>
                    <input v-model="job" type="text" id="floatingLastName" placeholder="Misal: Tugas Latihan 2">
                </div>
                <div class="fg">
                  <label class="mt-5">Pilih Jenis</label>
                    <select v-model="jenis">
                      <option value="" disabled selected>Pilih:</option>
                      <option value="Individu">Individu</option>
                      <option value="Kelompok">Kelompok</option>
                    </select>
                </div>
                <div class="fg">
                    <label for="floatingPassword">Deadline</label>
                    <input v-model="deadline" type="text" id="floatingPassword" placeholder="Misal: 30 April 2023">
                </div>                
                <div class="fg">
                    <label for="floatingPassword">Status</label>
                    <input v-model="status" type="text" id="floatingPassword" placeholder="Misal: Sedang Proses">
                </div>                
                <button type="submit" @click.prevent="addTask(nama_matkul, job, jenis, deadline, status)" @click="isShow = false" class="loginBtn">Tambah +</button>
            </form>    
          </div>
  
          <table class="data">
            <tr>
              <th>Matkul</th>
              <th>Job</th>
              <th>Jenis</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
            <template v-for="task in tasks">
            <tr >
              <td>{{ task.nama_matkul }}</td>
              <td>{{ task.job }}</td>
              <td>{{ task.jenis }}</td>
              <td>{{ task.deadline }}</td>
              <td>{{ task.status }}</td>
              <td>
                <a class="aksi edit" href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="{ editedTask.id = task.id; editedTask.nama_matkul = task.nama_matkul; editedTask.job = task.job; editedTask.jenis = task.jenis; editedTask.deadline = task.deadline;}">Edit</a>
                <a class="aksi hapus" @click="deleteTask(task.id)" href="#">Hapus</a>
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
                        <input v-model="editedTask.nama_matkul" type="text" id="floatingFirstName" placeholder="Misal: Pemrograman">
                      </div>
                      <div class="fg">
                        <label for="floatingLastName">Job</label>
                        <input v-model="editedTask.job" type="text" id="floatingLastName" placeholder="Misal: Tugas Latihan 2">
                      </div>
                      <div class="fg">
                        <label for="floatingEmail">Jenis</label>
                        <input v-model="editedTask.jenis" type="email" id="floatingEmail" placeholder="Misal: Individu/Kelompok">
                      </div>
                      <div class="fg">
                        <label for="floatingPassword">Deadline</label>
                        <input v-model="editedTask.deadline" type="text" id="floatingPassword" placeholder="Misal: 30 April 2023">
                      </div>                
                      <div class="fg">
                        <label for="floatingPassword">Status</label>
                        <input v-model="editedTask.status" type="text" id="floatingFirstName" placeholder="Misal: Sedang Proses">
                      </div>                
                      <button data-bs-dismiss="modal" type="submit" @click.prevent="editTask(editedTask)" @click="isShow = false" class="loginBtn">Edit</button>
                    </form> 
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </template>
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
  
  const profile = {
    id: "",
    firstName: "",
    lastName: "",
  };
  
  // Get profile passed through attributes
  const attrs = useAttrs();
  profile.id = attrs.profile.id;
  profile.firstName = attrs.profile.firstName;
  profile.lastName = attrs.profile.lastName;
  
  const tasks = ref(null)
  const subjects = ref(null)
  const id = ref(null)
  const nama_matkul = ref(null)
  const job = ref(null)
  const jenis = ref(null)
  const deadline = ref(null)
  const status = ref(null)
  const editedTask = ref({
    id: null,
    nama_matkul: null,
    job: null,
    jenis: null,
    deadline: null,
    status: null
  })
  tasks.value = await getTasks()
  subjects.value = await getSubjects()  
  /**
   * @desc Get tasks
   */
  async function getTasks() {
    return await $fetch('/api/tasks')
  }
  async function getSubjects() {
    return await $fetch('/api/subjects')
  }
  
  /**
   * @desc Add tasks
   * @param The fields of task to add
   */
  async function addTask(nama_matkul, job, jenis, deadline, status) {
    let addedTask = null
    addedTask = await $fetch('/api/tasks', {
      method: 'POST',
      body: {
        nama_matkul: nama_matkul,
        job: job,
        jenis: jenis,
        deadline: deadline,
        status: status
      }
    })
  
    if (addedTask) tasks.value = await getTasks()
  }
  
  /**
   * @desc Edit tasks
   * @param The fields of task to edit
   */
   async function editTask(editedTask) {
    let task = null
  
    if(editedTask.id && editedTask.nama_matkul && editedTask.job && editedTask.jenis && editedTask.deadline && editedTask.status)
      task = await $fetch('/api/tasks', {
        method: 'PUT',
        body: {
          id: editedTask.id,
          nama_matkul: editedTask.nama_matkul,
          job: editedTask.job,
          jenis: editedTask.jenis,
          deadline: editedTask.deadline,
          status: editedTask.status,
        }
      })
  
    if (task) tasks.value = await getTasks()
  }
  
  /**
   * @desc Delete tasks
   */
  async function deleteTask(id) {
  
    let deletedTaskOrError = null
  
    deletedTaskOrError = await $fetch('/api/tasks', {
      method: 'DELETE',
      body: {
        id: id
      }
    })
  
    tasks.value = await getTasks()
  }
  
  useHead({
    title: "Tugas",
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